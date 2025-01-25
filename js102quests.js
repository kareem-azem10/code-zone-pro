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
    return number % 2 === 0
}

const divide = (x, y) => {
    console.log(x / y);
    return x / y
}

const safeDivide = (x, y) => {
    if (y !== 0) {
        return divide(x, y)
    }
    return "cannot divide by zero"
}

const factorial = (number) => {
    var i = 2
    var result = 1
    for (i; i <= number; i++) {
        result = multiply(result, i)
    }
    return result
}
const findmax = (array) => {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max   
}
const convertToUpper = (string) => {
    console.log(string.toUpperCase());
}

const capitalizeFirsLetter = (text) => {
    const first = convertToUpper(text.charAt(0))
    return first + text.slice(1)
}

const length = 10;
const width = 5;

const calcrectanglearea = (length, width) => {
    return length * width;
}

const area = calcrectanglearea(length, width);
console.log(`Area of the rectangle: ${area}`);

const calcrectanglePerimeter = (length, width) => {
    return 2 * (length + width);
}
const perimeter = calcrectanglePerimeter(length, width);
console.log(`Perimeter of the rectangle: ${perimeter}`);

const calcRectangle =(length, width) => {
    return length * width + ", " + 2 * (length + width);
}

let result = calcRectangle(length, width);

console.log(`Area and Perimeter of rectangle: ${result}`); 

const angels = {
    xu: 10,
    yu: 10,
    xl: 20,
    yl: 20,
} 

console.log(`the angels are: ${angels.xu} ${angels.yu} ${angels.xl} ${angels.yl}`);

    const coordinates = {
        xu: angels.xu,
        yu: angels.yu,
        xl: angels.xl,
        yl: angels.yl,
    }
    if (coordinates.xu === angels.xu && coordinates.yu === angels.yu && coordinates.xl === angels.xl && coordinates.yl === angels.yl) {
        console.log(true);
    } else {
        console.log(false);
    }

    const isPointInRectangle = (x, y, rectangle) => {
        return (x >= rectangle.xu && x <= rectangle.xl) && 
               (y >= rectangle.yu && y <= rectangle.yl);
    }

    const Point1 = { x: 15, y: 15 };
    const Point2 = { x: 5, y: 5 };   

    console.log(`Point (${Point1.x}, ${Point1.y}) is inside rectangle: ${isPointInRectangle(Point1.x, Point1.y, coordinates)}`);
    console.log(`Point (${Point2.x}, ${Point2.y}) is inside rectangle: ${isPointInRectangle(Point2.x, Point2.y, coordinates)}`);

        const PythagoreanTheorem =()=>{
            const a = 3;
            const b = 4;
            const c = Math.sqrt(a * a + b * b);
            console.log(`The Pythagorean theorem applies to the triangle with sides ${a}, ${b}, and ${c}.`);
        }

        PythagoreanTheorem();

        const isSquare = (rect) => {
            // Calculate width and height using coordinates
            const width = Math.abs(rect.xl - rect.xu);
            const height = Math.abs(rect.yl - rect.yu);
            return width === height;
        }

        // Test if our rectangle is square
        console.log(`Is the rectangle a square? ${isSquare(coordinates)}`);

        const ChickIfGoldTringle = () => {
            const a = 5;
            const b = 8;
            const c = Math.sqrt(a * a + b * b);
            const goldTringle = (c / b);
            if (Math.abs(goldTringle - 1.618) < 0.01) {
                return true;
            } else {
                return false;
            }
        }
        console.log(ChickIfGoldTringle());

//call functions
// add(10,5)
// multiply(5,6)
// calculate(5, 10, 5, 6)
// checkEven(1345)
// divide(10,5)
// safeDivide(5,5)
//  console.log(factorial(5));
//  console.log(findmax([1,2,3,4,5,6,7,8,9,10]))
//  convertToUpper("hello")
//  capitalizeFirsLetter("hello")
// angel(10,10,20,20)