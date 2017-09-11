## Comments for [*put the tile of your project here*]

### c001
The source for this reset has long since been lost but in its own comments, it cites inspiration from those listed below. We have since made own modifications to it but it is largely intact as it was when we first started implementing it.
+ [Eric Meyer](http://meyerweb.com)
+ [HTML5 Doctor](http://html5doctor.com)
+ [HTML5 Boilerplate](http://html5boilerplate.com)

### c002
Keep in mind that the ` <table> ` element still needs *cellspacing="0"* in the markup.

### c003
For those among us who like trivia:
+ ` white-space: pre; ` for CSS2
+ ` white-space: pre-wrap; ` for CSS 2.1
+ ` white-space: pre-line; ` for CSS 3 (works also in 2.1)
+ ` word-wrap: break-word; ` for our beloved Internet Explorer

### c004
Using ` sup ` and ` sub ` can result in [unexpected behavior](https://gist.github.com/unruthless/413930) when also using ` line-height `.

### c005
This standardizes monospaced elements.

### c006
Webkit browsers add a 2px margin outside the chrome of form elements.

### c007
Make buttons play nice in *Internet Explorer*.

### c008
This scales images in IE7 in a more pleasant manner.

### c009
This is [non-standard](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color) behavior as of August 2017.

### c010
Our heartfelt thanks go out to Nicholas Gallagher for the [Clearfix Hack](http://nicolasgallagher.com/micro-clearfix-hack/).

### c011
Mozilla does not style placeholders by default.

### c012
Here we remove any [text shadows](http://twitter.com/miketaylr/status/12228805301) and give a background color to selections in the browser.

### c013
The default font family is Arial but you should customize this as needed.
+ $font1 – body
+ $font2 – headings
+ $font3 – accents

### c014
Responsive breakpoints are provided but will likely be unnecessary if you use Bootstrap.

### c015
This is simply to mark a *Twitter Bootstrap* breakpoint.

### c016
The file *zasu.scss* is the digital equivalent of scratch paper. We use this file to test styles that may or may not be ultimately implemented. It should be empty when you deploy.

### c017
You should modify the initial seven ` font-size ` variables that are provided, as needed.

### c018
Because font weights can vary depending on the font, no default weights are provided. For the majority of fonts, however, *400* is regular and *700* is bold.

### c019
Read Matt West's excellent introductory article on [sectioning elements](http://blog.teamtreehouse.com/use-html5-sectioning-elements) for more information.

### c020
The different SASS stylesheets here are based on the [SMACCS styleguide](https://smacss.com/) developed by Jonathan Snook.

### c021
The reset for ` <img> ` gives priority to images whose width is greater than their height. All ` <img> ` elements should be contained within a parent element to better control their ratio and size.

### v022
The JS file ` main ` (comment unfinished).

### c023
Although this may seem obvious, transpiling multiple JS files into one file is advantageous when you have multiple JS files spread throughout your project. This is arguably overkill when using *jQuery* because if you have multiple *jQuery* files, you should probably be using something like *Angular* or *React*. When you find the need to move on to a more robust JS framework or library, the transpiling task defined in ` gulpfile.js ` has got you covered.

### c024
Adding *jQuery* as a dependency allows you to work offline but the this should be removed upon deployment and replaced with a call to a CDN.

### c025
In his [answer](https://stackoverflow.com/questions/24591854/using-gulp-to-concatenate-and-uglify-files) on StackOverflow, *mpen* explains that "the newline is needed in case the file ends with a line comment, the semi-colon is needed if the last statement wasn't terminated." There are several options available with regards to *sourcemaps* and *uglify* that are not implemented – see *mpen*'s for more details.

### c026
Using ` wait ` is the equivalent of ` setTimeout ` – it's not best practice but gets the job done. Here we delay the browser from refreshing by 1000 milliseconds to give time for the JS files to transpile. As your JS code grows in number of files, lines, and in complexity, you may need to adjust this time accordingly.

### c027
This style definition applies to *Sizer* only and must be commented out before deploying.

### c028
*Sizer* is a lightweight utility used in development only to show the viewport dimensions in the lower right. This line must be commented out before deploying.
