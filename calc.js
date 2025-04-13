
const countDigits = (number) => {
    return number.toString().length;
}
console.log(countDigits(12345678));

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

const getFirstDigit = (number) => { // from the left
    return Number(String(number)[0]); 
};
/*
String(number)[0] → الحصول على أول رقم من السلسلة النصية.

مثال: "4567"[0] → '4' (لاحظ أنه يبقى كنص)
*/
console.log(getFirstDigit(87654321)); // Output: 8

const getLastDigit = (number) => { // from the right
    return number % 10;
};
console.log(getLastDigit(123456789)); // Output: 9

const getDigitAtPosition = (number, position) => {
    return Number(String(number)[position]);
};
console.log(getDigitAtPosition(123456789, 5)); // Output: 6

const setDigitAtPosition = (number, digit, position) => {
    return Number(String(number).substring(0, position) + digit + String(number).substring(position + 1));
};
console.log(setDigitAtPosition(12345, 8, 3)); // Output: 12385

const countMinDigit = (number) => {
    // تحويل الرقم إلى سلسلة نصية للتعامل مع الأرقام بشكل فردي
    const numStr = Math.abs(number).toString();
    
    // إيجاد الرقم الأصغر
    const minDigit = Math.min(...numStr.split('').map(Number));
    
    // حساب عدد مرات ظهور الرقم الأصغر
    const count = numStr.split('').filter((digit) => digit == minDigit).length;
    
    return count;
}

// مثال على الاستخدام:
console.log(countMinDigit(1020300000)); // ستعيد 4 لأن الرقم الأصغر (0) ظهر 4 مرات
/*
يتم تحويل العدد إلى سلسلة نصية باستخدام toString() بعد التأكد من أخذ القيمة المطلقة للعدد باستخدام Math.abs() لكي نتجاهل الإشارة السالبة.

نستخدم Math.min() لاستخراج الرقم الأصغر من الأرقام.

نقوم بتقسيم السلسلة النصية إلى مصفوفة من الأرقام باستخدام split('') ثم نقوم بتحويل كل عنصر إلى رقم باستخدام map(Number).

نعد عدد مرات ظهور الرقم الأصغر باستخدام filter() وحساب الطول (length) للمصفوفة الناتجة.


*/
const isSymmetric = (number) => {
    return number.toString() === number.toString().split('').reverse().join('');
};
console.log(isSymmetric(12321)); // Output: true

/*
 number.toString() → Converts the number to a string.

Example: 12321.toString() → "12321"

.split('') → Splits the string into an array of individual characters.

Example: "12321".split('') → ['1', '2', '3', '2', '1']

.reverse() → Reverses the order of the array elements.

Example: ['1', '2', '3', '2', '1'].reverse() → ['1', '2', '3', '2', '1']

.join('') → Joins the reversed array back into a string.

Example: ['1', '2', '3', '2', '1'].join('') → "12321" 
 */

const search = (num, d) => {
    
    return num.toString().split(d.toString()).length - 1;
};

console.log(search(123321, 3)); // الناتج: 2
console.log(search(55555, 5));  // الناتج: 5
console.log(search(102030, 0)); // الناتج: 3
