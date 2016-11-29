// var section01       = require('./section01.js');
// var section02       = require('./section02.js');

// Append a div for each object
var appendDivs    = function (current_value, index) {
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
var objects = []

// Parent Section Element
var $parentEl = document.querySelector('.js-output-section-01');

// Section data
var stringWithSigma = "This is the letter sigma: \u03a3";

// Example output objects
objects = [
  {
    comment: 'A string with a unicode character in hex ( \\u03a3 )',
    text: '"' + stringWithSigma + '"'
  },
  {
    // comment: '',
    text: "The length of that string is " + stringWithSigma.length + " characters."
  },
  {
    // comment: '',
    text: "The ParseFloat result of ' 01234blue' is: " + parseFloat(' 01234blue')
  }
]

// Create and append divs
objects.forEach(appendDivs);


// Section 2 String conversion
// ---------------------------

// Start with empty list for objects
var objects = []

// Parent Section Element
var $parentEl = document.querySelector('.js-output-section-02');

// Section data
var dog = {
  species: 'Dog',
  breed: 'Boxer',
  name: 'Jack'
}

var num = 24;
var $num = document.querySelector('#num');
$num.textContent = num;

// Example output objects
objects = [
  {
    comment: 'Default (decimal), num.toString()',
    text: num.toString()
  },
  {
    comment: 'Binary, num.toString(2)',
    text: num.toString(2)
  },
  {
    comment: 'Octal, num.toString(8)',
    text: num.toString(8)
  },
  {
    comment: 'Decimal, num.toString(10)',
    text: num.toString(10)
  },
  {
    comment: 'Hexadecimal, num.toString(16)',
    text: num.toString(16)
  },
  {
    comment: 'dog.toString()',
    text: dog.toString()
  },
  {
    comment: 'JSON.stringify(dog)',
    text: JSON.stringify(dog)
  },
]

// Create and append divs
objects.forEach(appendDivs);
