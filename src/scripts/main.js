// var createOutputDiv        = require('./createOutputDiv.js');
var createDivArray         = require('./createDivArray.js');
var appendElements         = require('./appendElements.js');
var objects1               = require('./objects1.js');
var objects2               = require('./objects2.js');
var objects3               = require('./objects3.js');

var parentEl;
var divs;


// Section 1 Fiddling with Data types
// ----------------------------------

parentEl = document.querySelector('.js-output-section-01');
divs = createDivArray(objects1);
appendElements(divs, parentEl);


// Section 2 String conversion
// ---------------------------

// Section data
// @todo fix a better solution
var num = 24;
var $num = document.querySelector('#num');
$num.textContent = num;

parentEl = document.querySelector('.js-output-section-02');
divs = createDivArray(objects2);
appendElements(divs, parentEl);

// Section 3 Objects
// -----------------
parentEl = document.querySelector('.js-output-section-03');
divs = createDivArray(objects3);
appendElements(divs, parentEl);

