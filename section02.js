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
