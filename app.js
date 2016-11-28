// Conventions
// ----------------------------------

/*
 * Variable prefixes
 * $ for DOM-element(s) -> string or single object
 * a for array, o for object, s for string, f for function, i for integer
 */


// Functions
// ---------

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
