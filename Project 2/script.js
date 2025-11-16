let container = document.querySelector("#container");
let icon = document.querySelector("i");

container.addEventListener("dblclick", () => {
  icon.style.transform = "scale(1.25)";
  icon.style.opacity = 0.8;
  setTimeout(() => {
    icon.style.opacity = 0;
  }, 500);
  setTimeout(() => {
    icon.style.transform = "scale(0)";
    icon.style.transition = "transform 0.3s ease-in-out";
  }, 1000);
});
