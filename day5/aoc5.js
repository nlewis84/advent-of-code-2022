const { aoc_input } = require('../config');
const fs = require('fs');
const { Console } = require('console');
const lines = fs.readFileSync(`${aoc_input}`, 'utf-8').split('\n');

// Part 1
// Here is the cargo....I'm tired of trying to get a working parser for this...I'm just going to do it manually
const testCargo = [
  'ZN',
  'MCD',
  'P',
];

const part1Cargo = [
  'RNFVLJSM',
  'PNDZFJWH',
  'WRCDG',
  'NBS',
  'MZWPCBFN',
  'PRMW',
  'RTNGLSW',
  'QTHFNBV',
  'LMHZNF',
]

const part1 = (lines) => {
  // const cargo = testCargo;
  const cargo = part1Cargo;
  lines.forEach((line) => {
    const lineArray = line.split(' ');
    const move = lineArray[1];
    const from = lineArray[3] - 1;
    const to = lineArray[5] - 1;

    for (let i = 0; i < move; i++) {
      cargo[to] = cargo[to] + cargo[from].slice(-1);
      cargo[from] = cargo[from].slice(0, -1);
    }
  });
  return cargo;
};

const part1Answer = part1(lines).reduce((acc, cargo) => {
  return acc + cargo.slice(-1);
}, '');

console.log(part1Answer);

// Part 2
// This time, move is the number of characters to slice, not the number of times to do it

const part2 = (lines) => {
  // const cargo = testCargo;
  const cargo = part1Cargo;
  lines.forEach((line) => {
    const lineArray = line.split(' ');
    const move = lineArray[1];
    const from = lineArray[3] - 1;
    const to = lineArray[5] - 1;
    const moveString = cargo[from].slice(-move);

    cargo[to] = cargo[to] + moveString;
    cargo[from] = cargo[from].slice(0, -move);
  });
  return cargo;
};

const part2Answer = part2(lines).reduce((acc, cargo) => {
  return acc + cargo.slice(-1);
}, '');

console.log(part2Answer);