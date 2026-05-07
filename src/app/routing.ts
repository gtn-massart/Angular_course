import { Component } from '@angular/core';
import { Homepage } from './components/homepage'
import { Users } from './components/users'
 
@Component({
  selector: 'app-routing',
  imports: [Homepage, Users],
  template: `
    <div>
      <h1>Routing</h1>
      <nav>
        <li>Homepage</li>
        <li>Users</li>
      </nav>
      <app-homepage />
      <app-users />
    </div>
  `,
  styles: `
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    nav {
      display: flex;
    }
    li {
      list-style-type: none;
      padding: 2px;
      margin-inline: 5px;
      cursor: pointer;
      border: 1px solid black;
    }
  `,
})
export class Routing {}
