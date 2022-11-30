//default parameters

function add(x,y=10){
    const c=x+y;
    console.log(c)
}
add(3);

//spred/rest

const a = [1,2,3,4]
const b=[10,20,30]
const c=[...a,...b]//writing ... and then a puts all values into here, alongside ...b all the b values

console.log(c);//NEW ARRAY CREATED FROM A + B 
const x="Welcome";
console.log(...x)
//output is W e l c o m e spread out over the length of the array. run it yourself!

const car ={
    model : "Toyota",
    color: "Red"
}
const vehicle= {
    type: "car"

}
const z={...car,...vehicle}
//output is: model: 'toyota', color: 'Red', type: 'Car';

//destructuring parameters
const p=[10,2,3,0]//length is 0,1,2,3 -- its length is 4
const [r,s] = p;
console.log(r)//output is 10 - it lines up!!! 

