
const countDigits = (number) => {
    return number.toString().length;
}
console.log(countDigits(1234567890));


const evenOdd = (number) => {
    let even = 0
    let odd = 0
    while (number > 0) {
        let lastDigit = number % 10; //getlastdigitfrom right
        if (number % 2 == 0) { //check if even
            even+=lastDigit
        } else {
            odd+=lastDigit
        }
        number = Math.floor(number / 10)// get numebr to under
    }
    return even > odd
}
console.log(evenOdd(1386));

const getFirstDigit = (number) => {
    return Number(String(number)[0]); 
};

console.log(getFirstDigit(987654321)); // Output: 9

const getDigitAtPosition = (number, position) => {
    return Number(String(number)[position]);
};
console.log(getDigitAtPosition(123456789, 5)); // Output: 6

const setDigitAtPosition = (number, digit, position) => {
    return Number(String(number).substring(0, position) + digit + String(number).substring(position + 1));
};
console.log(setDigitAtPosition(12345, 8, 3)); // Output: 12385

const countMinDigits = (number) => {
    return number.toString().split('').length;
}
console.log(countMinDigits(1231123451));

