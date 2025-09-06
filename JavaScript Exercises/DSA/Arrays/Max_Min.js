/*
Max, Min Methods

*/

let arr = [3, 5, 2, 8];

// Using Math method (O(?) time)
let max = Math.max(...arr);
let min = Math.min(...arr);

// O(n) time method
let i=0;
let min = arr[0];
let max = arr[0];
let size = arr.length;
for(; i < size; i++){
    // finds min
    if(min > arr[i]){
        min = arr[i];
    } 
    // finds max
    if(max < arr[i]){
        max = arr[i];
    }
};

return [min, max];