'use strict';

let selected1 = document.getElementById('selection1');
let selected2 = document.getElementById('selection2');

let selection1 = 1;
let selection2 = 2;

selected1.addEventListener('click', selected(selection1));
selected2.addEventListener('click', selected(selection2));

function selected(selection) {
  return selection;
};