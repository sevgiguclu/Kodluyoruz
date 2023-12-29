
let listDom = document.querySelector("#list");
localStorage.clear();

listDom.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        toggleTask(event.target);
    }
});


function newElement() {
    let text = document.getElementById("task").value;
    if(text && text !==" "){
        let newDom = document.createElement("li");
        newDom.innerHTML = `${text} <span class="close" onclick="deleteElement(this)">×</span>`;
        listDom.append(newDom);
        let successToast = document.getElementsByClassName("toast success");
        successToast.liveToast.classList.replace("hide","show");
        setTimeout(function(){
            successToast.liveToast.classList.replace("show","hide");
        },3000);
        localStorage.setItem(text, text);
    }
    else {
        let errorToast = document.getElementsByClassName("toast error");
        errorToast.liveToast.classList.replace("hide","show");
        setTimeout(function(){
            errorToast.liveToast.classList.replace("show","hide");
        },3000)
    }

   
}

function deleteElement(event) {
    let deleteItemLocalStorage = event.parentNode.firstChild.textContent.trim();
    localStorage.removeItem(deleteItemLocalStorage);
    event.parentNode.remove();
}

function toggleTask(element) {
    if(element.className === "checked") {
        element.classList.remove("checked");
    }
    else{
        element.classList.add("checked");
    } 
   
}



