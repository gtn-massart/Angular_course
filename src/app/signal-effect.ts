import { JsonPipe } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-effect',
  imports: [FormsModule, JsonPipe],
  template: ` 
  <div>
    <h1>Signal effect()</h1>
    <label for="produit">ID Produit :</label>
    <input id="produit" type="number" [(ngModel)]="idProduit" />
    <h3>Détails du produit</h3>
    <pre>{{ produit() | json }}</pre>
  </div> `,
  styles: `
    div {
      text-align: center;
    }
  `,
})
export class SignalEffect {
  idProduit = signal(1); // ID du produit sélectionné
  produit = signal({}); // Données du produit

  constructor() {
    effect(() => {
      const id = this.idProduit();
      fetch(`https://api.exemple.com/produits/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.produit.set(data);
        })
        .catch((err) => console.error('Erreur de récupération :', err));
    });
  }  
}


