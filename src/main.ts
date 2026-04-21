import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
//src/main.ts — Bootstrap
//App start అయ్యే point. bootstrapApplication(App, appConfig) అని call చేస్తుంది.
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
