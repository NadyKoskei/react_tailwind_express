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
    (The / represents the root of your website.
    <img src="/public/logo.png" /> ❌
         Instead, you access it from the root:
    <img src="/logo.png" /> ✅
        Because Vite automatically treats everything inside public as if it lives at the root of your website.

## src/: 
Application source code. This is where you write React components, styles, and other JS/TS code.
   ### main.jsx:
    App entry file; it mounts the root React component into the DOM and sets up providers.
    It is the bridge btwn html and react via the (root div that is the single container where React mounts and controls your entire application.
          in line 6 👉 “Find the div with id 'root'.”
                    👉 “Take my entire React app and put it inside that div.”
   ### App.jsx: 
   It is the root component and the typical place to start building your UI.
   
   ### index.css / App.css: 
   Example CSS files for global and component styles. Vite supports importing these directly in JS/JSX.
   ### assets/:
    Folder for images and other module-imported assets referenced from the `src` code.

   ### components folder:
   ### pages folder:
   ### hooks 

## node_modules/:  
Contains installed packages; created when you run `npm install` or `yarn`.
allm code that the project depends on is stored here

## .gitignore / lockfiles: 
Commonly created/updated by the package manager to ignore `node_modules` and lock dependency versions.
it is a file used to specify which content should not be tracked by version controle.


NB... 

 components

 ```rendering
 How React takes JSX/element trees and turns them into DOM nodes.
In React 18+ you usually call `createRoot(rootEl).render(<App />)` or
`ReactDOM.render` in older versions. Rendering is what updates the
screen when state or props change.
turning component code into UI elements that appear on the screen.
```

``` props
Short for “properties”. They are the read‑only inputs you pass to a component, similar to function arguments. Props allow parent components to configure children and share data.
```

 ```hooks
 Special functions provided by React (like `useState`, `useEffect`,`useContext`, etc.) that let you “hook into” component lifecycle and state from functional components. 
```

```StrictMode 
is a special wrapper component from React that helps you find potential problems in your app during development.
```

```Modules
are separate JavaScript files that contain code (functions, variables, classes) and can export it so other files can import and use it. For organisation, reusability, collaboration.
```



