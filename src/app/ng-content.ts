import { Component } from '@angular/core';
import { Card } from './components/card';

@Component({
  selector: 'app-ng-content',
  imports: [Card],
  template: `
    <div>
      <h1>Directive ngContent</h1>
      <app-card>
        <h2 class="title">Article sur quelque chose</h2>
        <p class="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At id exercitationem quae
          dolores quis provident mollitia perferendis vitae. Ut, corporis. Ipsam ipsa iste
          perspiciatis illum culpa est, modi possimus autem!
        </p>
      </app-card>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
  `,
})
export class NgContent {}
