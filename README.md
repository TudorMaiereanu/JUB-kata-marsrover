# JUB-kata-marsrover (Typescript)

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
* Implement wrapping from one edge of the grid to another. (planets are spheres after all)
* Implement obstacle detection before each move to a new square. 

Sample api:
```
Rover rover = new Rover(0, 0, 'N');
rover.move("FFBLFR")
```
