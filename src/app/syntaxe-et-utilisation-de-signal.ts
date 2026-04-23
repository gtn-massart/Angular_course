import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-syntaxe-et-utilisation-de-signal',
  imports: [],
  template: `
    <div>
      <h1>{{ title() }}</h1>
      <h3>{{ compteur() }}</h3>
      <button (click)="incrementer()">+1</button>
      <button (click)="reinitialiser()">Réinitialiser</button>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
  `,
})
export class SyntaxeEtUtilisationDeSignal {
  // ↓ Un signal est une variable réactive.
  title = signal("Utilisation d'un");
  compteur = signal(0);

  constructor() {
    setTimeout(() => {
      this.title.update((oldValue) => {
        return oldValue + ' Signal';
      });
    }, 3000);
  }

  incrementer() {
    this.compteur.update((actualValue) => actualValue + 1);
  }

  reinitialiser() {
    this.compteur.set(0);
  }
}
