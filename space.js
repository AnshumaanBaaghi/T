let arr=[1,2,3445,645,6,54]
let N = 100
// O(N)
let count=1;
    for(let i=0;i<N;i++){
        console.log("before",i);
        for(let j=0;j<N;j++){
            i=j
            console.log(count++);
        }
        console.log("after",i);
    }
    // N*N/2 = (N*N)*(1/2
    // let N=10000/2 O((N^2))