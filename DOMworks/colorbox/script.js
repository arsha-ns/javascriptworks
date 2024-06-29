

function handleClick(event){

    let color=event.target.value

    // console.log(color);

    let rootElement=document.querySelector("#root")

    rootElement.removeAttribute("class")

    rootElement.setAttribute("class",`bg-${color}`)
}