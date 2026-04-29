import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { routes } from './app.routes';
import { MY_CONFIG_TOKEN, MyClass } from './shared/dummy';
import { config } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    {
      provide: MY_CONFIG_TOKEN,
      useFactory: () => {
        const myClass = inject(MyClass);
        console.log('deps : ', myClass);
        return config;
      },
      deps: [MyClass],
    },
  ],
};
