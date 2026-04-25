import { Component, ElementRef, viewChild, viewChildren, signal, effect } from '@angular/core';
import { FruitComponent } from './components/fruit';

@Component({
  selector: 'app-view-child-view-children',
  imports: [FruitComponent],
  template: `
    <div>
      <h1>viewChild() et viewChildren()</h1>
      <input #myInput type="text" />
      <button (click)="addFruit()">Add</button>
      <app-fruit />
      <app-fruit />
      <app-fruit />
      <app-fruit />
      <ul>
        @for (fruit of fruits(); track $index) {
          <li #li>{{ fruit }}</li>
        }
      </ul>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
  `,
})
export class ViewChildViewChildren {
  myInput = viewChild<ElementRef<HTMLInputElement>>('myInput');
  fruit = viewChild(FruitComponent);
  lis = viewChildren<ElementRef<HTMLLIElement>[]>('li');
  fruitsRef = viewChildren(FruitComponent);

  fruits = signal(['fraise', 'pomme']);
  addFruit() {
    const fruit = this.myInput()?.nativeElement?.value;
    if (fruit) {
      this.fruits.update((fs) => [...fs, fruit]);
      this.myInput()!.nativeElement!.value = '';
    }
  }

  constructor() {
    effect(() => {
      console.log(this.myInput());
      console.log(this.fruit());
      console.log(this.lis());
      console.log(this.fruitsRef());
      
    });
  }
}
