const { aoc_input } = require('../config');
const fs = require('fs');
const lines = fs.readFileSync(`${aoc_input}`, 'utf-8').split('\n');

// Part 1
// Find the ranges that are completely contained within the other elf's range

const part1 = (lines) => {
  const lineObjects = lines.map((line) => {
    const lineArray = line.split(',');
    const firstElfAssignedSection = lineArray[0].split('-');
    const secondElfAssignedSection = lineArray[1].split('-');
    return {
      elf1From: parseInt(firstElfAssignedSection[0]),
      elf1To: parseInt(firstElfAssignedSection[1]),
      elf2From: parseInt(secondElfAssignedSection[0]),
      elf2To: parseInt(secondElfAssignedSection[1]),
    };
  });
  const count = lineObjects.reduce((acc, lineObject) => {
    if (
      lineObject.elf1From >= lineObject.elf2From &&
      lineObject.elf1To <= lineObject.elf2To
    ) {
      return acc + 1;
    } else if (
      lineObject.elf2From >= lineObject.elf1From &&
      lineObject.elf2To <= lineObject.elf1To
    ) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return count;
};

console.log(part1(lines));

// Part 2
// Now, determine if there is any overlap in ranges and return the number of ranges that overlap

const part2 = (lines) => {
  const lineObjects = lines.map((line) => {
    const lineArray = line.split(',');
    const firstElfAssignedSection = lineArray[0].split('-');
    const secondElfAssignedSection = lineArray[1].split('-');
    return {
      elf1From: parseInt(firstElfAssignedSection[0]),
      elf1To: parseInt(firstElfAssignedSection[1]),
      elf2From: parseInt(secondElfAssignedSection[0]),
      elf2To: parseInt(secondElfAssignedSection[1]),
    };
  });
  const count = lineObjects.reduce((acc, lineObject) => {
    if (
      lineObject.elf1From >= lineObject.elf2From &&
      lineObject.elf1To <= lineObject.elf2To
    ) {
      return acc + 1;
    } else if (
      lineObject.elf2From >= lineObject.elf1From &&
      lineObject.elf2To <= lineObject.elf1To
    ) {
      return acc + 1;
    } else if (
      lineObject.elf1From >= lineObject.elf2From &&
      lineObject.elf1From <= lineObject.elf2To
    ) {
      return acc + 1;
    } else if (
      lineObject.elf2From >= lineObject.elf1From &&
      lineObject.elf2From <= lineObject.elf1To
    ) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return count;
};

console.log(part2(lines));
