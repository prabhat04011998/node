const fs=require('fs');

try{
    //fs.rmdirSync('./newdir');
    fs.unlinkSync('./newdir/newfile.js');

}
catch(err){
    console.log(err);

}