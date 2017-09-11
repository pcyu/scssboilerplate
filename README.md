# Base A
*Base A* gets your next project up and running quickly with common starter files and configurations.

## App Development
* Clone this repository to your local environment.
* Run ` npm install ` to download the dependencies.
* Run ` gulp watch ` in the terminal to start a local server at port 3001.

## Features
* Babel
* Conslice
* Express
* Gulp
* HTML
* jQuery
* SASS

## Gulp Tasks
Gulp speeds up development with the following tasks.
* Transpile multiple SASS files to one minified CSS file.
* Transpile multiple JS files to one minified JS file (see c023 in *conslice/comments.md*).
* In conjunction with Chrome's [livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en), hot reloading when a change in project files is made. You must be using the Chrome browser and enable this extension for hot reloading work correctly.

## JavaScript
*Base A* uses an object-based format within an  [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) to better control the scoping issues that are the bane of every developer's existence. This type of setup is ideal when using *jQuery* and writing less than 200 lines of JavaScript code.

## jQuery
*jQuery* is implemented as a dependency instead of being loaded through a CDN which allows you to work offline. One disadvantage of using it, though, is the tendency for novice developers to spiral into writing [spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code). When this happens, it is time to abandon *jQuery* (see c023 in *conslice/comments.md*).
