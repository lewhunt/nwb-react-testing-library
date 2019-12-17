# nwb-react-testing-library
This is a sample [nwb](https://github.com/insin/nwb) [react-component project](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb) configured for testing with Jest and [react-testing-library](https://github.com/testing-library/react-testing-library) 

You can use this repo as a starting point when building react components testable with Jest and react-testing-library (rather than nwb's default testing setup of Karma/Mocha and PhantomJS).  

## Changes made to enable Jest and react-testing-library
The following config changes have already been made in this repo. They are listed here for reference:

1. install nwb, create a nwb react-component project and install additional dependencies
```
    npm install -g nwb
    nwb new react-component nwb-react-testing-library
    npm install --save-dev @testing-library/react @testing-library/jest-dom
    npm install --save-dev jest babel-jest babel-polyfill @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
 ```

2. create and update three new config files: jest.config.js, jest.transform.js and react-testing-library.setup.js

3. update test scripts in package.json
```
    "test": "jest",
    "test:watch": "jest --watch --no-cache"
 ```

4. rename and update the sample test file index.test.js

## Developing with this repo
`package.json` is configured with `"scripts"` we can use with `npm run` while developing the project.

Command | Description |
--- | ---
`npm install` | First run this once after downloading or cloning this repo (to download node_modules dependencies) 
`npm start` | start a development server for the demo app
`npm test` | run (react-testing-library) tests
`npm run test:watch` | start a test server and re-run tests on every change
`npm run build` | prepare for publishing to npm
`npm run clean` | delete built resources

The initial project is set up so you can successfully run each of these commands and get some meaningful output, albeit for a component which does nothing more than render a welcome message. Change the component and tests acordingly. Then follow the nwb documentation to publish the component on npm.
