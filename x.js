const search = (num, d) => {
    let x = num.toString().split(d.toString())
    console.log(x);

    return num.toString().split(d.toString()).length - 1;
};

// console.log(search(123321, 3)); // الناتج: 2
// console.log(search(55555, 5));  // الناتج: 5
console.log(search(4325078, 0)); // الناتج: 3
