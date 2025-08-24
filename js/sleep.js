// sheeps in bed
const sleepsheeps = document.getElementById("sleepingsheep");
// sleep music
const sleepmusic = document.getElementById("sleepmusic");

// play sleep music

sleepsheeps.addEventListener("mouseover", () => {
  sleepmusic.volume = 0.2;
  sleepmusic.currentTime = 0;
  sleepmusic.play();
});

sleepsheeps.addEventListener("mouseout", () => {
  sleepmusic.pause();
  sleepmusic.currentTime = 0;
});
