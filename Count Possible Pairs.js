function runProgram(input) {
    // Write code here
   let N = +input.trim()
   for(let i=1;i<=N;i++){
    ai()
   }
  }
  function ai(){

  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`10`);
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