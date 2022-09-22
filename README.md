# Getting Started with Horse-Meter App

<img src="https://user-images.githubusercontent.com/54072018/191208814-e7fba8bf-746a-4017-b59e-af7e7699061e.png" width="500" /> <img src="https://user-images.githubusercontent.com/54072018/189565244-407b47c5-6eb5-456b-ae8c-d7b66118b1c0.png" width="500" /> 

This project supports docker implementation.
## Build the image and fire up the container:
### `docker-compose up -d --build`

## Bring down the container:
### `docker-compose stop`

Runs the app in the development mode.\
Open [http://localhost:8088](http://localhost:8088) to view it in the browser.


## Alternatively , use the below available Scripts to start the application.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

## SonarQube Analysis
 node ./sonarqube/sonarscan.js
 
 ## Note:
 .env file in github is not a good practice but i m pushing it for the dev environment setup ,In production we should avoid pushing the env file in code repository.

