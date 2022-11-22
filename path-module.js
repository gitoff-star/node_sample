const path= require('path');

//join path 
basicInfo=path.join('/Content','file.txt');
console.log(basicInfo);

// get file name 
filename= path.basename(basicInfo);
console.log('filename : '+filename);

//get absolute path

const abs=path.resolve(__dirname,'Content','file.txt');
console.log(abs);