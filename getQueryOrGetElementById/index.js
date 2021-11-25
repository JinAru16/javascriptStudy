// id로 태그 선택하기
const myTag = document.getElementById('myNumber')
console.log(myTag)

// index로 태그 선택하기.
/* id는 고유값이라 하나의 태그 선택에는 유리, but 여러 요소들을 동시 선택할때는 class를 사용함 */
const colors = document.getElementsByClassName('color-btn')

console.log(colors[1]);

// css 선택자 태그 선택하기
const cssTag = document.querySelector('#myNumber');
console.log(cssTag)
// css class를 선택
const cssClassTag = document.querySelector(('.color-btn'))
console.log(cssClassTag) // 그냥 color-btn을 가진 클래스 중에서 가장 첫번째 아이가 출력이 됨.

// class를 다중으로 선택하고 싶다면
const cssClassTags = document.querySelectorAll('.color-btn')
console.log(cssClassTags)

