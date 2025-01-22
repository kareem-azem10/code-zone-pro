const add = (a, b) => {
    console.log(a + b);
    return a + b
}

const multiply = (x, y) => {

    console.log(x * y);
    return x * y
}

const calculate = (a, b, x, y) => {
    add(a, b);
    multiply(x, y);
}

const checkEven = (number) => {
    if (number / 2) {
        return console.log("true");
    }
}

const divide = (x, y) => {

}

//call functions
// add(10,5)
// multiply(5,6)
calculate(5, 10, 5, 6)
checkEven(1345)
divide(9)