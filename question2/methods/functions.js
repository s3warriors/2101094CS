function generatePrimes(limit, initialCount) {
    const primes = [];
    let num = getRandomInt(2, limit);
    while (primes.length < initialCount) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}
function generateEvenNumbers(limit, initialCount) {
    const evens = [];
    let num = getRandomInt(2, limit);
    while (evens.length < initialCount) {
        if (num % 2 === 0) {
            evens.push(num);
        }
        num++;
    }
    return evens;
}
function generateFibonacci(limit, initialCount) {
    const fibonacci = [];
    let a = getRandomInt(1, limit);
    let b = getRandomInt(1, limit);
    while (fibonacci.length < initialCount) {
        const next = a + b;
        if (next <= limit) {
            fibonacci.push(next);
            a = b;
            b = next;
        } else {
            a = getRandomInt(1, limit);
            b = getRandomInt(1, limit);
        }
    }
    return fibonacci;
}
function generateRandomNumbers(count, limit) {
    const randoms = [];
    for (let i = 0; i < count; i++) {
        randoms.push(Math.floor(Math.random() * limit) + 1);
    }
    return randoms;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
function calculateAverage(numbers) {
    if (!numbers.length) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
module.exports = {
    generatePrimes,
    generateEvenNumbers,
    generateFibonacci,
    generateRandomNumbers,
    calculateAverage
};