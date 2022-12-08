const { aoc_input } = require('../config');
const fs = require('fs');
const { Console, dir } = require('console');
const lines = fs.readFileSync(`${aoc_input}`, 'utf-8').split('\n');

// Part 1
let sum = 0;
let directory = { '/': { size: 0 } };
let currentDir = [];

console.log(directory['/']);
lines.forEach((line) => {
  let [prompt, command, path] = line.split(' ');

  console.log(prompt, command);

  if (prompt === '$') {
    if (command === 'cd') {
      if (path === '..') {
        currentDir.pop();
      } else {
        let cwd = path;
        currentDir.push(cwd);
        let fullPath = currentDir.join('/');
        directory[fullPath] = { size: 0 };
      }
    }
  } else if (prompt === 'dir') {
    return;
  } else {
    let size = parseInt(prompt);
    let temp = [];
    currentDir.forEach((dir) => {
      temp.push(dir);
      let fullPath = temp.join('/');
      directory[fullPath].size += size;
    });
  }
});

for (let key in directory) {
  if (directory[key].size <= 100000) {
    sum += directory[key].size;
  }
}

console.log(sum);

// Part 2
console.log(directory);
let sizeToFree = directory['/'].size - 70000000 + 30000000;
let bestSizeYet = 70000000;
for (let key in directory) {
  if (directory[key].size > sizeToFree && directory[key].size < bestSizeYet) {
    bestSizeYet = directory[key].size;
  }
}

console.log(bestSizeYet);
