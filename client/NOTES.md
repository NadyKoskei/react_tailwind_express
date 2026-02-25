This file gives brief explanations for the files and folders Vite generates when scaffolding a React project.

## index.html: 
The main HTML page Vite serves. It includes the root element for your React app and Vite-specific dev server hooks.

## package.json: 
Lists project metadata, scripts (like `dev`, `build`, `preview`), and dependencies/devDependencies.
    -1. "name": "my-project"
            The name of your project.
    -2. "private": true
            This project cannot be accidentally published to npm.
    -3. "version": "0.0.0"
            Version number of your project.
            Format is usually: major.minor.patch
    -4. "type": "module"
            This tells Node:
               We are using ES Modules (import/export syntax)
               That’s why in Vite you can use:
                      import App from './App.jsx'
                Instead of old:
                      const App = require('./App')
    -5. "script" : this stores the common commands that can be run
            Command	What It Does
               npm run dev	Starts development server
               npm run build	Creates production build
               npm run preview	Preview production build
    -6. "dependencies" : These are packages your app NEEDS to run.
                         npm reads this section and installs them.
    -7. "devDependencies" : These are tools needed only during development.
                            They are not needed when the app is deployed.

## package-lock.json: 
Locks the exact versions for every installed package including sub dependencies
       it locks:
          Exact package versions
          Exact dependency tree
          Even nested dependencies
So everyone gets the SAME setup and guarantees consistency

## vite.config.js: 
Vite's configuration file. Used to customize build and dev-server behavior and add plugins.
     Vite is the tool that:
         Runs your dev server
         Handles hot reload
         Bundles your app for production
         Optimizes your build
            So this file tells Vite: “Hey, here’s how I want my project to behave.”

## README.vite.md: 
A short README created by the Vite scaffold with quick-start info and commands.

## eslint.config.js: 
Optional ESLint configuration generated to match the chosen template.
(ESLint is a tool that checks and analyses the javascript and react code written to flag mistakes and bad practices.

## public/: 
used to store static files 
(files that don't get processed by vite, don't go though building and are servrd exactly as they are.
Files in public are accessed from the root path.
      

## src/: 
Application source code. This is where you write React components, styles, and other JS/TS code.
   ### main.jsx:
    App entry file; it mounts the root React component into the DOM and sets up providers.
   ### App.jsx: 
   Example root React component and the typical place to start building your UI.
   ### index.css / App.css: 
   Example CSS files for global and component styles. Vite supports importing these directly in JS/JSX.
   ### assets/:
    Folder for images and other module-imported assets referenced from the `src` code.

## node_modules/:  
Contains installed packages; created when you run `npm install` or `yarn`.
allm code that the project depends on is stored here

## .gitignore / lockfiles: 
Commonly created/updated by the package manager to ignore `node_modules` and lock dependency versions.
it is a file used to specify which content should not be tracked by version controle.



