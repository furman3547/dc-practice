let a = [9,3,34,4,3]
let s=0;
console.log("before iteration")
a.forEach(add);
function add(n,i,array){
    array[i] =n*2;
}
    console.log("after iteration")
console.log(a);


a.filter(isOdd)
function isOdd(n){
    return n%2!=0;

}