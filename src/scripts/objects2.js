// Array with output objects 2

// Section data
var dog = {
  species: 'Dog',
  breed: 'Boxer',
  name: 'Jack'
};

// @todo fix a better solution for num
var num = 24;

var value1 = 10;
var value2 = true;
var value3 = null;
var value4 = undefined;
var value3toString;
var value4toString;

try {
  value3.toString();
}
catch (error) {
   value3toString = error.name;
};

try {
  value4.toString();
}
catch (error) {
   value4toString = error.name;
};

// Export
module.exports = [
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
    {
    comment: '10.toString() and String(10)',
    text: value1.toString() + ' and ' + String(value1)
  },
  {
    comment: 'true.toString() and String(true)',
    text: value2.toString() + ' and ' + String(value2)
  },
  {
    comment: 'null.toString() and String(null)',
    text: value3toString + ' and ' + String(value3)
  },
  {
    comment: 'undefined.toString() and String(undefined)',
    text: value4toString + ' and ' + String(value4)
  },
  // {
  //   comment: '',
  //   text: ''
  // },
];
