// const arr1 = [1,2,3,4,5,6,7,8,9]
// const arr2 = arr1.filter(item => item === 12);
// console.log(arr1);
// console.log(arr2);

// const arr1 = [1,2,3,]
// const arr2 = arr1.reduce((total, current) =>{
//     return total + current;
// },0);

// const arr1 = ['a', 'b', 'c']
// const arr2 = arr1.reduce((total, current) =>{
//     return total + current;
// });

// const arr1 = [1,2,3,4,5,6,7,8,9]
// const arr2 = arr1.find(item => item >3) // return first value 

const arr1 = [5,3,1,6,2,0,11,10,9];
const arr2 = arr1.sort((a,b) =>{

    if(a<b)
    {
        return 1
    }
    else
    {
        return -1
    }

} );
console.log(arr1);
console.log(arr2);