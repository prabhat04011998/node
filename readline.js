var readline=require('readline');
var util=require('util');
var RL=readline.createInterface(process.stdin, process.stdout);

RL.question('what is your name ',(name)=>{
    
    RL.setPrompt(`${name} how old are you`);
    RL.prompt();
    RL.on('line ',(age)=>{
        if (age<19){
            util.log(`${name.trim()} you are a teenager`);
            RL.close();

        }
        else{
            util.log(`${name} You are no more teenager`);
            RL.close();
        }
    });
    
});