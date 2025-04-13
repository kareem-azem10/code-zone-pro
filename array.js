const arr=[18,20,11];
// arr.sort((a, b) => a - b);
// console.log(arr);

for (let array = 0; array < arr.length; array++) {
    const idk = arr[array];
    console.log(idk);
    
}

const changetostring = () => {
    
    return arr.map(num => num.toString());
};

console.log(changetostring());

