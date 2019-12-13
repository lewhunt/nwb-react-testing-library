# nwb-react-testing-library
This is a sample nwb react-component project configured for Jest and react-testing-library. 

You can use this repo as a starting point when building react components testable with Jest and react-testing-library (rather than nwb's default testing setup of Karma/Mocha and PhantomJS).  

## Changes made to nwb in this repo
The following steps have already been done in this repo. They are listed here for reference:

1. install nwb, create a nwb react-component project and install additional dependencies
    npm install -g nwb
    nwb new react-component nwb-react-testing-library
    npm install --save-dev @testing-library/react @testing-library/jest-dom
    npm install --save-dev jest babel-jest babel-polyfill @babel/preset-env @babel/preset-react

2. create and update three new config files: jest.config.js, jest.transform.js and react-testing-library.setup.js

3. update test scripts in package.json
    "test": "jest",
    "test:watch": "jest --watch --no-cache",
    "test:coverage": "jest --coverage",
    "open:coverage": "open ./coverage/lcov-report/index.html"

4. rename and update the sample test file index.test.js

5. npm run test

