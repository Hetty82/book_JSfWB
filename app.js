console.log('test');

var $output1 = document.querySelector('[data-output="1"]');
var $output2 = document.querySelector('[data-output="2"]');
var $output3 = document.querySelector ('[data-output="3"]');

console.log($output1);

var content1 = "This is the letter sigma: \u03a3";
var content2 = "The length of that string is " + content1.length + " characters.";
var content3 = "The ParseFloat result of 1234blue is: " + parseFloat('1234blue');


$output1.textContent = content1;
$output2.textContent = content2;
$output3.textContent = content3;
