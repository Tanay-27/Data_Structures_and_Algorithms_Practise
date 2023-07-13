/**
 * Title: Find duplicates in an array in Linear Time and constant space
 * Brief: Use array as a hashmap. That is, since n elements are present having values 0=> n-1. So each value can in turn be used as index.
 * To signify we have read this index(value) before, get change sing of the value.
 * Next time we reach same value (ie index) that has negative value, we know that the number is 
 */

let arr = [1,3,2,4,1,2,3];

function findDuplicates(arr){
    let duplicates = new Set;
    for(let i=0;i<arr.length;i++){
        let idx = Math.abs(arr[i]);
        if(arr[idx]>0) arr[idx] = -arr[idx];
        else duplicates.add(idx);
    }
    return Array.from(duplicates);
}

console.log('Array => ',arr);
console.log('Duplicates are => ',findDuplicates(arr));

