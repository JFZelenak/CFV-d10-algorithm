const randomArray = [1, 3, 5, 4, 5, 9, 6, 1, 2, 6, 5, 4, 4, 9, 7];
let sortedArray = [];

for (var lowestNumber = 1; lowestNumber < 10; lowestNumber++) {
    for (var counter = 0; counter < randomArray.length; counter++) {
        if (randomArray[counter] === lowestNumber) {
            sortedArray.push(randomArray[counter]);
        }
    }
}


function arraySum(someArray) {
    var newSum = 0;
    for (var i = 0; i < someArray.length; i++) {
        newSum = newSum + someArray[i];
    }
    console.log(`the sum of all values in the array is ${newSum}`)
}

console.log(randomArray);
arraySum(randomArray);
console.log(sortedArray);
arraySum(sortedArray);