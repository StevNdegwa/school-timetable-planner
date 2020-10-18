This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Timetable App
To be used for school timetable planning.

## Public link
https://school-timetable-planner.firebaseapp.com/

## Resources (Adobe XD and UI design files, Application documentation)
https://drive.google.com/drive/folders/1E8Pvw-XMPtvWzzwYm-57eRkTl12R4fiE?usp=sharing

## CI/CD
* uses Gitlab CI/CD.

## Front end documentation
* Uses <a href="https://reactjs.org/">React</a> framework.
* Uses <a href="https://redux.js.org/">Redux</a> for state management.
* Uses <a href="http://smacss.com/">SMACSS (Scalable and Modular Architecture for CSS)</a>. for front end architecture.
* Uses <a href="https://styled-components.com/">styled components</a> to add css to the react components.

> File structure:
* The application code is in the <b>src/app</b> folder.
* The <b>src/app/App.js</b> file contains the Application Router.
* The <b>src/app/components</b> folder contains React components.
* The <b>src/app/containers</b> folder contains React components that have access to the redux state.
* The <b>src/app/features</b> folder contains redux configuration files.
* The <b>src/app/helpers</b> folde contains code to be be shared by application components.

** Every react component has been placed in its own folder. This is a way of documentation and to make it easier to solve future problems.

## Bundling
* Uses webpack module bundler. 

## Testing
* Uses <a href="https://jestjs.io/">Jest</a> and <a href="https://enzymejs.github.io/enzyme/">Enzyme</a> for unit testing. The testing is done automatically by GitLab.

## APIs used
* Google API - for connecting to the <a href="https://developers.google.com/calendar"><b>Google Galendar</a></b>. It uses OAuth 2.0 for authorization.

* Firebase API - for backend resources.


## Backend
Uses firebase for its its backend needs.
