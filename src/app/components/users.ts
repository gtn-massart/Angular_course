import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  template: `
    <h3>Users</h3>
    <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
    </ul>
  `,
  styles: `
    ul {
      list-style-type: none;
      padding-left: 0px;
    }
  `,
})
export class Users {}
