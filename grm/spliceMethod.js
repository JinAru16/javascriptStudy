let members = [
    '아론렘지',
    '헤리케인',
    '무사시소코',
    '스콜스',
    '드록바',
    '포그바',
];

// splice(startIndex, deleteCount, addItem)
// 지울 인덱스를 선택해서 어디까지 지울지를 선택하는거임
// addItem은 지운 자리에 추가할 애들을 적는거임.


// 1번 인덱스부터 3번인덱스까지 지울거임
members.splice(1, 0, '피케', '아게로');
console.log(members);
