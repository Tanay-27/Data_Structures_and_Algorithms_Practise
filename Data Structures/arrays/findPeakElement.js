/**
 * Title: Find a peak element which is not smaller than its meighbours
 */

let arr = new Array(10);
for(let i=0;i<arr.length;i++) arr[i] = Math.floor(Math.random() * 25 +1);

Array.prototype.findPeak = function (){
    let arr = this;
    for(let i=0;i<arr.length;i++) if((arr[i-1] ? arr[i-1]<arr[i] : 1) && (arr[i+1] ? arr[i+1]<arr[i] : 1)) return arr[i];
    return -1;
}

console.log('Array=> ',arr);
console.log('Peak element in arr is: ',arr.findPeak());