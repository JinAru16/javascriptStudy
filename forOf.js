// for of 반복문

let members = ['아론렘지', '헤리케인', '무사시소코', '스콜스', '드록바', '포그바',];

/*  for(변수 of 배열) {
       동작부분;
     }
     변수 부분에는 배열내에 있는 요소, 즉 element가 할당이 됨

     인덱스 보다는 value값을 이용하는 방법

     for in 문은 배열보다는 객체에 적합하기 때문에 배열에서는 권장 x

     if 배열에서 인덱스 값을 활용하고 싶다면 for문을 사용하는걸 권장함.
 */

for (let element of members) {
    console.log(element);
}