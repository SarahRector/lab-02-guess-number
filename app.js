// import functions and grab DOM elements
import compareNumbers from './numbers.js';


const myButton = document.getElementById('submit-button');
const triesLeft = document.getElementById('tries');
const guessRange = document.getElementById('high-or-low');
const winLose = document.getElementById('win-or-lose');

console.log(myButton, triesLeft, guessRange, winLose);
// initialize state
// initialize random number generator
const correctNumber = Math.ceil(Math.random() * 20);
console.log(correctNumber);

let guessLeft = 4;

// set event listeners to update state and DOM


myButton.addEventListener('click', () => {
    const myInput = Number(document.getElementById('input').value);
    const userGuess = compareNumbers(myInput, correctNumber);
    if (userGuess === 0) {
        guessRange.textContent = 'Yay! You got it!';
    } else if (userGuess === -1) {
        guessRange.textContent = 'Your guess is too low.';
    } else if (userGuess === 1) {
        guessRange.textContent = 'Your guess is too high.';
    }
});