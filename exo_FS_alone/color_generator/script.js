let body = document.querySelector("body");
let span = document.querySelector("span");

window.addEventListener("click", (e) => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  span.innerText = `${red}, ${green}, ${blue}`;
  body.style.background = `rgb(${red},${green},${blue})`;
});

let changeColor = setInterval(() => {
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  span.innerText = `${red}, ${green}, ${blue}`;
  body.style.background = `rgb(${red},${green},${blue})`;
}, 3000);
