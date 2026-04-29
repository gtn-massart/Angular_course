import { Component, inject } from '@angular/core';
import { MY_CONFIG_TOKEN, MyClass } from './shared/dummy';

@Component({
  selector: 'app-token-class-injection',
  imports: [],
  template: `
    <div>
      <h1>Token, classe et injection</h1>
      <p>{{myClass.test}}</p>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
  `,
})
export class TokenClassInjection {
  myClass = inject(MyClass);
  myConfig = inject(MY_CONFIG_TOKEN);

  constructor() {
    console.log(this.myClass);
    console.log(this.myConfig);    
  }
}


