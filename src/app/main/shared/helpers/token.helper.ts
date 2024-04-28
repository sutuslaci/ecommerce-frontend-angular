
const ACCESS_TOKEN_KEY = 'accessToken';

export class TokenHelper {
    static getAccessToken(): string | null {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    }

    static saveAccessToken(accessToken: string): void {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    }

    static removeAccessToken(): void {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
}
