import { Component, signal } from '@angular/core';
import { Input2Directive } from './shared/directives/input2-directive';


@Component({
  selector: 'app-les-directives-structurelles',
  imports: [Input2Directive],
  template: `
    <div>
      <h1>Les directives structurelles</h1>
      <button (click)="toggle.set(!toggle())">toggle</button>
      <input *appInput="toggle()" type="text">
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
  `,
})
export class LesDirectivesStructurelles {
  toggle = signal(false);
}
