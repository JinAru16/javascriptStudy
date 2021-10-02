// array의 길이 표현법

// 참고로 배열에선 for in문 쓰지 마셈

let members = ['아론렘지', '헤리케인', '무사시소코', '스콜스', '드록바', '포그바',];

console.log(members.length);
console.log(members['length']);
console.log(members[members.length - 1]);


// 배열을 수정, 추가하는 방법

// 배열에 추가하는 방법
members[members.length] = '손흥민'
console.log(members)

// 수정하는법
members[1] = '웨인 루니'
console.log(members)


// 삭제법
// 객체에서는 delete를 쓰면 됐는데 배열에서는 안됨.
delete members[1];
console.log(members);
//  ->(7)['아론렘지', empty, '무사시소코', '스콜스', '드록바', '포그바', '손흥민']
// 여전히 배열 길이도 7이고 값만 빠지고 여전히 empty로 리스트에 공간은 차지중





