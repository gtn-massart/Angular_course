import { computed, Directive, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: '[appInput]',
  host: {
    // '[style.color]': '"blue"',
    // '[style.color]': 'getColor()',
    '[style.color]': 'color()',
    '(keydown)': 'keydown($event)',
  },
})
export class InputDirective {
  myhost = inject(ElementRef<HTMLInputElement>);
  color = computed(() => this.colors[this.colorIndex()])
  colorIndex = signal(0);
  colors = ['red', 'cyan', 'green', 'yellow'];

  constructor() {
    console.log('in directive');
    console.log(this.myhost);
    // this.myhost.nativeElement.style.color = 'crimson';
  }

  getColor() {
    return 'orange';
  }

  keydown(event: KeyboardEvent) {
    // console.log(event);
    this.colorIndex.update((i) => ++i % 4);
    console.log(this.colorIndex());
  }
}
