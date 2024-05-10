let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let listItems = document.getElementById("listItems");
let icon = document.getElementById("icon");

selectField.onclick = function(){
    listItems.classList.toggle("hide");
    icon.classList.toggle("rotate");
    
    

}

for(each of options){
      each.addEventListener("click", function(){
        selectText.innerHTML = this.textContent;
        listItems.classList.toggle("hide");
        icon.classList.toggle("rotate");
      })
}