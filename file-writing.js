const fs=require('fs');
fs.writeFile('data.html','hello prabhat \n\n','UTF-8',(err)=>{
    if(err) return err;
    console.log("successfully saved");
});

fs.appendFile('data.html','appended data 2 ','UTF-8',(err)=>{
    if(err) return err;
    console.log("successfully saved after append");
});