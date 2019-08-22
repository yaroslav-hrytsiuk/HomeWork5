//Task 2
console.log('\n');
console.log('Task 2')
const randomNum = function (from, to) {
    return (Math.random() * (to - from) + from).toFixed();
}

function createArr(numOfNum) {
    let numArr = [];
    for (let i = 0; i < numOfNum; i++) {
        numArr[i] = parseInt(randomNum(-100, 100))
    }
    return numArr;
}
const numOfNum = 100, // Кількість елементів для згенерованого масиву 
    arrayNew = createArr(numOfNum);

console.log('Our created random array - ', arrayNew);

const positiveNum = arrayNew
    .filter(item => item >= 0),
    negativeNum = arrayNew
    .filter(item => item < 0);


const minNum = Math.min(...arrayNew.map(item => item)),
    maxNum = Math.max(...arrayNew.filter(item => item));

let min = arrayNew[0];
arrayNew.forEach(element => {
    if (element < min) {
        min = element;
    }
})

let max = arrayNew[arrayNew.length - 1];
arrayNew.forEach(element => {
    if (element > max) {
        max = element;
    }
})

console.log('All positive elements from our created array - ', positiveNum.length);
console.log('All negative elements from our created array - ', negativeNum.length);
console.log('Min element - ', minNum);
console.log('Max element - ', maxNum);
console.log('Min element - ', min);
console.log('Max element - ', max);
