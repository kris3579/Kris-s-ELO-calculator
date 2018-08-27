'use strict';

let testArray = [];
let rowsArray = [];
let noRepeat = [];


function TestObject(name) {
  this.name = name;
  // this.picture = picture;
  this.score = 2000;
  this.rank = 1;

  testArray.push(this);
}


let selected1 = document.getElementById('selection1button');
let selected2 = document.getElementById('selection2button');

let selection1;
let selection2;


function randomSelection(array) {
  checkNoRepeat();
  var random = array[Math.floor(Math.random() * array.length)];
  while (noRepeat.includes(random.name)) {
    random = array[Math.floor(Math.random() * array.length)];
  }
  return random;
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
  noRepeat.push(selection1);
  noRepeat.push(selection2);
}


function newChoice() {
  rollSelections();
  selected1.setAttribute('value', selection1.score);
  selected2.setAttribute('value', selection2.score);
  selected1.innerText = selection1.name;
  selected2.innerText = selection2.name;
  makeTable();
}


selected1.addEventListener('click', function () {
  calcScore(selection1, selection2);
  newChoice();
});

selected2.addEventListener('click', function () {
  calcScore(selection2, selection1);
  newChoice();
});


function nukeData() {
  for (let i = 0; i < rowsArray.length; i++) {
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

    let rank = document.createElement('td');
    let name = document.createElement('td');
    let score = document.createElement('td');

    rank.textContent = testArray[i].rank;
    dataRow.appendChild(rank);

    name.textContent = testArray[i].name;
    console.log(testArray[i].name);
    dataRow.appendChild(name);

    score.textContent = testArray[i].score;
    dataRow.appendChild(score);

    rowsArray.push(dataRow);
    sortRanks(testArray);
    document.getElementById('table').appendChild(dataRow);
  }
}


function sortRanks(array) {
  array.sort(function (a, b) {
    return b.score - a.score;
  });

  let rank = 1;
  for (var i = 0; i < array.length; i++) {
    if (i > 0 && array[i].score < array[i - 1].score) {
      rank++;
    }
    array[i].rank = rank;
  }
}


function probArray(score1, score2) {
  let probArray = [];
  if (score1 > score2) {
    probArray.push(score1, score2);
    return probArray;
  } else {
    probArray.push(score2, score1);
    return probArray;
  }
}


function calcScore(winner, loser) {
  let k = 32;
  let probabilityArray = probArray(winner.score, loser.score);
  let higherProb = (1.0 / (1.0 + Math.pow(10, ((probabilityArray[0] - probabilityArray[1]) / 400))));
  let lowerProb = (1.0 / (1.0 + Math.pow(10, ((probabilityArray[1] - probabilityArray[0]) / 400))));
  if (winner.score > loser.score) {
    winner.score = Math.floor(winner.score + k * (1 - higherProb));
    loser.score = Math.floor(loser.score + k * (0 - lowerProb));
  } else if (winner.score === loser.score) {
    winner.score = Math.floor(winner.score + k * (1 - 0.5));
    loser.score = Math.floor(loser.score + k * (0 - 0.5));
  } else if (winner.score < loser.score) {
    winner.score = Math.floor(winner.score + k * (1 - lowerProb));
    loser.score = Math.floor(loser.score + k * (0 - higherProb));
  }
}


function checkNoRepeat() {
  if (noRepeat.length === (Math.floor(testArray.length / 2))) {
    noRepeat.shift();
    noRepeat.shift();
  }
}


function makeTable() {
  nukeData();
  makeTableHeader();
  makeTableData();
  // console.log(testArray);
}


new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest1');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest2');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest3');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest4');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest5');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest6');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest7');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest8');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest9');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest10');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest11');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest12');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest13');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest14');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest15');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest16');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest17');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest18');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest19');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest20');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest21');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest22');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest23');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest24');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest25');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest26');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest27');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest28');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest29');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest30');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest31');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest32');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest33');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest34');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest35');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest36');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest37');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest38');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest39');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest40');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest41');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest42');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest43');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest44');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest45');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest46');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest47');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest48');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest49');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest50');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest51');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest52');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest53');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest54');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest55');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest56');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest57');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest58');
new TestObject('aaaaaaaaaaaaaaaaaaaasddddsdtest59');


newChoice();