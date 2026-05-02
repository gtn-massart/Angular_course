import { Component } from '@angular/core';
import { InputDirective } from './shared/directives/input-directive';

@Component({
  selector: 'app-les-directives',
  imports: [InputDirective],
  template: `
    <div>
      <h1>Les directives</h1>
      <input appInput type="text">
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
  `,
})
export class LesDirectives {}
