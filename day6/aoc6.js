const { aoc_input } = require('../config');
const fs = require('fs');
const { Console } = require('console');
const lines = fs.readFileSync(`${aoc_input}`, 'utf-8').split('\n');

console.log(lines);

// Part 1

const part1 = (datastream) => {
  let packetStart = 0;
  let packet1 = '';
  let packet2 = '';
  let packet3 = '';
  let packet4 = '';

  for (let i = 0; i < datastream.length; i++) {
    packet1 = datastream[i];
    packet2 = datastream[i + 1];
    packet3 = datastream[i + 2];
    packet4 = datastream[i + 3];
    if (
      packet1 !== packet2 &&
      packet1 !== packet3 &&
      packet1 !== packet4 &&
      packet2 !== packet3 &&
      packet2 !== packet4 &&
      packet3 !== packet4
    ) {
      packetStart = i + 4;
      break;
    }
  }
  return packetStart;
};

const part1Answer = part1(lines[0]);
console.log(part1Answer);

// Part 2
// This is the same, except you need 14 packets, not 4
// How can I do this with regex? I really should do that instead of this.
// This is terrible. Don't do this.

const part2 = (datastream) => {
  let packetStart = 0;
  let packet1 = '';
  let packet2 = '';
  let packet3 = '';
  let packet4 = '';
  let packet5 = '';
  let packet6 = '';
  let packet7 = '';
  let packet8 = '';
  let packet9 = '';
  let packet10 = '';
  let packet11 = '';
  let packet12 = '';
  let packet13 = '';
  let packet14 = '';

  for (let i = 0; i < datastream.length; i++) {
    packet1 = datastream[i];
    packet2 = datastream[i + 1];
    packet3 = datastream[i + 2];
    packet4 = datastream[i + 3];
    packet5 = datastream[i + 4];
    packet6 = datastream[i + 5];
    packet7 = datastream[i + 6];
    packet8 = datastream[i + 7];
    packet9 = datastream[i + 8];
    packet10 = datastream[i + 9];
    packet11 = datastream[i + 10];
    packet12 = datastream[i + 11];
    packet13 = datastream[i + 12];
    packet14 = datastream[i + 13];
    if (
      packet1 !== packet2 &&
      packet1 !== packet3 &&
      packet1 !== packet4 &&
      packet1 !== packet5 &&
      packet1 !== packet6 &&
      packet1 !== packet7 &&
      packet1 !== packet8 &&
      packet1 !== packet9 &&
      packet1 !== packet10 &&
      packet1 !== packet11 &&
      packet1 !== packet12 &&
      packet1 !== packet13 &&
      packet1 !== packet14 &&
      packet2 !== packet3 &&
      packet2 !== packet4 &&
      packet2 !== packet5 &&
      packet2 !== packet6 &&
      packet2 !== packet7 &&
      packet2 !== packet8 &&
      packet2 !== packet9 &&
      packet2 !== packet10 &&
      packet2 !== packet11 &&
      packet2 !== packet12 &&
      packet2 !== packet13 &&
      packet2 !== packet14 &&
      packet3 !== packet4 &&
      packet3 !== packet5 &&
      packet3 !== packet6 &&
      packet3 !== packet7 &&
      packet3 !== packet8 &&
      packet3 !== packet9 &&
      packet3 !== packet10 &&
      packet3 !== packet11 &&
      packet3 !== packet12 &&
      packet3 !== packet13 &&
      packet3 !== packet14 &&
      packet4 !== packet5 &&
      packet4 !== packet6 &&
      packet4 !== packet7 &&
      packet4 !== packet8 &&
      packet4 !== packet9 &&
      packet4 !== packet10 &&
      packet4 !== packet11 &&
      packet4 !== packet12 &&
      packet4 !== packet13 &&
      packet4 !== packet14 &&
      packet5 !== packet6 &&
      packet5 !== packet7 &&
      packet5 !== packet8 &&
      packet5 !== packet9 &&
      packet5 !== packet10 &&
      packet5 !== packet11 &&
      packet5 !== packet12 &&
      packet5 !== packet13 &&
      packet5 !== packet14 &&
      packet6 !== packet7 &&
      packet6 !== packet8 &&
      packet6 !== packet9 &&
      packet6 !== packet10 &&
      packet6 !== packet11 &&
      packet6 !== packet12 &&
      packet6 !== packet13 &&
      packet6 !== packet14 &&
      packet7 !== packet8 &&
      packet7 !== packet9 &&
      packet7 !== packet10 &&
      packet7 !== packet11 &&
      packet7 !== packet12 &&
      packet7 !== packet13 &&
      packet7 !== packet14 &&
      packet8 !== packet9 &&
      packet8 !== packet10 &&
      packet8 !== packet11 &&
      packet8 !== packet12 &&
      packet8 !== packet13 &&
      packet8 !== packet14 &&
      packet9 !== packet10 &&
      packet9 !== packet11 &&
      packet9 !== packet12 &&
      packet9 !== packet13 &&
      packet9 !== packet14 &&
      packet10 !== packet11 &&
      packet10 !== packet12 &&
      packet10 !== packet13 &&
      packet10 !== packet14 &&
      packet11 !== packet12 &&
      packet11 !== packet13 &&
      packet11 !== packet14 &&
      packet12 !== packet13 &&
      packet12 !== packet14 &&
      packet13 !== packet14
    ) {
      packetStart = i + 14;
      break;
    }
  }
  return packetStart;
};

const part2Answer = part2(lines[0]);
console.log(part2Answer);
