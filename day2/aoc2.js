const { aoc_input } = require('../config');
const fs = require('fs');
const lines = fs
	.readFileSync(`${aoc_input}`, 'utf-8')
  .split('\n')

// Part 1
// Play Rock Paper Scissors!

const game = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const opponent = line[0];
  const move = line[2];
  const shapeScore = move === 'X' ? 1 : move === 'Y' ? 2 : 3;
  const outcome = opponent === 'A' ? move === 'X' ? 3 : move === 'Y' ? 6 : 0 : opponent === 'B' ? move === 'X' ? 0 : move === 'Y' ? 3 : 6 : move === 'X' ? 6 : move === 'Y' ? 0 : 3;
  const totalScore = outcome + shapeScore;
  game.push({
    opponent,
    move,
    shapeScore,
    outcome,
    totalScore
  });
}

let total = 0;
for (let i = 0; i < game.length; i++) {
  total += game[i].totalScore;
}
console.log(total);

// Part 2
// Whoops! X means Lose, Y means Draw, Z means Win!

const game2 = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const opponent = line[0];
  const result = line[2];
  const outcome = result === 'X' ? 0 : result === 'Y' ? 3 : 6;
  const shapeScore = opponent === 'A' ? result === 'X' ? 3 : result === 'Y' ? 1 : 2 : opponent === 'B' ? result === 'X' ? 1 : result === 'Y' ? 2 : 3 : result === 'X' ? 2 : result === 'Y' ? 3 : 1;
  const totalScore = outcome + shapeScore;
  game2.push({
    opponent,
    result,
    outcome,
    shapeScore,
    totalScore
  });
}

let total2 = 0;
for (let i = 0; i < game2.length; i++) {
  total2 += game2[i].totalScore;
}
console.log(total2);
