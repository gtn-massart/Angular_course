import { Directive, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: '[appInput]',
  host: {
    // '[style.color]': '"blue"',
    // '[style.color]': 'getColor()',
    '[style.color]': 'color()',
  },
})
export class InputDirective {
  myhost = inject(ElementRef<HTMLInputElement>);
  color = signal<string>('purple');

  constructor() {
    console.log('in directive');
    console.log(this.myhost);
    // this.myhost.nativeElement.style.color = 'crimson';

    setTimeout(() => {
      this.color.set('green');
    }, 3000);
  }

  getColor() {
    return 'orange';
  }
}
