let button = document.getElementById("button");
let compteur = document.getElementById("compteur");
button.addEventListener("click", addOne);

/* count is used to keep the value in memory */
let count = 0;

function addOne() {
    count++;
    document.getElementById("compteur").textContent = count;
}
