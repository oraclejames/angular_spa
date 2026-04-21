import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//src/app/app.config.ts — App Configuration
//Angular 17+ లో NgModule బదులు standalone configuration వాడతారు. provideRouter, provideHttpClient ఇక్కడ add చేస్తారు.
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
