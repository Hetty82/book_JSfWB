// Array with output objects 4

// Section data
var s1 = "2";
var s2 = "hallo";
var b = false;
var f = 1.1;
var o = {
  valueOf: function() {
    return -1;
  }
}
var b2 = true;

// Operations
s1++
s2++
b++
f--
o--

// Export
module.exports = [
  {
    comment: 's1++ value becomes numeric',
    text: s1
  },
  {
    comment: 's2++ value becomes',
    text: s2
  },
  {
    comment: 'b++ value becomes numeric',
    text: b
  },
  {
    comment: 'f-- value becomes ~0.1 (due to floating point inaccuracies)',
    text: f
  },
  {
    comment: 'o-- value becomes numeric',
    text: o
  },
  // {
  //   text: ''
  // },
  // {
  //   comment: '',
  //   text: ''
  // },
  // {
  //   comment: '',
  //   text: ''
  // },
];
