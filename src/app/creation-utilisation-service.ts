import { Component } from '@angular/core';
import { Form } from './components/form';
import { List } from './components/list';

@Component({
  selector: 'app-creation-utilisation-service',
  imports: [Form, List],
  template: `
    <div>
      <h1>Création et utilisation d'un service</h1>
      <app-form />
      <app-list />
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
  `,
})
export class CreationUtilisationService {}
