// var section01       = require('./section01.js');
// var section02       = require('./section02.js');

// Conventions
// ----------------------------------

/*
 * Variable prefixes
 * $ for DOM-element(s) -> string or single object
 * a for array, o for object, s for string, f for function, i for integer
 */

// Append a div for each object
var fAppendDivs    = function (current_value, index) {
  var $el          = document.createElement('div');
  var sContent     = 'Output ';
  sContent        += index + 1;
  sContent        += ' - ';
  if (current_value.comment) {
    sContent      += current_value.comment;
    sContent      += ': ';
  }
  sContent        += current_value.text;
  $el.textContent  = sContent;
  $el.setAttribute("class", "output-item js-output-item");
  $parentEl.appendChild($el);
}

// Section 1 Fiddling with data-types
// ----------------------------------

// Start with empty array for objects
var aObjects = []

// Parent Section Element
var $parentEl = document.querySelector('.js-output-section-01');

// Section data
var sStringWithSigma = "This is the letter sigma: \u03a3";

// Example output objects
aObjects = [
  {
    comment: 'A string with a unicode character in hex ( \\u03a3 )',
    text: '"' + sStringWithSigma + '"'
  },
  {
    // comment: '',
    text: "The length of that string is " + sStringWithSigma.length + " characters."
  },
  {
    // comment: '',
    text: "The ParseFloat result of ' 01234blue' is: " + parseFloat(' 01234blue')
  }
]

// Create and append divs
aObjects.forEach(fAppendDivs);


// Section 2 String conversion
// ---------------------------

// Start with empty list for objects
var aObjects = []

// Parent Section Element
var $parentEl = document.querySelector('.js-output-section-02');

// Section data
var oDog = {
  species: 'Dog',
  breed: 'Boxer',
  name: 'Jack'
}

var iNum = 24;
var $iNum = document.querySelector('#iNum');
$iNum.textContent = iNum;

// Example output objects
aObjects = [
  {
    comment: 'Default (decimal), iNum.toString()',
    text: iNum.toString()
  },
  {
    comment: 'Binary, iNum.toString(2)',
    text: iNum.toString(2)
  },
  {
    comment: 'Octal, iNum.toString(8)',
    text: iNum.toString(8)
  },
  {
    comment: 'Decimal, iNum.toString(10)',
    text: iNum.toString(10)
  },
  {
    comment: 'Hexadecimal, iNum.toString(16)',
    text: iNum.toString(16)
  },
  {
    comment: 'oDog.toString()',
    text: oDog.toString()
  },
  {
    comment: 'JSON.stringify(oDog)',
    text: JSON.stringify(oDog)
  },
]

// Create and append divs
aObjects.forEach(fAppendDivs);
