import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  host: {
    role: 'button', // Attribut statique
    '[attr.aria-label]': 'label', // Attribut lié à une proppriété
    '[class.active]': 'isActive()', // Classe CSS conditionnelle
    // '[disabled]': 'isDisabled', // Propriété DOM
    '(click)': 'onClick($event)', // Évenement DOM
  },
  imports: [],
  template: `
    <div>
      <h1>Host</h1>
      <p>Contenu du composant</p>
    </div>
  `,
  styles: ``,
})
export class Host {
  label: string = 'Exemple';
  isDisabled: boolean = false;

  isActive() {
    return !this.isDisabled;
  }

  onClick(event: Event) {
    console.log('Clique détecté !', event);
  }
}
