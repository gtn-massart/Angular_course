import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulary',
  // ↓ ReacitveFormsModule doit être importer pour activer les fonctionnalités des formulaires réactifs.
  //   Sans ce module, les directives comme [formGroup] ou formaControlName ne fonctionneront pas.
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <h1>Les formulaires</h1>
    <div class="contain">
      <div class="w-half">
        <form [formGroup]="userForm" (submit)="submit()" class="flex flex-col mb-10">
          <div class="flex flex-col mb-10">
            <label for="lastname">Nom</label>
            <input formControlName="lastname" type="text" id="lastname" />
          </div>
          <div class="flex flex-col mb-10">
            <label for="firstname">Prénom</label>
            <input formControlName="firstname" type="text" id="firstname" />
          </div>
          <div class="flex flex-col mb-10">
            <label for="email">Email</label>
            <input formControlName="email" type="text" id="email" />
          </div>
          <div class="flex flex-col mb-20">
            <label for="password">Mot de passe</label>
            <input formControlName="password" type="password" id="password" />
          </div>
          <button class="btn btn-primary">Sauvegarder</button>
        </form>
      </div>
      <pre class="w-half">
        {{ userForm.value | json }}
      </pre
      >
    </div>
  `,
  styles: `
    .contain {
      display: flex;
      width: 100%;
      max-width: 900px;
      margin: auto;
      padding: 24px;
      gap: 24px;
    }
    h1 {
      text-align: center;
    }
  `,
})
export class Formulary {
  userForm = new FormGroup({
    lastname: new FormControl('', { nonNullable: true }),
    firstname: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  submit() {
    console.log(this.userForm.value);
  }
}
