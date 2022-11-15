// const func=(message)=>{
//     console.log(message);
// }
// const func1 = (message)=>{
//     console.log(message);
// }
// export const server_name = 'localhost';

// export {func, func1};

class red
{
    
    printRED = ()=>{
        console.log("Hello from RED class");
    }
}

class Car extends red
{
    constructor(color)
    {
        super();
        this.COLOR = color;
    }
    // COLOR = "red";
    
    printColor = (color)=>{
        console.log(this.COLOR);
    }
}
export  {Car};