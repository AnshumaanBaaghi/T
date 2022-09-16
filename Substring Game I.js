function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
   let N = +input[0].trim()
   let str = input[1].trim()
   Substring(N,str)
  }
  let obj={
    a:1,
    e:1,
    i:1,
    o:1,
    u:1,
  }
  const Check=(bag)=>{
    for(let i=0;i<bag.length-1;i++){
        if(obj[bag[i]] && obj[bag[i+1]]){
            return true
        }
    }
    return false
  }
  const Substring=(N,str)=>{
    let count=0
    for(let i=0;i<str.length-1;i++){
        let bag=''
        for(let j=i;j<str.length;j++){
            bag+=str[j]
            if(Check(bag)){
                count++;
            }
        }
    }
    console.log(count);
  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`4
    cdea`);
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