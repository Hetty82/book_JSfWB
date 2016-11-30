// Array with output objects 3

// Section data
var o = new Object();
var o2 = new Object();

// Export
module.exports = [
  {
    comment: 'o.constructor',
    text: o.constructor
  },
  {
    comment: 'o.hasOwnProperty("name")',
    text: o.hasOwnProperty("name")
  },
  {
    comment: 'o.isPrototypeOf(o2)',
    text: o.isPrototypeOf(o2)
  },
  {
    comment: "o.propertyIsEnumerable('hasOwnProperty')",
    text: o.propertyIsEnumerable('hasOwnProperty')
  },
  {
    comment: 'o.toLocaleString()',
    text: o.toLocaleString()
  },
  {
    comment: 'o.toString()',
    text: o.toString()
  },
  {
    comment: 'o.valueOf()',
    text: o.valueOf()
  },
  // {
  //   comment: '',
  //   text: ''
  // },
];
