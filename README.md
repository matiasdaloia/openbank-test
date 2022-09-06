
## Run Locally

1. Install Node.js: use version v10.16.3
2. (opt.) Install v10.16.3 with nvm:

```
 nvm install v10.16.3
 nvm use v10.16.3
```
3. Run `npm install`
4. Run `npm run start`

## Development dependencies

- @craco/craco & craco-alias --> to handle aliases

## Frontend dependencies

- @material-ui --> for handling styles
- formik and yup --> for handling forms and validations respectively
- i18next --> for handling translations

## Folder structure

- Folder structure is divided into 6 main categories: 

    - *components* --> For all ui related Components
    - *config* --> for configurations mainly related to theme and localization
    - *helpers* --> useful functions for handling form validation, etc
    - *locales* --> all things related to translation files
    - *services* --> for "api" interactions
    - *styles* --> base scss

## Unit tests

For unit tests, each component has it's own test file following this convention: 

    `Component.js`
    `Component.test.js`

In order to be more organized, we will keep test files in the same folder as the component it tests.
