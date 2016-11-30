// Array with output objects 2

// Section data
var dog = {
  species: 'Dog',
  breed: 'Boxer',
  name: 'Jack'
};

// @todo fix a better solution
var num = 24;

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
];
