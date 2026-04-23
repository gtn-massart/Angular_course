import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-string',
  imports: [],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <ul>
        <li>{{ isLoggedin }}</li>
        <li>{{ number }}</li>
        <li>{{ name }}</li>
        <li>{{ 1 + 1 }}</li>
        <li>{{ isLoggedin ? 'connecté' : 'non connecté' }}</li>
        <li>{{ displayName() }}</li>
        <li>{{ user.name }}</li>
      </ul>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
  `,
})
export class InterpolationString {
  title = 'Interpolation string';
  isLoggedin = true;
  number = 42;
  name: string | undefined;
  user = {
    name: 'Marmouz',
  };

  displayName() {
    return 'Hello World';
  }
}
