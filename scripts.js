const bulletinBoard = document.querySelector(".bulletin-board");
const modal = document.querySelector(".modal");


function addNewCard(text){
    let element = document.createElement("li");
element.classList.add("card");
element.innerHTML = `<div class="pin"></div>
<div class="text">${text}</div>`;

bulletinBoard.appendChild(element);
}

window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none";
    }
}

function showModal(){
    let text = window.prompt("Please limit your text to 100 characters");

    if (text.length > 100) {
        window.alert("Error: note too long");
    } else {
        addNewCard(text);
    }
}