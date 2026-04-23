import { Component } from '@angular/core';

@Component({
  selector: 'app-rendu-conditionnel',
  imports: [],
  template: `
    <div>
      <h1>Rendu conditionnel</h1>

      @if (user.address.city; as city) {
        <h3>Dans une ville : {{ city }}</h3>
      } @else {
        <h3>error</h3>
      }

      <!-- ************************************************** -->

      <!-- ↓ Pas besoin de mot break dans le switch avec Angular. Dés qu'un bloc correspond, aucun autre n'est évalué. -->
      @switch (user.role) {
        @case ('dev') {
          <h3>Je suis dev</h3>
        }
        @case ('admin') {
          <h3>Je suis admin</h3>
        }
        @default {
          <h3>default</h3>
        }
      }

      <!-- ************************************************** -->

      <ul>
        <!-- ↓ La directive track permet à Angular de maintenir une correspondance entre les données et les éléments du DOM -->
        @for (user of users; track $index) {
          <li [class.first]="$first" [class.last]="$last" [class.even]="$even">
            <!-- Lors de l'utilisation de la directive @for, plusieurs variables contextuelles sont disponibles pour chaque itération.  -->
            {{ user }} | index : {{ $index }} | count : {{ $count }} | first : {{ $first }} | last : {{ $last }} |
            even : {{ $even }} | odd : {{ $odd }}
          </li>
        } @empty {
          <li>Aucun user</li>
        }
      </ul>

      <!-- ************************************************** -->
      
      <!-- ↓ variable locale de template. Attention, elle ne peut plus être réassignée malgré le mot let -->
      @let greeting = "Bonjour " + name;

      <h3>{{greeting}}</h3>

      <!-- ************************************************** -->

      <button (click)="test(moninput)">test</button>
      <!-- ↓ Une référence locale est une variable déclarée directement dans le template HTML en utilisant le caractère # -->
      <input type="text" #moninput />
      
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li {
      border: 1px solid #888;
      border-bottom: 0;
    }
    .first {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    .last {
      border-bottom: 1px solid #888;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .even {
      background-color: #999;
    }
  `,
})
export class RenduConditionnel {
  user = {
    address: {
      city: 'Liège',
    },
    role: 'dev',
  };

  users = ['Jean', 'Paul', 'Louis'];

  name = "Gaëtan";

  test(moninput: HTMLInputElement) {
    console.log(moninput.value);
  }
}

