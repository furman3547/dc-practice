// Given two integer arrays, find the numbers that is found in both arrays. the resulting output would be the array with all those numbers
// Example:
// a = [30,2,3,5,90]
// b = [9,2,6,5,100]
// output c = [2,5]
// take two arrays, a and b and create another array with the numbers that are the same from each array
let a=[] //[30,2,3,5,90]
let b=[] //[9,2,6,5,100]

let c=[] //new array with the resulting output



function numFind(a,b){//dont forget the parameters
    for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if(a[i]==b[j]){
            c.push(a[i])
        }
    }


      

        }
        console.log(c)
    }

numFind([20,30,40,50],[2,2,2,50])



