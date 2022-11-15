let oldArray = [1,2,3,4,5];
console.log(oldArray);
let newArray = [10,11,12, ...oldArray];
console.log(newArray);
let oldObject ={
    id:'1',
    name:'alaa'
}
console.log(oldObject);
let newObject = {...oldObject,name:'ahmed'};
console.log(newObject);
let sum = (...args)=>{
    return args.filter(item => item ===1);

}
console.log(sum(2,3,5));
