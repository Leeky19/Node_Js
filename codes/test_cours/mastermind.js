'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd'];
let turnCounter = 0

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {
  // create a variable to hold hints
  let halfCorrect  = 0 //right letter, wrong spot
  let correct = 0 //right letter, right spot

  //split the 'solution' and 'guess' strings into arrays so we can compare them
  let solutionArray = solution.split('')
  let guessArray = guess.split('')
  // console.log("solution: ", solutionArray)
  // console.log("guess: ", guessArray)


  for (let i = 0; i < solutionArray.length; i++) {   
    let indexInSolution = solutionArray.indexOf(guessArray[i]); //check to see if the letter of each iteration is in the solutionArray
    // console.log(indexInSolution)
    if (guessArray[i] == solutionArray[i]){  //search for 'correct' guess
      correct = correct + 1; // adjust hint
      solutionArray[indexInSolution] = null; //so no duplicates can be compared.

    } else if (indexInSolution > -1){  //search for 'halfCorrect' guess
      halfCorrect = halfCorrect + 1; //adjust hint
      solutionArray[indexInSolution] = null; //so no duplicates can be compared.
      // console.log(solutionArray)
    }
  }


  //return hint
  let hint = halfCorrect + "-" + correct
  // console.log(hint)
  return hint

}

const mastermind = (guess) => {
  //solution = 'abcd'; // Comment this out to generate a random solution
  // your code here


  if (guess === solution){  //correct guess equals a win
    board = [] //resets the board
    turnCounter = 0 //resets turn counter
    console.log("You guessed it!")
    console.log("Play again?")
    generateSolution(); //restart game
    getPrompt();
    return "You guessed it!"
  
  } else if (turnCounter == 9){  //ends game after ten turns
    board = [] //resets the board
    turnCounter = 0 //resets turn counter
    console.log("You ran out of turns!\nThe solution was: ", solution)
    generateSolution(); //restart game
    getPrompt();
    return "Sorry, try again"

  } else{ //pushes this round's guess to the board and raises the turn counter.
    turnCounter = turnCounter + 1
    board.push(`Guess #${turnCounter}: ${guess} | Hint: ${generateHint(guess)}`)
    console.log("You have ", 10-turnCounter, " more guesses.")
  }
}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}