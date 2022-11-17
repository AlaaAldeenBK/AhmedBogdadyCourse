// const lowerCase = (str) =>{
//     return str.toLowerCase();
// }

// // console.log(lowerCase("HELLO"));

// const transform = (word, fn)=>
// {
// return fn(word)
// }

// transform("HELLO", lowerCase)

// console.log(transform("HELLO", lowerCase));


const sayHi = (welcome)=>{
    
    return (name)=>{
        console.log(welcome," ",name)
    }
}
const say = sayHi("Welcome");
console.log(say("Alaa"));
// console.log(sayHi("Welcome"));