import { Component, inject } from '@angular/core';
import { ThingsService } from '../shared/services/things-service';

@Component({
  selector: 'app-list',
  imports: [],
  template: `
    <div>
      <ul>
        @for (thing of things(); track $index) {
          <li>{{ thing }}</li>
        }
      </ul>
    </div>
  `,
  styles: `
    ul {
      list-style-type: none;
      padding: 0;
    }
  `,
})
export class List {
  thingsService = inject(ThingsService);
  things = this.thingsService.things;
}
