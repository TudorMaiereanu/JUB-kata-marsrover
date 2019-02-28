# JUB-kata-marsrover (Typescript)

## Problem

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. 
This plateau, which is curiously rectangular, must be navigated by the 
rovers so that their on-board cameras can get a complete view of the 
surrounding terrain to send back to Earth.

A rover's position and location is represented by a combination of x 
and y co-ordinates and a letter representing one of the four cardinal 
compass points. The plateau is divided up into a grid to simplify 
navigation. An example position might be 0, 0, N, which means the 
rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. 
The possible letters are 'L', 'R', 'F' and 'B'. 'L' and 'R' makes the 
rover spin 90 degrees left or right respectively, without moving 
from its current spot. 'F' and 'B' means move forward and backwards one grid point, and 
maintain the same direction.

## Goal
Practice Classicist TDD (state verification, no mocks) and familiarize with common code smells, refactoring steps, design patterns and principles.

## Tools

This is a [gulp](http://gulpjs.com/) project using [typescript](https://www.typescriptlang.org/) 
and [jasmine](http://jasmine.github.io/) as test framework.

## Versions

* ```Gulp```: 3.9.1
* ```typings```: 1.3.3
* ```node```: 4.4.2

## Description
Develop an api that moves a rover around on a grid.

* You are given the initial starting point (x, y) of a rover and the direction (North, South, East, West) it is facing.
* The rover receives a list of commands.
* Implement commands that move the rover forward / backward.
* Implement commands that turn the rover left / right.
* Make sure rover doesn't move if it receives an unknown command
* Implement planet that serves as a 2D grid, which contains a list of 2-element lists as coordinates for obstacles
* Implement obstacle detection before each move to a new square. 

Sample api:
```
Rover rover = new Rover(0, 0, 'N', 10, [[0,1], [4,5]]);
rover.move("FFBLFR")
```

## Implementation
Recommended approach to solve this kata is by using TDD.

Useful resource: https://sourcemaking.com