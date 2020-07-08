// IMPORT MODULES under test here:
// import example from '../example.js';
import compareNumbers from '../numbers.js';
const test = QUnit.test;

test('if the value is less than 5 return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correctNumber = 5;
    const userNumber = 3;
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userNumber, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expected);
});

test('if the value is more than 5 return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correctNumber = 5;
    const userNumber = 8;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userNumber, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expected);
});

test('if the value is 5 return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correctNumber = 5;
    const userNumber = 5;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userNumber, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expected);
});
