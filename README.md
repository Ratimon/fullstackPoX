# FullstackPoX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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


ng new my-project --style=scss



## Custom webpack browser

Extended `@angular-devkit/build-angular:browser` builder that allows to specify additional webpack configuration (on top of the existing under the hood).
The builder will run the same build as `@angular-devkit/build-angular:browser` does with extra parameters that are specified in the provided webpack configuration.

Builder options:
 - All the `@angular-devkit/build-angular:browser` options
 - `customWebpackConfig`: [see below](#custom-webpack-config-object) 
 
`angular.json` Example:
```
"architect": {
    ...
    "build": {
              "builder": "@angular-builders/custom-webpack:browser"
              "options": {
                     "customWebpackConfig": {
                        "path": "./extra-webpack.config.js",
                        "mergeStrategies": { "externals": "prepend" }
                     }
                     "outputPath": "dist/my-cool-client",
                     "index": "src/index.html",
                     "main": "src/main.ts",
                     "polyfills": "src/polyfills.ts",
                     "tsConfig": "src/tsconfig.app.json"
              }
```
In this example `externals` entry from `extra-webpack.config.js` will be prepended to `externals` entry from Angular CLI underlying webpack config.