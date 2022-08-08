function Add() {
    let inputTask = document.querySelector("#task")
    let list = document.getElementById("list")
    if (inputTask.value != "") {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputTask.value));
        list.appendChild(li);
        inputTask.value = ""
        li.onclick = function () {
            this.parentNode.removeChild(this);
        }
    }
    else {
        alert("Please add a task")
    }
}
