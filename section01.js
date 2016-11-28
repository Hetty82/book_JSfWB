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
