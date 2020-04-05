const bulletinBoard = document.querySelector(".bulletin-board");
const modal = document.querySelector(".modal");
const deleteButtons = document.querySelectorAll(".delete-button");

function addDeleteButtonEventListener(button) {
    button.addEventListener('click', e => deleteNote(e));
}

function addNewNote(text){
    let element = document.createElement("li");
    element.classList.add("note");
    element.innerHTML = `<div class="pin"></div>
    <div class="text">${text}</div><button type="button" class="delete-button">Delete</button>`;
    
    addDeleteButtonEventListener(element.querySelector(".delete-button"));

    bulletinBoard.appendChild(element);
}

function showModal(){
    let text = window.prompt("Please limit your text to 100 characters");

    if (text.length > 100) {
        window.alert("Error: note too long");
    } else {
        addNewNote(text);
    }
}

function deleteNote(e) {
    bulletinBoard.removeChild(e.target.parentElement);
}

deleteButtons.forEach(button => {
    addDeleteButtonEventListener(button);
});