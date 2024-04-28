import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { routes } from './app.routes';
import { TokenHelper } from './main/shared/helpers/token.helper';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: TokenHelper.getAccessToken,
          allowedDomains: ["example.com"],
          disallowedRoutes: ["http://example.com/examplebadroute/"],
        },
      })
    ),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
  ]
};
