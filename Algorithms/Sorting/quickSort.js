/**
 * Title: Sort an Array using Quicksort
 * Brief: Divide and Conquer Approach
 * Avg time comp = O(nlogn), worst time = O(n^2)
 * Avg time is good hence preferred
 */

function quickSort(arr){
    if(arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length/2)];
    const less = [];
    const equal = [];
    const greater = [];

    for(const num of arr){
        if(num<pivot) less.push(num);
        else if(num === pivot) equal.push(num);
        else greater.unshift(num);
    }

    return [...quickSort(less), ...equal, ...quickSort(greater)];
}

let unSorted = [1,45,11,65,67,3,5,1,9,50];
let sorted = quickSort(unSorted);
console.log({unSorted,sorted});

