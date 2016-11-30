// Append each div to parent element
module.exports = function (array, parentEl) {
  length = array.length
  for (i = 0; i < length; i+=1) {
    el = array.shift();
    parentEl.appendChild(el);
  }
};
