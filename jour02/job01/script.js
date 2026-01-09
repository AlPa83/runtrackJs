let button = document.getElementById("button");
let element = document.getElementById("citation");

button.addEventListener("click", function () {
    citation(element);
});

function citation(element) {
    console.log(element.textContent);
}