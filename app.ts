
let arr:number[]=[1,2,3,4,45];
const sum =(array:number[])=>{
return  array.reduce((acc,it)=>acc+it,0)
}

console.log(sum(arr))