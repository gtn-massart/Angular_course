import { Component } from '@angular/core';
import { SingleFileComponent } from "./single-file-component";
import { InterpolationString } from "./interpolation-string";
import { PropertyBinding } from "./property-binding";
import { EventBinding } from "./event-binding";
import { DoubleDataBinding } from "./double-data-binding";
import { RenduConditionnel } from "./rendu-conditionnel";
import { SyntaxeEtUtilisationDeSignal } from "./syntaxe-et-utilisation-de-signal";




@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [SingleFileComponent, InterpolationString, PropertyBinding, EventBinding, DoubleDataBinding, RenduConditionnel, SyntaxeEtUtilisationDeSignal]
})
export class App {
  title = 'AngularCourse';
}
