import { Injectable, signal, inject } from '@angular/core';
import { LoggerService } from './logger-service';

@Injectable({
  providedIn: 'root',
})
export class ThingsService {
  things = signal<string[]>([]);
  logger = inject(LoggerService);

  add(text: string) {
    this.things.update((things) => [...things, text]);
  }

  remove(index: number) {
    this.things.update((things) => things.filter((c, i) => i !== index));
    this.logger.log(this.things());
  }
}
