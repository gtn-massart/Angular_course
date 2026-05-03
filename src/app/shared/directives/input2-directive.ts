import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInput]',
})
export class Input2Directive {
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);
  appInput = input<boolean>();

  show$ = effect(() => {
    if (this.appInput()) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $hello: 'world',
      });
    } else {
      this.viewContainerRef.clear()
    }
  });
}
