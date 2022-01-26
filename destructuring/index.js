// 구조분해
/*
const device = ['laptop', 'tablet', 'desktop', 'watch', 'TV', 'service', 'phone']

const [ macbook, ipad, iMac, applewatch, ...rest ] = device;

console.log(macbook);
console.log(ipad);
console.log(rest);



let apple = 'Jobs';
let ApPLe = 'Tim';

let temp = apple;
apple = ApPLe;
ApPLe = temp;

console.log(apple)
console.log(ApPLe)

*/


/* 
const macbook = device[0];
const ipad = device[1];
const iMac = device[2];
const applewatch = device[3];

*/



const macbook = {
    name : 'macbookpro16',
    price : '$3000',
    color : 'space gray',
    release : '2020',
    storage : '1TB',
}


const { name, color, ...rest } = macbook;
console.log(name);
console.log(rest);
