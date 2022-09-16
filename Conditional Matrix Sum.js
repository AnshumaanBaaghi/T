function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
   let [R,C] = input[0].split(' ').map(Number)
   let line=1;
   let mat=[]
   for(let i=0;i<R;i++){
       let arr = input[line++].trim().split(' ').map(Number)
       mat.push(arr)
}
   Matrix(R,C,mat)
  }
  const Matrix=(R,C,mat)=>{
    let count=0;
    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
            if(mat[i][j]%3===0){
                count+=mat[i][j]
            }
        }
    }
    console.log(count);
  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`2 3
    3 1 8
    2 6 0`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }