function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
   let N = +input[0].trim()
   let arr = input[1].trim().split(' ').map(Number)
   divya(N,arr)
  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`1
    3 3
    aba
    xyz
    bdr
    axbaydb
    `);
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