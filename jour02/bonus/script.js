const rubik = document.getElementById("rubik");

//by subtracting the cube's size from the window's size
//i calculate the maximum position where the cube can be placed

let x = window.innerWidth - rubik.offsetWidth;
let y = window.innerHeight - rubik.offsetHeight;

const speed = 10;

rubik.style.position = "fixed";
rubik.style.left = x + "px";
rubik.style.top = y + "px";

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      y = y - speed;
      break;
    case "ArrowDown":
      y = y + speed;
      break;
    case "ArrowLeft":
      x = x - speed;
      break;
    case "ArrowRight":
      x = x + speed;
      break;
  }


  const maxX = window.innerWidth - rubik.offsetWidth;
  const maxY = window.innerHeight - rubik.offsetHeight;

// these two lines forces x and y to stay within bounds
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

// after the screen boundaries have been calculated, and the cube's position limited
// i move the cube to the valid position

  rubik.style.left = x + "px";
  rubik.style.top = y + "px";
});
