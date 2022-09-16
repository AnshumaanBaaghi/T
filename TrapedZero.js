function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
   let [R,C] = input[0].trim().split(' ').map(Number)
   let matrix=[]
   let line=1;
   for(let i=0;i<R;i++){
       let arr = input[line++].trim().split(' ').map(Number)
       matrix.push(arr)
    }
   Traped(R,C,matrix)
  }
  const Check=(R,C,mat)=>{
    if(C<0 || R<0 || R>=mat.length || C>=mat[0].length){
        return false
    }
    if((R-1)>=0 && (R-1)<mat.length&&mat[R-1][C] && mat[R-1][C]===0){
        return false
    }
    if(((R>=0 && R<mat.length)&&mat[R][C-1]) && (mat[R][C-1]===0)){
        return false
    }
    if((((R+1)>=0 && (R+1)<mat.length)&&mat[R+1][C]) && (mat[R+1][C]===0)){
        return false
    }
    if(((R>=0 && R<mat.length)&&mat[R][C+1]) && (mat[R][C+1]===0)){
        return false
    }
    return true
  }
  const Traped=(R,C,matrix)=>{
        let count=0;
        for(let i=0;i<R;i++){
            for(let j=0;j<C;j++){
                if(matrix[i][j]===0 && Check(i,j,matrix)){
                    count++;
                }
            }
        }
        console.log(count);
  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`5 6
    1 1 1 1 0 0 
    0 1 0 1 1 0
    1 0 1 0 1 1
    1 0 1 0 1 0
    0 0 1 1 0 1`);
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