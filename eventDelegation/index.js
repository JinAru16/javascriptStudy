/*
쉽게말해 버블링을 이용하는 방법.
자식노드에 어떤 event가 발생하는걸 하나하나 등록하지 않고
부모노드 하나를 등록하여서 event가 동작하게 하는 방법
 */
const list = document.querySelector('#list');
/*
for (let item of list.children) {
    item.addEventListener('click', function(e) {
        e.target.classList.toggle('done');
    });
};

이렇게 list.children으로 item들을 다루고 있는데 이렇게 하면
const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);
밑에 새로운 요소를 추가를 하면 이 추가된 요소에는 toggle이 먹히지 않게 됨.

따라서 매번 새로운 요소 추가 할 때 마다 eventHandler를 새로 등록해야 하는데

-> eventBubble로 해결하자

li.addEventListener('click', function(e) {
  e.stopPropagation();
});

 */

list.addEventListener('click', function(e) {
    if (e.target.classList.contains('item')) {
        e.target.classList.toggle('done');
    };
}); // 이런식으로 부모요소로 자식요소를 컨트롤 하는걸 이벤트 위임이라고 한다
/*
if문이 동작하는 원리
지금 우리는 class="item"의 부모요소인  id = "list"을 만지는 중.
그래서  contains('item')이 없으면 버블링이 일어나서 부모요소인 id='list'를 건들이게 됨.
따라서 list를 건들이면 밑에 클래스들 다 작동되어서 토글이 일어남.
그래서 클릭한 그 부분만 움직이고 싶어서 if문에 item contain을 넣는거임.

 */



const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);


// 이렇게 하면 자식노드를 직접 컨트롤 하지 않고도 부모노드 하나 컨트롤 하는걸로 자식노드는 물론
// 추가되는 자식노드들에게도 따로 코딩 없이 컨트롤 가능
