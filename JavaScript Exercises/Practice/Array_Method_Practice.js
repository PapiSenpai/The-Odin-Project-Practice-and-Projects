/* 
This is made to practice array methods
syntax:

    array.filter((element, index, array) => condition)
    array.map((element, index, array) => transformation)
    array.reduce((accumulator, currentElement, index, array) => newAccumulator, initialValue)

Excercises from: https://javascript.info/array-methods#tasks
*/



function sumOfTripledEvens(arr){
    let sum = [];
    // First gather all the even numbers
    arr = arr.filter( (elem) => {
        return elem % 2 === 0;
    });
    // Then multiply all elements by 3
    arr = arr.map((elem) => {
        return elem * 3;
    });
    // Then sum it all up
    sum = arr.reduce((total, elem) => {
        return total + elem;
    }, 0); // The 0 initializes total
    return sum;
}

// This is another method of completing the problem
function sumOfTripledEvens2(arr){
    return arr
        .filter((elem) => elem % 2 == 0)
        .map((elem) => elem * 3)
        .reduce((total, elem) => total + elem);
};

arr = [1,2,4,5,6,7,8,9]; 
console.log(sumOfTripledEvens(arr));
console.log(sumOfTripledEvens2(arr));


function border_left_width(arr){
    return arr 
        .split('-')     // Splits words into seperate arrays until specified word/letter/character is reached
        .map((word, elem) => {  
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            return elem == 0 ? word : word[0].toUpperCase() + word.slice(1)
        })
        .join('');  // joins ['my', 'Long', 'Word'] into 'myLongWord'      
};

console.log(border_left_width("background-color"));


function filter_range(arr, a, b){
    // filter an array to contain elements that hold values > a or values === b
    return arr
        .filter((elem) => {
            return elem >= a || elem === b;
        });
};

console.log(filter_range(arr, 6, 5));

// Change the array in place instead of temporary
function filter_range_in_place(arr, a, b){
    // filter an array to contain elements that hold values > a or values === b
    arr = new_arr
        .filter((elem) => {
            return elem >= a || elem === b;
        });
    return new_arr;
};

arr = filter_range(arr, 6, 5);
console.log(arr);

