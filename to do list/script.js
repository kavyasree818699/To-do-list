const inputBox = document.getElementById('input-box')
const button = document.getElementById('btn');
const listElements = document.querySelector('.listElements');

function btn(){
    if(inputBox.value === ''){
        alert('plz enter a valid task!!!!')
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listElements.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""; 
}

listElements.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
