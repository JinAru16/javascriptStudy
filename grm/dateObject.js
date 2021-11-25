// date

let myDate = new Date();

console.log(myDate);

// Date(특정한 값) ==> 우리가 원하는 날짜를 생성할 수 있음.
/* ex) new Date(1000); = > 1970년 1월 1일 00:00:00 UTC + 1000 밀리초!!
근데 밀리초는 너무 작으니깐 보통 문자열을 넣어줌
ex) new Date('문자열'); 이런식으로

 */

// let myDate1 = new Date('YYYY-MM-DD');
let myDate1 = new Date('2021-10-01');

// 시간까지 추가하고 싶다면
// let myDate1 = new Date('YYYY-MM-DDThh:mm:ss');
// ==> 'T'를 넣어주는게 포인트
let myDate2 = new Date('2021-10-01T21:45:45');

console.log(myDate2);
console.log(myDate1);

// new Date(YYYY, MM, DD, hh, mm, ss, ms);로 전달하는 방법도 있음
// YYYY, DD는 필수고 나머지는 생략가능
// 특이사항은 MM의 경우 0부터 11까지임. 그러니깐 4라고 4월이 아니라 5월임.

let myDate3 = new Date(2018, 4, 18, 19, 11);
console.log(myDate3);
//Fri May 18 2018 19:11:00 GMT+0900 (한국 표준시) ==> may로 뜨는걸 확인 가능.


// getTime()
// 1970. 01. 01 00:00:00 UTC부터 몇 밀리초가 지났는지 출력해줌

let myDate4 = new Date(2019, 4, 15, 11, 16);

console.log(myDate4.getFullYear());
console.log((myDate4.getMonth()));
console.log(myDate4.getDate());

/*
지금 이 순간..!?
Date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환합니다. 이렇게 하면 새로운 객체를 만들지 않아도 바로 현 시점의 날짜 값을 얻어낼 수 있는 것이죠!

let myDate = new Date();

console.log(Date.now() === myDate.getTime()); // true
위 코드를 보시면 알 수 있듯이 새로운 객체를 만들어서 getTime 메소드를 호출한 값과 일치한다는 사실을 확인할 수 있는데요.
새로운 객체를 만들지 않는다는 점은 일단 우리 눈에 코드 한 줄을 줄일 수 있다는 이점도 있고, 눈에는 드러나지 않지만 코드가 실행될 때 메모리의 부담을 줄여주기도 합니다.
그래서 특정한 시점이 아니라 단순히 순간순간 그 때 당시 시간 값이 필요한 경우에는 Date.now() 메소드를 활용하는 것이 코드의 가독성 뿐만아니라 성능적인 측면에서도 좀 더 유리합니다.
 */

/*
Date객체의 형변환
let myDate = new Date(2017, 4, 18);

console.log(typeof myDate); // object
console.log(String(myDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(myDate)); // 1495033200000
console.log(Boolean(myDate)); // true
이 코드를 천천히 살펴봅시다. 세번째 줄에서 Date 객체의 자료형을 확인해보니 'object', 즉 객체라는 것을 확인할 수 있는데요.
Date 객체를 boolean 타입으로 변환하면 true가 되고, string 타입으로 변환하면 날짜값이 그대로 문자열로 변환이 됩니다.

우리가 눈여겨 볼 부분은 number 타입으로 변환할 경우입니다.
이 값은 아무 의미없는 단순한 숫자값이 아니라 getTime() 메소드를 활용한 것과 똑같은 수치의 타임스탬프 값 입니다.

let myDate = new Date(2017, 4, 18);

console.log(myDate.getTime() === Number(myDate)); // true
이것은 다시 말해 Date 객체끼리 바로 사칙 연산도 충분히 가능하다는 뜻이기도 한데요.

let myDate1 = new Date(2017, 4, 18);
let myDate2 = new Date(2017, 4, 19);

let timeDiff = myDate2 - myDate1;
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60) // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)
이렇게 하니깐 두 Date객체 사이의 시간차이를 어렵지 않게 확인할 수 있죠?
 */

