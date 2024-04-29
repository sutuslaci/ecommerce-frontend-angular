import { catchError, EMPTY, throwError } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { TokenHelper } from '../helpers/token.helper';
import { AuthenticationResponse } from '../models/authentication-response';
import { RegistrationRequest } from '../models/registration-request';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _isAuthenticated = signal(false);
    private _errors = signal(null);

    readonly isAuthenticated = this._isAuthenticated.asReadonly();
    readonly errors = this._errors.asReadonly();

    constructor(
        private httpClient: HttpClient,
        private jwtHelperService: JwtHelperService
    ) { }

    initAuthenticationState(): void {
        const accessToken = TokenHelper.getAccessToken();
        const isTokenExpired = this.jwtHelperService.isTokenExpired(accessToken);
        this._isAuthenticated.set(!isTokenExpired);
    }

    login(email: string, password: string): void {
        this.httpClient.post<AuthenticationResponse>('http://localhost:8080/api/auth/login', { email, password }).pipe(
            catchError((error: HttpErrorResponse) => {
                this.handleUnauthorizedError(error);
                return EMPTY;
            })
        ).subscribe((response: AuthenticationResponse) =>
            this.authenticate(response.accessToken)
        );
    }

    logout(): void {
        TokenHelper.removeAccessToken();
        this._isAuthenticated.set(false);
    }

    signUp(registrationRequest: RegistrationRequest): void {
        this.httpClient.post<AuthenticationResponse>('http://localhost:8080/api/auth/registration', registrationRequest).pipe(
            catchError(throwError)
        ).subscribe((response: AuthenticationResponse) =>
            this.authenticate(response.accessToken)
        );
    }

    private authenticate(accessToken: string): void {
        TokenHelper.saveAccessToken(accessToken);
        this._isAuthenticated.set(true);
    }

    private handleUnauthorizedError(error: HttpErrorResponse): void {
        this._errors.set(error.error);
    }
}
