// an array for the most recently pressed keys, in the order they were pressed
const keyList = [];

const konamiSequence = [
    'arrowup', 'arrowup',
    'arrowdown', 'arrowdown',
    'arrowleft', 'arrowright',
    'arrowleft', 'arrowright',
    'b', 'a'
];

// stops the code from being triggered more than once (activated = false)
let activated = false;

console.log("Konami initialized");

// keydown runs every time i press any key
document.addEventListener('keydown', function (event) {
    if (activated) return;

    const key = event.key.toLowerCase();
    console.log("Key pressed:", key);

    // push adds key variable to the list
    keyList.push(key);
    console.log("Current key list:", keyList);

    // keeps only the last 10 keys
    if (keyList.length > konamiSequence.length) {
        keyList.shift(); // removes the oldest key
        console.log("Oldest key removed, updated list:", keyList);
    }

    // trigger only when the full sequence entered
    if (
        keyList.length === konamiSequence.length &&
        keyList.every((value, index) => value === konamiSequence[index]) 
        // every = goes through the array one element at a time
        // runs a function on EACH element
        // returns true only if ALL checks return true, if one check fails, stops and returns false
        // value = the key that was pressed
    ) {
        console.log("Konami detected!");
        activatePlateforme();
        activated = true;
    }
});

// Main function triggered when konami detected
function activatePlateforme() {
    console.log("La Plateforme");
    injectPlateformeCSS();
    injectContent();
}

// injects css into the page
function injectPlateformeCSS() {
    console.log("Injecting CSS");
    const style = document.createElement("style");

    style.innerHTML = `
body {
    margin: 0;
    background-color: #0062ff;
    color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
}

#app {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

h1 {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 48px;
    margin-bottom: 20px;
}

p {
    font-size: 20px;
    line-height: 1.4em;
}
    `;

    document.head.appendChild(style);
}

// injects content inside #app (div on my page)
function injectContent() {
    console.log("Content into #app");
    const app = document.getElementById("app");

    // ` template literals for multi-line strings and variables
    // easy to inject CSS, app here is my div id
    app.innerHTML = `
        <div>
            <h1>La Plateforme</h1>
            <p>Code Konami</p>
        </div>
    `;
}
