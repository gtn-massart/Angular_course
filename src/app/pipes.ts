import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { HidePipe } from './shared/pipes/hide-pipe';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, JsonPipe, CurrencyPipe, DatePipe, HidePipe],
  template: `
    <div>
      <h1>Les pipes |</h1>
      <h3>{{ name | uppercase }}</h3>
      <h3>{{ name | uppercase | lowercase }}</h3>
      <h3>{{ name | titlecase }}</h3>
      <h3>{{ result | number: '1.0-2' }}</h3>
      <!-- <h3>{{ result | number: '2.0-2' }}</h3> -->
      <h3>{{ user | json }}</h3>
      <!-- <pre>{{ user | json }}</pre> -->
       <h3>{{ price | currency: 'EUR'}}</h3>
       <h3>{{ today | date: 'EEEE dd MMMM yy'}}</h3>
       <!-- ↓ custom pipe -->
       <h3>{{ password | hide: 3 }}</h3>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
  `,
})
export class Pipes {
  name = 'marmouz';
  result = 1 / 3;
  user = {
    local: {
      email: 'test@gmail.com',
    },
    city: {
      name: 'Liège',
    },
  };
  price = 50;
  today = new Date();
  password = '123456';

}
