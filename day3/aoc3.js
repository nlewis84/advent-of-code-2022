const { aoc_input } = require('../config');
const fs = require('fs');
const lines = fs.readFileSync(`${aoc_input}`, 'utf-8').split('\n');

const LOWER_CASE_PRIORITIES = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};
const UPPER_CASE_PRIORITIES = {
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

// Part 1
// Find the sum of the priorities of the shared item types

const backpack = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const firstCompartment = line.slice(0, line.length / 2);
  const secondCompartment = line.slice(line.length / 2);

  const item = {
    firstCompartment,
    secondCompartment,
  };
  backpack.push(item);
}

let total = 0;
for (let i = 0; i < backpack.length; i++) {
  const item = backpack[i];
  const firstCompartment = item.firstCompartment.split('');
  const secondCompartment = item.secondCompartment.split('');
  const sharedItemType = firstCompartment.find((letter) =>
    secondCompartment.includes(letter)
  );
  const sharedItemTypePriority =
    sharedItemType === sharedItemType.toLowerCase()
      ? LOWER_CASE_PRIORITIES[sharedItemType]
      : UPPER_CASE_PRIORITIES[sharedItemType];

  item.sharedItemType = sharedItemType;
  item.sharedItemTypePriority = sharedItemTypePriority;
  total += sharedItemTypePriority;
}

console.log('Part 1: ', total);

// Part 2
// Now there are groups of three elves and we need to find the sharedItemType between all three elves

const backpack2 = [];
for (let i = 0; i < lines.length; i += 3) {
  const firstElf = lines[i];
  const secondElf = lines[i + 1];
  const thirdElf = lines[i + 2];
  const item = {
    firstElf,
    secondElf,
    thirdElf,
  };
  backpack2.push(item);
}

let total2 = 0;
for (let i = 0; i < backpack2.length; i++) {
  const item = backpack2[i];
  const firstElf = item.firstElf.split('');
  const secondElf = item.secondElf.split('');
  const thirdElf = item.thirdElf.split('');

  const sharedItemType = firstElf.find(
    (letter) => secondElf.includes(letter) && thirdElf.includes(letter)
  );
  const sharedItemTypePriority =
    sharedItemType === sharedItemType.toLowerCase()
      ? LOWER_CASE_PRIORITIES[sharedItemType]
      : UPPER_CASE_PRIORITIES[sharedItemType];

  item.sharedItemType = sharedItemType;
  item.sharedItemTypePriority = sharedItemTypePriority;
  total2 += sharedItemTypePriority;
}

console.log('Part 2: ', total2);
