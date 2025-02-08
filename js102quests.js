// const add = (a, b) => {
//     console.log(a + b);
//     return a + b
// }

// const multiply = (x, y) => {

//     console.log(x * y);
//     return x * y
// }

// const calculate = (a, b, x, y) => {
//     add(a, b);
//     multiply(x, y);
// }

// const checkEven = (number) => {
//     return number % 2 === 0
// }

// const divide = (x, y) => {
//     console.log(x / y);
//     return x / y
// }

// const safeDivide = (x, y) => {
//     if (y !== 0) {
//         return divide(x, y)
//     }
//     return "cannot divide by zero"
// }

// const factorial = (number) => {
//     var i = 2
//     var result = 1
//     for (i; i <= number; i++) {
//         result = multiply(result, i)
//     }
//     return result
// }
// const findmax = (array) => {
//     let max = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//     return max
// }
// const convertToUpper = (string) => {
//     console.log(string.toUpperCase());
// }

// const capitalizeFirsLetter = (text) => {
//     const first = convertToUpper(text.charAt(0))
//     return first + text.slice(1)
// }
// //rectangle

// const Coordinates = {
//     xu: 5,
//     yu: 10,
//     xl: 15,
//     yl: 5,
// }

// const Length = Coordinates.xl - Coordinates.xu;
// const width = Coordinates.yl - Coordinates.yu;

// // quest1
// const calcrectanglearea = (Length, width) => {
//     return Length * width;
// }

// const area = calcrectanglearea(Length, width);
// console.log(`Area of the rectangle: ${area}`);

// //quest2
// const calcrectanglePerimeter = (Length, width) => {
//     return 2 * (Length + width);
// }
// const perimeter = calcrectanglePerimeter(Length, width);
// console.log(`Perimeter of the rectangle: ${perimeter}`);

// // quest3
// const calcRectangle = (Length, width) => {
//     return Length * width + ", " + 2 * (Length + width);
// }

// let result = calcRectangle(Length, width);

// console.log(`Area and Perimeter of rectangle: ${result}`);

// // quest4
// const mainCoordinates = {
//     xu: 10,
//     yu: 10,
//     xl: 20,
//     yl: 20,
// }

// console.log(`the angels are: ${mainCoordinates.xu} ${mainCoordinates.yu} ${mainCoordinates.xl} ${mainCoordinates.yl}`);

// const coordinates = {
//     xu: mainCoordinates.xu,
//     yu: mainCoordinates.yu,
//     xl: mainCoordinates.xl,
//     yl: mainCoordinates.yl,
// }
// if (coordinates.xu === mainCoordinates.xu && coordinates.yu === mainCoordinates.yu && coordinates.xl === mainCoordinates.xl && coordinates.yl === mainCoordinates.yl) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// //quest5
// const isPointInRectangle = (x, y, rectangle) => {
//     return (x >= rectangle.xu && x <= rectangle.xl) &&
//         (y >= rectangle.yu && y <= rectangle.yl);
// }

// const Point1 = { x: 15, y: 15 };
// const Point2 = { x: 5, y: 5 };

// console.log(`Point (${Point1.x}, ${Point1.y}) is inside rectangle: ${isPointInRectangle(Point1.x, Point1.y, coordinates)}`);
// console.log(`Point (${Point2.x}, ${Point2.y}) is inside rectangle: ${isPointInRectangle(Point2.x, Point2.y, coordinates)}`);
// //quest6
// const RectangleChord = (Length, width) => {
//     const a = Length;
//     const b = width;
//     const c = Math.sqrt(a * a + b * b);
//     console.log(`The chord of the rectangle is: ${c}`);
// }

// RectangleChord(Length, width);
// //quest7
// const isSquare = (rect) => {
//     // Calculate width and height using coordinates
//     const width = Math.abs(rect.xl - rect.xu);
//     const height = Math.abs(rect.yl - rect.yu);
//     return width === height;
// }
// console.log(`Is the rectangle a square? ${isSquare(coordinates)}`);
// //quest8
// const goldRectangle = () => {
//     const width = Math.abs(coordinates.xl - coordinates.xu);
//     const height = Math.abs(coordinates.yl - coordinates.yu);
//     if (Math.abs(width / height - 1.618) < 0.0001) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(goldRectangle());

//axis x,y
const axis = {
    x1: 5,
    y1: 10,
    x2: 15,
    y2: 20,

}
//quest1
const slope = (axis) => {
    return (axis.y2 - axis.y1) / (axis.x2 - axis.x1);
}
console.log(`The slope of the line is: ${slope(axis)}`);

//quest2
const yIntercept = (axis) => {
    return axis.y1 - slope(axis) * axis.x1;
}
console.log(`The y-intercept of the line is: ${yIntercept(axis)}`);

//quest3
const newAxis = (axis,x,y) => {
    return {
        ...axis,
        x1: x,
        y1: y,
        x2: x + (axis.x2 - axis.x1),
        y2: y + (axis.y2 - axis.y1),
    }
};
console.log(newAxis(axis,10,10))



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