// 객체 생성해서 객체내에서 함수 만들기
/*
객체 내 메소드는 method: function(key, value, x, y, z ,,,,) {
수행부분 내용
}, 이렇게 작성함

method간에는 ','로 꼭 구분해줘야하 함.
 */

const myVoca = {
    addVoca: function(key, value) {
        myVoca[key] = value;
    },
    deleteVoca: function(key) {

        delete myVoca[key];
    },
    printVoca: function(key) {
        console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`);
    }
}

myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');