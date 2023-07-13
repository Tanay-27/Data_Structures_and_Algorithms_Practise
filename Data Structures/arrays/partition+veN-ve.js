/**
 * Title: Move all negative integers to one side of the array
 * Breif: We wil be implementing 2 approaches, partition process of quicksort and 2 pointer approach.
 * In essence these are very similar. But doing both so we get an idea.
 */

let arr = [1,-3,-2,-5,2,-4,3,9,-5];

function partitionQSort(arr){
    let j=0,temp;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            if(i!=j){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
    return arr;
}

function twoPointer(arr){
    let p1 = 0,temp;
    let p2 = arr.length-1;
    while(p1<p2){
        if(arr[p1]<0 && arr[p2]>=0){
            p1++;
            p2--;
        }else if(arr[p1]>=0 && arr[p2]<0){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            p1++;
            p2--;
        }else if(arr[p1]<0) p1++;
        else p2--;
    }
    return arr;
}

console.log('Original Array => ',arr);
console.log('Partition => ',partitionQSort(arr));
console.log('Two Pointer => ',twoPointer(arr));