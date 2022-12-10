const { aoc_input } = require('../config');
const fs = require('fs');
const lines = fs.readFileSync(`${aoc_input}`, 'utf-8').split('\n');

// Part 1
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gridSize = 10;
let head = { x: 0, y: 0 };
let tail = { x: 0, y: 0 };
let grid = [];

// Create grid with all empty cells
for (let i = 0; i < gridSize; i++) {
  grid[i] = new Array(gridSize).fill('.');
}

// Print the grid
function printGrid() {
  // Reset the grid to all empty cells
  for (let i = 0; i < gridSize; i++) {
    grid[i] = new Array(gridSize).fill('.');
  }

  // Place the head and tail on the grid
  grid[head.y][head.x] = 'H';
  grid[tail.y][tail.x] = 'T';

  for (let row of grid) {
    console.log(row.join(' '));
  }
  console.log();
}

// Place the tail on the grid in the correct position
function placeTail(direction) {
  // Initialize the position of the tail
  tail.x = head.x;
  tail.y = head.y;

  // Update the position of the tail
  if (head.x === tail.x && head.y === tail.y) {
    // The head and tail are overlapping, so do nothing
  } else if (head.x === tail.x || head.y === tail.y) {
    // The head and tail are in the same row or column, so move the tail one step in the same direction as the head
    switch (direction) {
      case 'U':
        tail.y--;
        break;
      case 'D':
        tail.y++;
        break;
      case 'L':
        tail.x--;
        break;
      case 'R':
        tail.x++;
        break;
    }
  } else if (
    Math.abs(head.x - tail.x) === 2 ||
    Math.abs(head.y - tail.y) === 2
  ) {
    // The head and tail are not in the same row or column, and the head
    // and tail are separated by two cells, so move the tail two steps in
    // the same direction as the head
    switch (direction) {
      case 'U':
        tail.y -= 2;
        break;
      case 'D':
        tail.y += 2;
        break;
      case 'L':
        tail.x -= 2;
        break;
      case 'R':
        tail.x += 2;
        break;
    }
  } else {
    // The head and tail are not in the same row or column, and the head
    // and tail are separated by one cell, so move the tail one step in
    // the same direction as the head
    switch (direction) {
      case 'U':
        tail.y--;
        break;
      case 'D':
        tail.y++;
        break;
      case 'L':
        tail.x--;
        break;
      case 'R':
        tail.x++;
        break;
    }
  }

  // Place the tail on the grid in the correct position
  grid[tail.y][tail.x] = 'T';
}

// Update the position of the head
function updatePositions(direction) {
  // Update the position of the head
  switch (direction) {
    case 'U':
      head.y--;
      break;
    case 'D':
      head.y++;
      break;
    case 'L':
      head.x--;
      break;
    case 'R':
      head.x++;
      break;
  }

  // Place the head on the grid in the correct position
  grid[head.y][head.x] = 'H';

  // Place the tail on the grid in the correct position
  placeTail(direction);
}

// Place the tail on the grid in the correct position
function placeTail(direction) {
  // Initialize the position of the tail
  tail.x = head.x;
  tail.y = head.y;

  // Update the position of the tail
  if (head.x === tail.x && head.y === tail.y) {
    // The head and tail are overlapping, so do nothing
  } else if (head.x === tail.x || head.y === tail.y) {
    // The head and tail are in the same row or column, so move the tail one step in the same direction as the head
    switch (direction) {
      case 'U':
        tail.y--;
        break;
      case 'D':
        tail.y++;
        break;
      case 'L':
        tail.x--;
        break;
      case 'R':
        tail.x++;
        break;
    }
  } else {
    // The head and tail are not in the same row or column, so move the tail one step diagonally to keep up with the head
    switch (direction) {
      case 'U':
        tail.y--;
        tail.x--;
        break;
      case 'D':
        tail.y++;
        tail.x++;
        break;
      case 'L':
        tail.y--;
        tail.x++;
        break;
      case 'R':
        tail.y++;
        tail.x--;
        break;
    }
  }

  // Update the grid with the new position of the tail
  grid[tail.y][tail.x] = 'T';
}

rl.on('line', (input) => {
  // Parse the input
  const [direction, steps] = input.split(' ');

  // Update the position of the head and tail for each step
  for (let i = 0; i < steps; i++) {
    updatePositions(direction);
  }

  // Print the grid
  printGrid();
});
