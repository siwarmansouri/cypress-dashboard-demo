This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Cypress Cross Browser testing
Cypress has the capability to run tests across multiple browsers.
Excluding Electron, any browser you want to run Cypress tests in needs to be installed on your local system or CI environment. 
### `npm test:cypress-run-chrome`
### `npm test:cypress-run-electron`
### `npm test:cypress-run-firefox`

## Parallel testing
* Split the above commands in multiple command files to run spec files against different browsers in parallel threads: 

    #### Add cypressThreadX.command file for each browser:

    `Edit this and put your project path`
    `cd /path/to/cypress-dashboard-demo`
    `npm run test:cypress-run-chrome`

* Run the parallel streams
    ### Add the following command in package.json
    `"test:cypress-run-parallel": "open cypressThread1.command cypressThread2.command"`

    This will launch two separate terminals, both running the specs mentioned in each file and the results will be merged in a single test run in the cypress dashboard.


## Cypress Dashboard
https://dashboard.cypress.io/projects/vu8avj/runs

## Cypress Dashboard Analytics
https://dashboard.cypress.io/projects/vu8avj/analytics/runs-over-time