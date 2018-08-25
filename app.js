'use strict';

let testArray = [];
let rowsArray = [];


function TestObject(name, picture) {
  this.name = name;
  this.picture = picture;
  this.score = 2000;
  this.rank = 0;

  testArray.push(this);
}


let selected1 = document.getElementById('selection1button');
let selected2 = document.getElementById('selection2button');

let selection1;
let selection2;


function randomSelection(array) {
  return array[Math.floor(Math.random() * array.length)];
}


function reRollSelections() {
  selection1 = randomSelection(testArray);
  selection2 = randomSelection(testArray);
}


function rollSelections() {
  reRollSelections();
  while (selection1 === selection2) {
    reRollSelections();
  }
}


function newChoice() {
  rollSelections();
  selected1.setAttribute('value', selection1.score);
  selected2.setAttribute('value', selection2.score);
  selected1.innerText = selection1.name;
  selected2.innerText = selection2.name;
  makeTable();
}


selected1.addEventListener('click', function (event) {
  selection1.score++;
  // console.log(event.target.getAttribute('value'));
  newChoice();
});

selected2.addEventListener('click', function (event) {
  // console.log(event.target.getAttribute('value'));
  newChoice();
});


function nukeData() {
  for (let i = 0; i < rowsArray.length; i++ ) {
    document.getElementById('table').removeChild(rowsArray[i]);
  }
  rowsArray = [];
}


function makeTableHeader() {
  if (document.getElementById('headerRow') === null) {
    let headerRow = document.createElement('tr');
    headerRow.setAttribute('id', 'headerRow');

    let headerRank = document.createElement('th');
    let headerName = document.createElement('th');
    let headerScore = document.createElement('th');

    headerRank.textContent = 'Rank';
    headerRow.appendChild(headerRank);

    headerName.textContent = 'Name';
    headerRow.appendChild(headerName);

    headerScore.textContent = 'Score';
    headerRow.appendChild(headerScore);

    document.getElementById('table').appendChild(headerRow);
  }
}


function makeTableData() {
  for (let i = 0; i < testArray.length; i++) {
    let dataRow = document.createElement('tr');
    dataRow.setAttribute('id', 'dataRow' + i);

    let rank = document.createElement('td');
    let name = document.createElement('td');
    let score = document.createElement('td');

    rank.textContent = testArray[i].rank;
    dataRow.appendChild(rank);

    name.textContent = testArray[i].name;
    dataRow.appendChild(name);

    score.textContent = testArray[i].score;
    dataRow.appendChild(score);

    rowsArray.push(dataRow);
    sortRows();
    document.getElementById('table').appendChild(dataRow);
  }
}


function sortRows() {
  
}


function makeTable() {
  nukeData();
  makeTableHeader();
  makeTableData();
}


new TestObject('test1', 'https://via.placeholder.com/350x150');
new TestObject('test2', 'https://via.placeholder.com/350x150');
new TestObject('test3', 'https://via.placeholder.com/350x150');
new TestObject('test4', 'https://via.placeholder.com/350x150');
new TestObject('test5', 'https://via.placeholder.com/350x150');


newChoice();