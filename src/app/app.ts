import { Component } from '@angular/core';
import { SingleFileComponent } from "./single-file-component";
import { InterpolationString } from "./interpolation-string";
import { PropertyBinding } from "./property-binding";
import { EventBinding } from "./event-binding";
import { DoubleDataBinding } from "./double-data-binding";
import { RenduConditionnel } from "./rendu-conditionnel";
import { SyntaxeEtUtilisationDeSignal } from "./syntaxe-et-utilisation-de-signal";
import { SignalComputed } from "./signal-computed";
import { SignalEffect } from "./signal-effect";
import { DymaComponent } from "./signal-linked-signal";
import { ViewChildViewChildren } from "./view-child-view-children";
import { NgContent } from "./ng-content";
import { TokenClassInjection } from "./token-class-injection";





@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [SingleFileComponent, InterpolationString, PropertyBinding, EventBinding, DoubleDataBinding, RenduConditionnel, SyntaxeEtUtilisationDeSignal, SignalComputed, SignalEffect, DymaComponent, ViewChildViewChildren, NgContent, TokenClassInjection]
})
export class App {
  title = 'AngularCourse';
}
