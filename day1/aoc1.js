const { aoc_input } = require('../config');
const fs = require('fs');
const lines = fs
	.readFileSync(`${aoc_input}`, 'utf-8')
  .split('\n')

// Part 1
// Return the highest number in the array.
// I thought we might need to remember the elf's index,
// otherwise I would have sorted lines and return index 0.

let elfTotals = [];
let currentSum = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i] === '') {
    elfTotals.push(currentSum);
    currentSum = 0;
  } else {
    currentSum += parseInt(lines[i]);
  }
}

let highest = 0;
let highestIndex = 0;
for (let i = 0; i < elfTotals.length; i++) {
  if (elfTotals[i] > highest) {
    highest = elfTotals[i];
    highestIndex = i;
  }
}

console.log(highest, highestIndex);

// Part Two
// Find the top three elves and sum their totals
// Since we don't need index, we can sort the array.

// sort elfTotals and return the sum of the first three items
elfTotals.sort((a, b) => b - a);

console.log(elfTotals[0] + elfTotals[1] + elfTotals[2]);