//Task 2
console.log('\n');
console.log('Task 2')
const randomNum = function(from, to) {
    return (Math.random() * (to - from) + from).toFixed();
}

function createArr(numOfNum){
    let numArr = [];
    for(let i = 0; i < numOfNum; i++) {
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
      maxNum = Math.max(...arrayNew.filter(item => item)); // більше варіацій, як привязати методи перебирання прив'язати до максимальний і мінімальних значень я не знайшов



console.log('All positive elements from our created array - ', positiveNum);
console.log('All negative elements from our created array - ', negativeNum);
console.log('Min element - ', minNum);
console.log('Max element - ', maxNum);
