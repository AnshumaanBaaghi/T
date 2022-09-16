function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [N, q] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let line = 2;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < q; i++) {
    let qs = input[line++].trim().split(" ").map(Number);
    let a = qs[0];
    let b = qs[1];
    let c = qs[2];
    if (a == 1) {
      sum = sum - arr[b - 1] + c;
      arr[b - 1] =c;
    } else if(a==2){
      let s = 0,e = N - 1;
      while (s <= e) {
        arr[s] = b;
        arr[e] = b;
        s++;
        e--;
      }
      sum = b * arr.length;
    }
    console.log(sum);
  }
}
if (process.env.USERNAME === "ganum") {
  runProgram(`5 5
    1 2 3 4 5
    1 1 5
    2 10
    1 5 11
    1 4 1
    2 1
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
    process.exit(0);
  });
}
