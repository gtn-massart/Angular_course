import { Component, computed, effect, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  lang: string[];
}

@Component({
  selector: 'app-signal-linked-signal',
  imports: [FormsModule],
  template: `
    <div>
      <h1>Signal linkedSignal()</h1>
      <select [ngModel]="selectedProduct()" (ngModelChange)="selectedProduct.set($event)">
        <option disabled [value]="null">Choose a product</option>
        @for (product of products(); track product.name) {
          <option [ngValue]="product">{{ product.name }}</option>
        }
      </select>
      <hr />
      <input [ngModel]="quantity()" (ngModelChange)="quantity.set($event)" type="number" />
      <hr />
      @if (this.selectedProduct()) {
        <select [ngModel]="selectedLang()" (ngModelChange)="selectedLang.set($event)">
          <option disabled [value]="null">Choose a lang</option>
          @for (lang of this.selectedProduct()?.lang; track $index) {
            <option [value]="lang">{{ lang }}</option>
          }
        </select>
        <hr />
      }

      <h3>Prix : {{ price() }}</h3>
    </div>
  `,
  styles: `  
    div {
      text-align: center;
    }
  `,
})
export class DymaComponent {
  products = signal<Product[]>([
    {
      name: 'Cz Shadow 2',
      price: 1800,
      lang: ['fr', 'en'],
    },
    {
      name: 'Glock 17',
      price: 600,
      lang: ['es', 'en'],
    },
  ]);
  selectedProduct = signal<Product | null>(null);
  selectedLang = linkedSignal(() => this.selectedProduct()?.lang[0]);
  quantity = linkedSignal({
    source: this.selectedProduct,
    computation: () => 1,
  });
  price = computed(() => this.selectedProduct()?.price || 0 * this.quantity());

  // constructor() {
  //   effect(() => {
  //     console.log(this.selectedProduct());
  //     console.log(this.quantity());
  //   });
  // }
}
