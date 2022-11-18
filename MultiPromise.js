let eat = true;
let play = true;
let sleep = true;
let eating = new Promise((resolve, reject)=>{
    if(eat)
    {
        resolve("I am eating");
    }
    else
    {
        reject("Not eat");
    }

});

let playing = new Promise((resolve, reject)=>{
    if(play)
    {
        resolve("I am playing");
    }
    else
    {
        reject("Not play");
    }

});


let sleeping = new Promise((resolve, reject)=>{
    if(sleep)
    {
        resolve("I am sleeping");
    }
    else
    {
        reject("Not sleep");
    }

});

eating.then(
    (resolve) => {
        console.log(resolve)
        playing.then(
            (resolve) => {
                console.log(resolve)
                sleeping.then(
                    (resolve) => console.log(resolve),
                    (reject) => console.log(reject)
                );
            },
            (reject) => console.log(reject)
        );
    },
    (reject) => console.log(reject)
);


