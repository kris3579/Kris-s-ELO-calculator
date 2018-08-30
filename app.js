'use strict';

let testArray = [];
let rowsArray = [];
// let noRepeat = [];


function TestObject(name) {
  this.name = name;
  // this.picture = picture;
  this.score = 2000;
  this.rank = 1;
  this.votes = 0;

  testArray.push(this);
}


let selected1 = document.getElementById('selection1button');
let selected2 = document.getElementById('selection2button');

let selection1;
let selection2;

function checkVotes() {
  let thisRoundOfVotes = 0;
  for (let i = 0; i < testArray.length; i++) {
    if (testArray[i].votes === 1) {
      thisRoundOfVotes++;
    }
    if (thisRoundOfVotes === testArray.length) {
      testArray.forEach(element => {
        element.votes--;
      });
    }
  }
}

function randomSelection(array) {
  let random;
  let returnedRandom;
  let noVotesArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].votes === 0) {
      noVotesArray.push(array[i]);
    }
  }

  random = noVotesArray[Math.floor(Math.random() * noVotesArray.length)];

  for (let i = 0; i < array.length; i++) {
    if (random === array[i]) {
      returnedRandom = array[i];
    }
  }

  // checkNoRepeat();
  // while (noRepeat.includes(random.name)) {
  //   random = array[Math.floor(Math.random() * array.length)];
  // }
  return returnedRandom;
}


function reRollSelections() {
  selection1 = randomSelection(testArray);
  selection2 = randomSelection(testArray);
}


function rollSelections() {
  checkVotes();
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
  sortRanks(testArray);
  for (let i = 0; i < testArray.length; i++) {
    let dataRow = document.createElement('tr');

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
  winner.votes++;
  loser.votes++;
}


// function checkNoRepeat() {
//   while (noRepeat.length === (Math.floor(testArray.length / 2))) {
//     noRepeat.shift();
//   }
// }


function makeTable() {
  nukeData();
  makeTableHeader();
  makeTableData();
}


new TestObject('test1');
new TestObject('test2');
new TestObject('test3');
new TestObject('test4');
new TestObject('test5');
new TestObject('test6');
new TestObject('test7');
new TestObject('test8');
new TestObject('test9');
new TestObject('test10');
new TestObject('test11');
new TestObject('test12');
new TestObject('test13');
new TestObject('test14');
new TestObject('test15');
new TestObject('test16');
new TestObject('test17');
new TestObject('test18');
new TestObject('test19');
new TestObject('test20');
new TestObject('test21');
new TestObject('test22');
new TestObject('test23');
new TestObject('test24');
new TestObject('test25');
new TestObject('test26');
new TestObject('test27');
new TestObject('test28');
new TestObject('test29');
new TestObject('test30');


newChoice();