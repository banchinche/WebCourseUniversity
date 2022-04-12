const number = 8;

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

const checkNumber = num => {
    result = {}

    // check if number is positive/negative/zero
    if (num > 0) {
        result.positive = true
    }
    else if (num < 0) {
        result.positive = false
    }
    else {
        result.positive = undefined
    }

    // check if number is prime
    result.prime = isPrime(num);

    // check if number is dividable by one of [2, 3, 5, 6, 9] without remainder 
    if (result.prime) {
        result.dividable = false
    }
    else {
        // cannot use break in forEach
        result.dividable = false;
        [2, 3, 5, 6, 9].forEach(divider => {
            if (num % divider == 0) {
                result.dividable = true;
            }
        });
    }
    return result
}

console.log('Number:', number);
console.log('Checkings:', checkNumber(number));
