// Array with output objects 1

// Section data
var stringWithSigma = "This is the letter sigma: \u03a3";

// Export
module.exports = [
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
  },
  // {
  //   comment: '',
  //   text: ''
  // },
];
