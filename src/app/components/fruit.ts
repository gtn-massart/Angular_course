import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit',
  imports: [],
  template: `<p>{{ title }}</p>`,
  styles: ``,
})
export class FruitComponent {
  title = 'Je suis un fruit';
}
