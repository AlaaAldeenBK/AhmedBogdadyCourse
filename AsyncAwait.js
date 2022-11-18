let eat = false;
let play = true;
let sleep = true;
const EATING = ()=>{
    return new Promise((resolve, reject)=>{
        if(eat)
        {
            resolve("I am eating");
        }
        else
        {
            reject("Not eat");
        }
    
    });
}

const PLAYING = ()=>{
    return new Promise((resolve, reject)=>{
        if(play)
        {
            resolve("I am playing");
        }
        else
        {
            reject("Not play");
        }
    
    });
}


const SLEEPING = ()=>{
    return new Promise((resolve, reject)=>{
        if(sleep)
        {
            resolve("I am sleeping");
        }
        else
        {
            reject("Not sleep");
        }
    
    });

}


const run =async ()=>{
try
{
const eatMessage = await EATING();
console.log(eatMessage);
const playMessage = await PLAYING();
console.log(playMessage);
const sleepMessage = await SLEEPING();
console.log(sleepMessage);  
}
catch(error)
{
    console.log(error)
}
}
run()