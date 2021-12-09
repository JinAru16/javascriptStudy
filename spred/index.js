const product = (name, color, storage) => {
    console.log(`제가 사용하는 노트북은 ${name}입니다`);
    console.log(`색깔은 ${color}이구요`);
    console.log(`용량은 ${storage}입니다.`);
}

const apple = ['MackBookPro16', 'space gray', 'ssd 512Gb']
product(...apple);

console.log(...apple[1])
