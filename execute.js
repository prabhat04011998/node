const execute=require('child_process').exec;
execute('ls -la',(err,stdout)=>{
    if(err){
        return err;

    }

    console.log(stdout);
    //execute('pwd',(err,stdout)=>{
        //if(err){
        //    return err;
        //}
        //console.log(stdout);
    //})
})