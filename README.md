# Demohood
Step2b -- LoginPageComponent
The current code for the login page / emaillogin page can be found in email/email-login.component.ts

It will show what is needed to get the correct information from the form. This excludes HTML currently
---
The code present is for the newest updated version of demohood. This branch displays the code needed for created the shared module, shell component and the connecting everything together.

The terminal commands to get started are:
`ng g m shared`
`ng g c shared/shell`
`ng g m user`
`ng g c user/emailLogin`
`ng g c user/loginPage`
`ng g d user/googleSignIn --flat`
`ng g m user/userRouting --flat`
`ng g s services/auth`
`ng g s services/snack --flat`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

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
