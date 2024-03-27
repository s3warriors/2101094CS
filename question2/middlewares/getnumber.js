const functions = require('../methods/functions');

const WINDOW_SIZE = 10;
const prevResults = {};
function getNumbers(req, res) {
    const qualifier = req.params.numberid;
    let numbers = [];
    const initialCount = 10;
    switch (qualifier) {
        case 'p':
            numbers = functions.generatePrimes(100, initialCount);
            break;
        case 'f':
            numbers = functions.generateFibonacci(100, initialCount);
            break;
        case 'e':
            numbers = functions.generateEvenNumbers(100, initialCount);
            break;
        case 'r':
            numbers = functions.generateRandomNumbers(10, 100);
            break;
        default:
            break;
    }

    const newNumbers = numbers.slice(0, WINDOW_SIZE);
  
    const prevResult = prevResults[qualifier] || [];

    const resp = {
        numbers: newNumbers,
        windowPrevState: prevResult,
        windowCurrState: newNumbers,
        avg: functions.calculateAverage(newNumbers).toFixed(2)
    };

    prevResults[qualifier] = newNumbers;

    res.json(resp);
}

module.exports = getNumbers;
