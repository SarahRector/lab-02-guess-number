// IMPORT MODULES under test here:
// import example from '../example.js';
import compareNumbers from '../numbers.js';
const test = QUnit.test;

test('if the value is 0 return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correctNum = 0
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
