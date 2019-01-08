const fs=require('fs');
if(!fs.exists('views')){
    fs.mkdir('views',(err)=>{
        if(err) return err;
        fs.writeFile('./views/new.html','hello prabhat this is file inside asynchornous dir',(err)=>{
            if(err) return err;
            console.log("successfully saved file inside views");
        })
    })
}