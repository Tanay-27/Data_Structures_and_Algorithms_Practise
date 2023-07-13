/**
 * Title: Count Pairs with given sum
 * Breif: We find the frequency of integers and add it to count when sum-arr[i] value is available.
 */

let arr = [ 1, 5, 7, -1, 5 ];

function findCountOfPairsHavingSum(arr,sum){
    let count = 0;
    let map = new Map();
    // by using map in the for loop and doing count += freq we save time of going over loop once to create the dictionary

    for(let i=0;i<arr.length;i++){
        if(map.has(sum-arr[i])) count += map.get(sum-arr[i]);
        if(map.has(arr[i])) map.set(arr[i],map.get(arr[i]) + 1);
        else map.set(arr[i],1);
    }
    return count;
}

let sum = 6
console.log('Array => ',arr);
console.log(`Count having sum ${sum} is `,findCountOfPairsHavingSum(arr,sum));