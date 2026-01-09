let textarea = document.getElementById("keylogger");

document.addEventListener("keypress", function (event) {
    let key = event.key; // catch the typed letter
console.log(key)
    if (key >= "a" && key <= "z") {
        textarea.value += key;
        } 
    }
);
