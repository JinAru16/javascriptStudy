let btn = document.querySelector('#myBtn');

function event1() {
    console.log('Hi ChanUk');
}

function event2() {
    console.log('event listener working');
};

btn.addEventListener('click', event1);
btn.addEventListener('click', event2);

//이런식으로도 활용 가능. 함수 따로 안만들고 하나로 합쳐서 가능

btn.addEventListener('click', function () {
    console.log('server is listening');
});
//but removeEventListener에서는 이렇게 불가능.

// 이벤트를 지우고 싶다면
btn.removeEventListener('click', event2)

/*
만약에 btn.addEventListener('click', event1())
이런식으로 함수를 그대로 갖고오면
리턴값을 호출하게 되는데 event1은 리턴값이 없으니깐 undefined가
출력됨. 따라서 여기서는 함수의 이름만 가져와야 함.
 */