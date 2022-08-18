// our code javascript
let button = document.getElementsByClassName("sub")[0];
let home = document.getElementsByClassName("home")[0];

button.addEventListener("click", function() {
    home.style.display = "block";
    button.style.display="none";
});
window.onclick = function(event) {
    if (event.target == home) {
        home.style.display = "none";
    }
}

let input = document.querySelectorAll(".input"); 
input.addEventListener("click", function(){
    input.style.borderColor="#ccc";
})   
