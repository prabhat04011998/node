const axios=require('axios');
let username = 'prabhat04011998';
axios.get('https://api.github.com/users/'+username).then((res)=>{
    console.log(res.data);
    // console.log(res.data.followers);
}).catch((err)=>{
    console.log(err);
})