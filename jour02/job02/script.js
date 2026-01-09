let button = document.getElementById("button");

button.addEventListener("click", showhide);

function showhide() {
    let article = document.getElementById("article");

    /* test if the element exists in the DOM */

    if (article === null) {
        article = document.createElement("article");
        article.id = "article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    } else {
        article.remove();
    }
}
