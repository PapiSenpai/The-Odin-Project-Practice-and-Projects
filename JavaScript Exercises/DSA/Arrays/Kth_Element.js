// look into a better more reproducable method of solving

function kthSmallest(arr, k) {
    let max_element = arr[0];
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i] > max_element) {
            max_element = arr[i];
        }
    }

    // Create an array to store the frequency of each element in the input array
    let freq = new Array(max_element + 1).fill(0);
    for (let i = 0; i < n; i++) {
        freq[arr[i]]++;
    }

    // Keep track of the cumulative frequency of elements in the input array
    let count = 0;
    for (let i = 0; i <= max_element; i++) {
        if (freq[i] != 0) {
            count += freq[i];
            if (count >= k) {
                // If we have seen k or more elements, return the current element
                return i;
            }
        }
    }
    return -1;
}

let arr = [11,22,332,44,555];

console.log(kthSmallest(arr, 4));