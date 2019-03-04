# Learn Redux

A simple React + Redux implementation. This will be turned into a free video series once the app is totally fleshed out.

# What I learned in working through this tutorial:
* State exists in a object called Store, and no longer has to be passed from component to component like props
* To change anything in the state you need to dispatch an action.  Actions are another javascript object that describe what is going to happen when you change state.
* To tie state and the actions together, you call reducers, which are just javascript functions.   These reducer functions take in state and the action as arguments, and update state based on those arguments.
*  Reducers are passed into a main or "Root" reducer that runs the individual reducers as needed.  

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.
