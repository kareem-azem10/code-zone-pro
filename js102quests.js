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
//rectangle

const Coordinates={
    xu: 5,
    yu: 10,
    xl: 15,
    yl: 5,
}

const Length = Coordinates.xl - Coordinates.xu;
const width = Coordinates.yl - Coordinates.yu;

const calcrectanglearea = (Length, width) => {
    return Length * width;
}

const area = calcrectanglearea(Length, width);
console.log(`Area of the rectangle: ${area}`);

const calcrectanglePerimeter = (Length, width) => {
    return 2 * (Length + width);
}
const perimeter = calcrectanglePerimeter(Length, width);
console.log(`Perimeter of the rectangle: ${perimeter}`);

const calcRectangle =(Length, width) => {
    return Length * width + ", " + 2 * (Length + width);
}

let result = calcRectangle(Length, width);

console.log(`Area and Perimeter of rectangle: ${result}`); 

const mainCoordinates = {
    xu: 10,
    yu: 10,
    xl: 20,
    yl: 20,
} 

console.log(`the angels are: ${mainCoordinates.xu} ${mainCoordinates.yu} ${mainCoordinates.xl} ${mainCoordinates.yl}`);

    const coordinates = {
        xu: mainCoordinates.xu,
        yu: mainCoordinates.yu,
        xl: mainCoordinates.xl,
        yl: mainCoordinates.yl,
    }
    if (coordinates.xu === mainCoordinates.xu && coordinates.yu === mainCoordinates.yu && coordinates.xl === mainCoordinates.xl && coordinates.yl === mainCoordinates.yl) {
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

        const RectangleChord =()=>{
            const a = Length;
            const b = width;
            const c = Math.abs(a - b);
            console.log(`The chord of the rectangle is: ${c}`);
        }

        RectangleChord();

        const isSquare = (rect) => {
            // Calculate width and height using coordinates
            const width = Math.abs(rect.xl - rect.xu);
            const height = Math.abs(rect.yl - rect.yu);
            return width === height;
        }

        // Test if our rectangle is square
        console.log(`Is the rectangle a square? ${isSquare(coordinates)}`);

        const LENGHT = Length;
        const Width = width;
        
        const goldRectangle = () => {
            const a = LENGHT;
            const b = Width;
            const c = Math.abs(a * a + b * b);
            const goldRectangle = (c / b);
            if (Math.abs(goldRectangle - 1.618) < 0.01) {
                return true;
            } else {
                return false;
            }
        }
        console.log(goldRectangle());

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