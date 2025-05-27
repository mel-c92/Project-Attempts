const mouseMove = document.querySelectorAll(".mouse");
const liHover = document.querySelector("li");

window.addEventListener("mousemove", (e) => {
  mouseMove.forEach((mouse) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
  });
});
