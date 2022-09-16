function runProgram(input) {
    // Write code here
   let arr = input.trim().split(" ")
   Unique(arr)
  }
  const Unique=(arr)=>{
    let obj={}
    let ans=''
    for(let j=0;j<arr.length;j++){
        let str = arr[j]
        for(let i=0;i<str.length;i++){
            if(obj[str[i]]){
                obj[str[i]]++;
            }
            else{
                obj[str[i]]=1
                ans+=str[i]
                
            }
        }
    }
    
    console.log(ans);
  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`aaaabbbbbcccccdddd`);
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