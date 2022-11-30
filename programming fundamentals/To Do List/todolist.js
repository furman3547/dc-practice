const checkbox = document.createElement("INPUT")

function addTask(){
    const taskText= document.getElementById("inputTask");
    const textVal = taskText.value;
    const incompleteDiv = document.getElementById("incomplete");
    const completeDiv= document.getElementById("complete");
    const tempDiv= document.createElement("div");


    tempDiv.classList.add("TASK");//div for tasks
    const checkbox = document.createElement("INPUT")
    checkbox.setAttribute("type","checkbox")
    const tempText=document.createElement("p")
    const remButton = document.createElement("button");
    remButton.id="removeBtn";
    remButton.className="removeBtn"
    remButton.innerText="Remove";

    tempText.innerText = textVal;

    tempDiv.append(checkbox); //add checkbox element into the temporary div 
    tempDiv.append(tempText);
    tempDiv.append(remButton);

    incompleteDiv.append(tempDiv)
    
    remButton.addEventListener("click", event => {
        
        //event listeners for remove button
        tempDiv.remove();

    })

}
//function of checkbox
checkbox.addEventListener("change",event =>{
    if(event.target.checked){
        completeDiv.append(tempDiv);

    }
    else{
    incompleteDiv.append(tempDiv);

    }
})

addTask()
