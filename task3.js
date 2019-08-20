//Task 3
console.log('\n');
console.log('Task 3');
const randomNumers = function(from, to) {
    return (Math.random() * (to - from) + from).toFixed();
}

function createArray(some){
    let numArr = [];
    for(let i = 0; i < some; i++) {
        numArr[i] = parseInt(randomNumers(0, 10))
    }
    return numArr;
}
const some = 50;
const newArray = createArray(some);
console.log('Our created random array - ', newArray);


function uniNum (arr) {
    let result = [];
    for (let str of arr) {
        if(!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
console.log('All unique elements - ', uniNum(newArray));

let unique = newArray.filter((item, i, ar) => ar.indexOf(item) === i); //Знайшов два методи для отримання унікальних елементів
console.log('All unique elements - ', unique);

