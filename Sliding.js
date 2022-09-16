let N = 100000;
let count=1;
let l=0;
let r = N-1;
let arr= new Array(N).fill(1)
// console.log('arr:', arr)
while(l<r){
    console.log(count++);
    while(arr[l]===0){
        console.log(count++);
        l++
    }
    while(arr[r]===1){
        console.log(count++);
        r--;
    }
}