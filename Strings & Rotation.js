function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
   let original = input[0].trim()
   let rotated = input[1].trim()
   console.log(Rotation(original,rotated));
  }
  const Rotation=(original,rotated)=>{
      let str1=''
    for(let i=0;i<original.length-1;i++){
        str1+=original[i]
        let str2=''
        for(let j=i+1;j<original.length;j++){
            str2+=original[j]
        }
        if((str2+str1)===rotated){
            return "Yes"
        }
    }
    return 'No'
  }
  if (process.env.USERNAME=== "ganum") {
    runProgram(`bucket
    buckte`);
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
