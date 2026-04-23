import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <div (mouseover)="handleMouseover()" (click)="handleClick($event)" class="square"></div>
      <p>{{ event }}</p>
      <p>{{ message }}</p>
    </div>
  `,
  styles: `
    div {
      text-align: center;
    }
    .square {
      width: 200px;
      height: 200px;
      background-color: crimson;
      display: flex;
      justify-self: center;
    }
  `,
})
export class EventBinding {
  title = 'Event binding';
  event = '';
  message = '';

  handleClick(event: MouseEvent) {
    this.event = `Les coordonnées du clic : X-${event.clientX} Y-${event.clientY}`;
  }

  handleMouseover() {
    this.message = 'Carré survolé';
  }
}
