// Create a div for each object
// args: text, index (optional) and comment (optional)
module.exports = function (text, index, comment) {
  var div           = document.createElement('div');
  var index         = index || 0;
  var content       = 'Output ';
  content          += index + 1;
  content          += ' - ';
  if (comment) {
    content        += comment;
    content        += ': ';
  }
  content          += text;
  div.textContent   = content;
  div.setAttribute("class", "output-item js-output-item");
  return div;
};
