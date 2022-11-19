function addnumbers(a,b){
    let c = a + b;
console.log(c)
}
function simplecalculator(a,b,o){
    if(o =='+' || o== 'plus' || ){
        let c = a + b 
        console.log(c);

    }
    else if(o== '-'){
        let c = a-b;
        console.log(c);
    }
    
    else if(o== '*'){
        let c= a*b;
        console.log(c)
    }
    else if(o=='/'){
        let c=a/b;
        console.log(c);

    }else{
        console.log("I Don't know what I am doing")

    }
}


simplecalculator(4,5,'+')
simplecalculator(25,5,'-')
simplecalculator(4,5,'*')
simplecalculator(15,5,'/')
simplecalculator(15,5,"$")