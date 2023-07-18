/**
 * Title: Merge Sort
 * Brief: We recursively break the array untill there's single element left, then we start merging process where we sort individual subarrays in asceding/descending order.
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */

function mergeSort(arr,start,end){
    if(start>=end) return;
    else{
        let mid = start + parseInt((end-start)/2);
        mergeSort(arr,start,mid);
        mergeSort(arr,mid+1,end);
        merge(arr,start,mid,end)
    }
}

function merge(arr,start,mid,end){

    // insert data into left and right arrays
    let leftArray = arr.slice(start,mid);
    let rightArray = arr.slice(mid,end+1); 
    let len1 = mid - start + 1;
    let len2 = end - mid;
    
    leftArray = new Array(len1);
    rightArray = new Array(len2);
    
    for(let i=0;i<len1;i++) leftArray[i] = arr[start+i];
    for(let i=0;i<len2;i++) rightArray[i] = arr[mid + 1 + i];
    // if(start==0) console.log({start,mid,end,rightArray,slice: arr[6]});


    // start changing array in order
    let n1=0,n2=0,idx=start;
    // if(idx==0)console.log({leftArray,rightArray});
    while(n1<leftArray.length && n2<rightArray.length){
        if(idx==6) console.log({leftArray,rightArray,n1,n2});
        if(leftArray[n1]<=rightArray[n2]){
            arr[idx] = leftArray[n1];
            n1++;
        }else{
            arr[idx] = rightArray[n2];
            n2++;
        }
        idx++;
    }
    // fill up the rest of data in case one of the arrays is left
    while(n1<leftArray.length){
        arr[idx] = leftArray[n1];
        idx++;
        n1++;
    }

    while(n2<rightArray.length){
        arr[idx] = rightArray[n2];
        idx++;
        n2++;
    }
}

let arr = [1,4,2,6,11,65,3,76,143,8];
console.log('Before: ',arr);
mergeSort(arr,0,arr.length);
console.log('After: ',arr);
