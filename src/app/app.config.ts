import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './request.interceptor';

import { InitService } from './init.service';
import { provideAnimations } from '@angular/platform-browser/animations';

function initFactory(initService: InitService) {
  return () => initService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([requestInterceptor])),
    {
        provide: APP_INITIALIZER,
        useFactory: initFactory,
        multi: true,
        deps: [InitService],
    },
    provideAnimations()
]
};
