/**
 * Title : Selection Sort
 * Comparision Based Sorting Algorithm, It works by dividing the input array into 2 portions: sorted and unsorted algorithm. The algorithm repeatedly finds the minimum element from the unsorted portion and swaps it with the emenet at the begining of the unsorted portion, expanding the sorted portion.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * Use: Same complexity as that of bubble sort, will take same number of steps even if array is sorted, Prefered over bubble sort.
 */
let arr = [2,4,1,8,3,6,4]
let minIdx;
let temp;
for(let i=0;i<arr.length;i++){
    // assume first element of the unsorted element is min
    minIdx = i;

    for(let j=i+1;j<arr.length;j++){
        // if min element is found, update the min index
        if(arr[j]<arr[minIdx]) minIdx = j;
    }

    // swap elements
    temp = arr[minIdx]
    arr[minIdx] = arr[i];
    arr[i] = temp;
}

console.log("sorted array => ",arr);