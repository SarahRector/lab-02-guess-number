// import functions and grab DOM elements
import compareNumbers from './numbers.js';


const myButton = document.getElementById('submit-button');
const triesLeft = document.getElementById('tries');
const guessRange = document.getElementById('high-or-low');
const winLose = document.getElementById('win-or-lose');

// initialize state
// initialize random number generator
const correctNumber = Math.ceil(Math.random() * 20);
/*console.log(correctNumber);*/

let guessLeft = 4;

// set event listeners to update state and DOM


myButton.addEventListener('click', () => {
    const myInput = Number(document.getElementById('input').value);
    const userGuess = compareNumbers(myInput, correctNumber);
    guessLeft--;
    triesLeft.textContent = guessLeft + ' tries remaining';
    if (userGuess === 0) {
        guessRange.textContent = 'Yay! You got it!';
        winLose.textContent = 'Winner, winner, lobster dinner!';
    } else if (userGuess === -1) {
        guessRange.textContent = 'Your guess is too low.';
    } else if (userGuess === 1) {
        guessRange.textContent = 'Your guess is too high.';
    } if (guessLeft < 0) {
        winLose.textContent = 'Lost that Lobster, Loser!';
    }
    
});