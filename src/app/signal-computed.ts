import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-computed',
  imports: [FormsModule],
  template: `
    <div>
      <h1>Signal computed()</h1>
      <h3>{{ message() }}</h3>
      <div>
        <label for="year">Année de naissance</label>
        <input type="number" id="year" [(ngModel)]="yearOfBirth" />
        <h3>Votre âge : {{ age() }} ans</h3>
      </div>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
    input {
      margin-left: 15px;
    }
  `,
})
export class SignalComputed {
  private baseMessage = signal('Bienvenue');
  message = computed(() => this.baseMessage() + ' sur Angular');

  yearOfBirth = signal(1982); // signal modifiable
  actualYear = signal(new Date().getFullYear()); // signal modifiable

  // ↓ Signal en lecture seul. Ce signal est créé pour exposer des données sans permettre leur modification directe depuis le composant ou le template.
  //   Cela est utile pour protéger certaines données critiques ou calculées.
  //   Le signal age est dérivé de actualYear() et yeearOfBirth()
  age = computed(() => this.actualYear() - this.yearOfBirth());
}
