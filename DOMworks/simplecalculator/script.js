
function performAddition(){

    let num1=+document.querySelector("#box1").value

    let num2=+document.querySelector("#box2").value

    let result=num1+num2




    // console.log(result);

    document.querySelector("#root").innerHTML=`${num1}+${num2}=${result}`


}

function performSubtract(){

    let num1=+document.querySelector("#box1").value

    let num2=+document.querySelector("#box2").value

    let result=num1>num2?num1-num2:num2-num1




    // console.log(result);

    document.querySelector("#root").innerHTML=`${num1}-${num2}=${result}`
}

function performMulti(){
    let num1=+document.querySelector("#box1").value

    let num2=+document.querySelector("#box2").value
    
    let result=num1*num2




    // console.log(result);

    document.querySelector("#root").innerHTML=`${num1}*${num2}=${result}`


}

function performDiv(){
    let num1=+document.querySelector("#box1").value

    let num2=+document.querySelector("#box2").value
    
    let result=num1/num2




    console.log(result);


}




function handleClick(event){

    let operator=event.target.value

    let num1=box1.value

    let num2=box2.value

    let result=eval(`${num1}${operator}${num2}`)

    document.querySelector("#root").innerHTML=`${num1}${operator}${num2} =${result}`

}