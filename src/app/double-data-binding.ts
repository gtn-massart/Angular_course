import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-double-data-binding',
  imports: [FormsModule],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <input type="text" [(ngModel)]="inputText" />
      <p>{{ inputText }}</p>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
  `,
})
export class DoubleDataBinding {
  title = 'Double data binding';
  inputText = '';
}
