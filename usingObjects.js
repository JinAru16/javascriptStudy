//객체 사용해보기

let macbook = {
    name : 'KimMacbook',
    bornYear: 2018,
    parant : 'Apple',
    retail : {
        shoppingmallName : '쿠팡',
        shoppingmallType : 'internetMall'
    }
};

console.log(macbook);

macbook.designed = 'California';
console.log(macbook.designed);

console.log(macbook.bornYear);
delete macbook.bornYear;
console.log(macbook);

// property 존재여부 확인하는 방법
// 1번은 undefined
console.log(macbook.parant !== undefined);

//2번은 in
console.log('retail' in macbook);








