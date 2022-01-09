const numbers = [1, 3, 5, 7, 9, 11]

const someNumbers = numbers.some((el, i) => el > 4)
console.log(someNumbers)

const everyNumbers = numbers.every((el, i) => el < 5)
console.log(everyNumbers)