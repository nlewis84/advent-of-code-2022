const { aoc_input } = require('../config');
const fs = require('fs');
const lines = fs.readFileSync(`${aoc_input}`, 'utf-8').split('\n');

// Part 1
const map = lines.map((line) => line.split(''));

function countVisibleTrees(grid) {
  let visible = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // If the current element is at the edge of the grid, it is visible
      if (
        i === 0 ||
        i === grid.length - 1 ||
        j === 0 ||
        j === grid[i].length - 1
      ) {
        visible.push('Y');
      } else {
        // Check if the current element is visible from the top, bottom, left, or right
        let top = true;
        let bottom = true;
        let left = true;
        let right = true;

        // Check if there are any taller trees to the top of the current tree
        for (let k = i - 1; k >= 0; k--) {
          if (grid[k][j] >= grid[i][j]) {
            top = false;
            break;
          }
        }

        // Check if there are any taller trees to the bottom of the current tree
        for (let k = i + 1; k < grid.length; k++) {
          if (grid[k][j] >= grid[i][j]) {
            bottom = false;
            break;
          }
        }

        // Check if there are any taller trees to the left of the current tree
        for (let k = j - 1; k >= 0; k--) {
          if (grid[i][k] >= grid[i][j]) {
            left = false;
            break;
          }
        }

        // Check if there are any taller trees to the right of the current tree
        for (let k = j + 1; k < grid[i].length; k++) {
          if (grid[i][k] >= grid[i][j]) {
            right = false;
            break;
          }
        }

        if (top || bottom || left || right) {
          visible.push('Y');
        } else {
          visible.push('N');
        }
      }
    }
  }

  return visible.filter((item) => item === 'Y').length;
}

console.log(countVisibleTrees(map));

// Part 2
// Scenic scores for each tree

function countScenicValue(grid) {
  let scores = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        let top = 0;
        let bottom = 0;
        let left = 0;
        let right = 0;

        for (let k = i - 1; k >= 0; k--) {
          if (grid[k][j] >= grid[i][j]) {
            top = i - k;
            break;
          }
          top++;
        }

        for (let k = i + 1; k < grid.length; k++) {
          if (grid[k][j] >= grid[i][j]) {
            bottom = k - i;
            break;
          }
          bottom++;
        }

        for (let k = j - 1; k >= 0; k--) {
          if (grid[i][k] >= grid[i][j]) {
            left = j - k;
            break;
          }
          left++;
        }

        for (let k = j + 1; k < grid[i].length; k++) {
          if (grid[i][k] >= grid[i][j]) {
            right = k - j;
            break;
          }
          right++;
        }

        let score = top * bottom * left * right;

        scores.push(score);
    }
  }

  return Math.max(...scores);
}

console.log(countScenicValue(map));
