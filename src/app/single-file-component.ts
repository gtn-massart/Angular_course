import { Component } from '@angular/core';

@Component({
  selector: 'app-single-file-component',
  imports: [],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>Bienvenue dans notre application Angular</p>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
    h1 {
      color: crimson;
    }
  `,
})
export class SingleFileComponent {
  // ↓ la propriété title n'est pas typée explicitement mais typescript sait qu'il s'agit d'un type string car nous l'assignons directement avec une chaîne de charactère.
  title = 'SFC - Single File Component';
}
