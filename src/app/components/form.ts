import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThingsService } from '../shared/services/things-service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  template: `
    <div>
      <input type="text" [(ngModel)]="thing" />
      <button (click)='add()'>Ajouter</button>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
  `,
})
export class Form {
  thing = '';
  thingsService = inject(ThingsService);

  add() {
    this.thingsService.add(this.thing)
  }
}
