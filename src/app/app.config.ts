import {
  ApplicationConfig,
  inject,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr'
import { routes } from './app.routes';
import { MY_CONFIG_TOKEN, MyClass } from './shared/dummy';
import { config } from 'rxjs';

registerLocaleData(fr)

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
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
  ],
};
