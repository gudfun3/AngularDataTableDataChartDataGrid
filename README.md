# Proto1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

This is POC on Angular / D3 / AgGrid/ NgxCharts 
More D3 Demos using Angular will be updated here

* First Obstacle Faced:(solved)
Component level Css dont reflect on component level elements on page while using D3
* solved : Solved by using Css Shadow piercing combinator
Style scope
The styles specified in @Component metadata apply only within the template of that component.

Special selectors
Component styles have a few special selectors from the world of shadow DOM style scoping
The :host selector is the only way to target the host element. You can't reach the host
 element from inside the component with other selectors because it's not part of the
  component's own template. The host element is in a parent component's template.
    :host {
  display: block;
  border: 1px solid black;
}

  then some of the combinators that are about to be deprecated
  (deprecated) /deep/, >>>, and ::ng-deep

Only encapsulation: ViewEncapsulation.Native  won't work so you must use the :host /deep/  or  ::ng-deep combinators
* shadow piercing is done here using the only angular supported ::ng-deep combinator
*  or we can use like this 
:host /deep/ svg text {
    fill: yellow;
    font: 12px sans-serif;
    text-anchor: end;
 Never give the body or header like tags that are common to other componenents
 as D3 directly manipulates the DOM which will be affect to other 
 components also .. Angular is a Single page Application and D3 directly 
 manipultes dom so they may interfere each other so always select an element
 of specfic class or id type 

  View encapsulation is necessary(not really if you are using css shadow piercing ) here because the style we give to our d3 created elements
*  will directly affect the DOM so to give scoped style or style specific to our component we
* can take the help of encapsulation property in our @Component Decorator which won't leak style to other
* component and will keep the style to itself

## Biggest Change while retriving json data using D3 V5(version 5)
The only change is the json request, that adds a then function instead of returning the data directly.
d3.json("this.data",function(error, data) {});
    has been changed to 
d3.json("https://api.myjson.com/bins/utaki").then(function(data) {});
      

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
