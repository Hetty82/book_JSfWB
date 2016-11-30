var createOutputDiv = require('./createOutputDiv.js');

module.exports = function(list) {
  var length = list.length;
  var divs = [];

  for (i = 0; i < length; i+=1) {
    var index     = i;
    var object    = list[i];
    var text      = object.text;
    var comment   = object.comment;
    var div       = (createOutputDiv(text, index, comment));
    divs.push(div);
  };
  return divs;
};
