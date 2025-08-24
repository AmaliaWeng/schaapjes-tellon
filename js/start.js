// button
const start = document.getElementById("StartBtn");

// ga naar game

document.addEventListener("DOMContentLoaded", () => {
  const start = document.getElementById("StartBtn");

  start.addEventListener("click", () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "game.html";
    }, 200);
  });
});

// button effect

start.addEventListener("mouseover", () => {
  start.classList.add("grow");
});
start.addEventListener("mouseout", () => {
  start.classList.remove("grow");
});
