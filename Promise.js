let mpromise = new Promise((resolve, reject)=>
{
    const x =0;
    if(x === 0)
    {
        resolve("This ok");
    }
    else
    {
        reject("This Failed");
    }
}).then((resolve)=>{
    console.log(resolve)}, 
    (reject) =>{
    console.log(reject);
})