
function characterCount(str, character){
let letters= 0;
let alphabet=" ";

for(i=0;i<str.length;i++){
    if (str[i]==character){//did not put length here because we are only looking for one character
        letters++;
    }
}
console.log(letters);
}

characterCount("hakuna matata","s")


