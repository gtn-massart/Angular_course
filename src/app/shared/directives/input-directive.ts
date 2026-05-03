import { computed, Directive, ElementRef, inject, input, signal, effect } from '@angular/core';

@Directive({
  selector: '[appInput]',
  host: {
    // '[style.color]': '"blue"',
    // '[style.color]': 'getColor()',
    '[style.color]': 'color()',
    '(window:keydown)': 'keydown($event)',
  },
})
export class InputDirective {
  myhost = inject(ElementRef<HTMLInputElement>);
  color = computed(() => this.colors[this.colorIndex()])
  colorIndex = signal(0);
  colors = ['red', 'cyan', 'green', 'yellow'];
  appInput = input<boolean>()

  constructor() {
    console.log('in directive');
    console.log(this.myhost);
    // this.myhost.nativeElement.style.color = 'crimson';
    effect(() => {
      console.log(this.appInput());
    })
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
