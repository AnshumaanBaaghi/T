function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
   let tc = +input[0].trim()
   let line=1;
   for(let i=0;i<tc;i++){
       let [n,x,y] = input[line++].trim().split(' ').map(Number)
       let arr = input[line++].trim().split(' ').map(Number)
       console.log(Smart(n,x,y,arr));
   }
  }
  const Smart=(n,x,y,arr)=>{
    let original=0;
    for(let i=0;i<n;i++){
        original+=arr[i]
        if(arr[i]>y){
            arr[i] = arr[i]-y
        }
        else{
            arr[i]=0;
        }
    }
    let cost=x;
    for(let i=0;i<n;i++){
        cost+=arr[i]
      }
      if(cost<original){
        return 'YES'
      }
      else{
        return "NO"
      }
  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`3
    4 30 10
    15 8 22 6
    4 40 10
    15 8 22 6
    4 34 10
    15 8 22 6`);
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