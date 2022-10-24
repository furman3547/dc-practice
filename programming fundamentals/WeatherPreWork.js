function temperature(t){
    if (t<=60){
      console.log("chill")
    }
    else if (t>=60 && t<=80){
      console.log("pleasant")
    }
    else if (t>=80 && t<=100){
      console.log("hot")
    }
    else if (t>100){
      console.log("very hot")
    }
}
temperature(60)
//temperature(90)
//temperature(20)
//temperature(39898)
