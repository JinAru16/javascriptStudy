//for in 구문 연습하기

/* for(변수 in 객체){
    동작부분
    }
 */

let appleComputer = {
    name : 'MacBookPro16',
    bornYear : '2019',
    designed : 'california',
    cost : '$3000'
}

for (let k in appleComputer){
    console.log(k);
}