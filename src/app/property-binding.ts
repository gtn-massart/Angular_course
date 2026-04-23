import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <input [type]="inputType" />
      <button [disabled]="invalidForm">Submit</button>
      <p [class]="isActive">I'm Green</p>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
    .isActive {
      color: darkgreen;
    }
    p {
      font-size: 23px;
      font-weight: bold;
    }
  `,
})
export class PropertyBinding {
  title = 'Property binding';
  inputType = 'date';
  invalidForm = true;
  isActive = 'isActive';
}
