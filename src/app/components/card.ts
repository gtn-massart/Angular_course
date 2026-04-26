import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div class="card">
      <div class="title"><ng-content select=".title">Titre par défaut</ng-content></div>
      <div class="content"><ng-content select=".content" /></div>
    </div>
  `,
  styles: `
    .card {
      border: 1px solid #999;
      border-radius: 4px;
      padding: 16px;
    }
    .title {
      color: #333;
      font-weight: 500;
    }
    .content {
      color: #555;
    }
  `,
})
export class Card {}
