# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @spencerhahmo/lotide`

**Require it:**

`const _ = require('@spencerhahmo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts if two different arrays equal one another
* `assertEqual`: tests whether two values match one another
* `assertObjectsEqual`: asserts if two different objects equal one another
* `countLetters`: counts each instance of a letter in a string
* `countOnly`: takes in a collection of items then returns the count for a specific item
* `eqArrays`: tests to see if two arrays equal one another
* `eqObjects`: tests to see if two objects equal one another
* `findKey`: takes in an object and a callback, then scans that object for the first key where the callback returns truthy before returning that. If no truthy value is found, undefined is returned instead
* `findKeyByValue`: searches for a key on an object where its value matches a specific value
* `head`: gets the first value of an array and tests if it matches a value
* `letterPositions`: returns the location of each letter in a string
* `map`: creates a new array from an existing one
* `middle`: returns the middle value(s) of an array based on if the array is an odd or even length
* `tail`: gets everything except the first value of an array and tests if it matches a value
* `takeUntil`: takes in an array then takes values from the array and pushes them into a new array until a condition is met
* `without`: removes values from an array and tests if it equals another

 
{
  "author": "Spencer Hahmoe <schahmo@gmail.com>"
}
{
  "version": "1.0.0"
}