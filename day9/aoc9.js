const { aoc_input } = require('../config');
const fs = require('fs');
const moves = fs.readFileSync(`${aoc_input}`, 'utf-8').split('\n');

// let ropeLength = 2;
let ropeLength = 10;
let knots = new Array(ropeLength).fill(0).map(() => ({ x: 0, y: 0 }));
let visitedPositions = new Set();

moves.forEach((move) => {
  let [moveDirection, moveDistance] = move.split(' ');

  moveDistance = parseInt(moveDistance);

  for (let i = 0; i < moveDistance; i++) {
    moveHead(moveDirection);

    for (let j = 1; j < knots.length; j++) {
      if (!isTouching(knots[j - 1], knots[j])) {
        knots[j] = moveKnot(knots[j - 1], knots[j]);
      }
    }

    visitedPositions.add(
      `${knots[ropeLength - 1].x},${knots[ropeLength - 1].y}`
    );
  }
});

console.log('visitedPositions: ', visitedPositions.size);

function isTouching(fromKnot, toKnot) {
  let x = Math.abs(fromKnot.x - toKnot.x);
  let y = Math.abs(fromKnot.y - toKnot.y);

  return x <= 1 && y <= 1;
}

function moveHead(moveDirection) {
  switch (moveDirection) {
    case 'R':
      knots[0].x++;
      break;
    case 'U':
      knots[0].y++;
      break;
    case 'L':
      knots[0].x--;
      break;
    case 'D':
      knots[0].y--;
      break;
  }
}

function moveKnot(fromKnot, toKnot) {
  let newCoords = { ...toKnot };
  let x = toKnot.x - fromKnot.x;
  let y = toKnot.y - fromKnot.y;

  if (x > 0) {
    newCoords.x--;
  } else if (x < 0) {
    newCoords.x++;
  }

  if (y > 0) {
    newCoords.y--;
  } else if (y < 0) {
    newCoords.y++;
  }

  return newCoords;
}
