# yummy
A store-front example. Built with node.js, gulp.js, Jade & LESS

## Interact with product items
Written with css hover and with jquery, the product items have 4 states: default, default-hover, selected, selected-mouseleave.

## Structure
The source files are in src folder. The files served to client are in public folder. Automation tasks are in gulpfile.js. Gulpfile.js takes care of processing LESS into CSS, and minifying CSS and JS.

## Templating
Templates are done with Jade. There is a store-front template. And then we include the product templates into the store-front.

## LESS
Styles are written in LESS. You can easily change variables at the top of LESS file to change the colors.