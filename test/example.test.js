// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from '../math-utils.js';
import { subtract } from '../math-utils.js';
import { multiply } from '../math-utils.js';
import { divide } from '../math-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add() should take in 1 and 1 and return 2', (expect) => {
    const expected = 2;
    const actual = add(1, 1);
    expect.equal(actual, expected);
});

test('subtract() should take in 4 and 2 and return 2', (expect) => {
    const expected = 2;
    const actual = subtract(4, 2);
    expect.equal(actual, expected);
});

test('multiply() should take in 2 and 2 and return 4', (expect) => {
    const expected = 4;
    const actual = multiply(2, 2);
    expect.equal(actual, expected);
});

test('divide() should take in 4 and 2 and return 2', (expect) => {
    const expected = 2;
    const actual = divide(4, 2);
    expect.equal(actual, expected);
});

//
// //test('subtract() should take in 4 and 2 and return 2', (expect) => {
//     const expected = 2;
//     const actual = subtract(4, 2);
//     expect.equal(actual, expected);
// });

// test('multiply() should take in 2 and 2 and return 4', (expect) => {
//     const expected = 4;
//     const actual = multiply(2, 2);
//     expect.equal(actual, expected);
// });

// test('divide () should take in 4 and 2 and return 2', (expect) => {
//     const expected = 2;
//     const actual = divide(4, 2);
//     expect.equal(actual, expected);
// });//