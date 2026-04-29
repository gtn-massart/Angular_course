import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThingsService {
  things = signal<string[]>([]);

  add(text: string) {
    this.things.update((things) => [...things, text]);
  }
}
