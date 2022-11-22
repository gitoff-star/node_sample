const {readFileSync,readFile,writeFileSync,writeFile}= require('fs');
//Sysc
//reading data from file 
const file1= readFileSync('./Content/file1.txt');
const file2= readFileSync('./Content/file2.txt');

console.log(file1+file2);


//Writing into the file 

writeFileSync('./Content/result.txt',`files data is : ${file1} , ${file2}`,{
    flag:'a'
});
let aysncFile;
// Async
readFile('./Content/file3.txt','utf-8',(err,res)=>{
    if(err){
    console.log("error: => "+err)
    return
        }
        aysncFile = res;
     console.log(res)
     writeFile('./Content/test.txt','no data found',(err,res)=>{
        if(err){
            console.log('error sync => ',err);
            return;
        }
        console.log('result sync => ',res);
     })
})

// console.log(aysncFile);


