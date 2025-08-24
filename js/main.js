// buttons
const button = document.getElementById("SpringBtn");
const suprise = document.getElementById("SupriseBtn");
// sheeps
const sheep = document.getElementById("sheep");
const sheep2 = document.getElementById("sheep2");
const sheep3 = document.getElementById("sheep3");
const sheep4 = document.getElementById("sheep4");
const sheep5 = document.getElementById("sheep5");
const sheep6 = document.getElementById("sheep6");
// counter
const counter = document.getElementById("counter");
// audio
const sheepAudio = document.getElementById("sheepAudio");
const sheepAudio2 = document.getElementById("sheepAudio2");
const sheepAudio3 = document.getElementById("sheepAudio3");
const nightSound = document.getElementById("nightsound");
const partyaudio = document.getElementById("party");
const music = document.getElementById("background_music");
// achtergrond
const cloud1 = document.querySelector(".cloud1");
const cloud2 = document.querySelector(".cloud2");
const cloud3 = document.querySelector(".cloud3");
const moon = document.querySelector(".moon");
const stars = document.querySelector(".stars");
const tekst = document.querySelector(".tekst");
const birds = document.querySelector(".birds");
const grass = document.querySelector(".grass");

let count = 0;
let randomTrigger = Math.floor(Math.random() * 20) + 5;

// button effect

button.addEventListener("mouseover", () => {
  button.classList.add("grow");
});
button.addEventListener("mouseout", () => {
  button.classList.remove("grow");
});

// spring animatie

const jumpSheep = [
  { sh: sheep, anim: "jump", audio: sheepAudio },
  { sh: sheep2, anim: "jump", audio: sheepAudio },
  { sh: sheep3, anim: "jump2", audio: sheepAudio3 },
  { sh: sheep4, anim: "jump2", audio: sheepAudio3 },
  { sh: sheep5, anim: "jump3", audio: sheepAudio2 },
  { sh: sheep6, anim: "jump3", audio: sheepAudio2 },
];
button.addEventListener("click", () => {
  jumpSheep.forEach(({ sh, anim }) => {
    sh.classList.add(anim);
    sh.addEventListener("animationend", () => sh.classList.remove(anim), {
      once: true,
    });
  });

  // aantal schapen teller
  count = count + 1;
  counter.textContent = count;

  // schaap audio

  jumpSheep.forEach(({ sh, audio }) => {
    sh.addEventListener("mouseover", () => {
      audio.volume = 0.2;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    });
    sh.addEventListener("mouseout", () => {
      audio.pause();
      audio.currentTime = 0;
    });
  });

  //dag en nacht

  if (count % 5 === 0) {
    const isdag =
      document.body.style.backgroundColor === "rgb(179, 229, 252)" ||
      document.body.style.backgroundColor === "" ||
      document.body.style.backgroundColor === "rgb(136, 195, 138)";

    // nacht

    if (isdag) {
      document.body.style.backgroundColor = "#05446C";
      document.body.style.color = "white";
      grass.style.backgroundColor = "#255133";
      cloud1.style.opacity = "0";
      cloud2.style.opacity = "0";
      cloud3.style.opacity = "0";
      moon.style.opacity = "1";
      stars.style.opacity = "1";
      sheep.style.opacity = "0";
      sheep2.style.opacity = "1";
      sheep3.style.opacity = "0";
      sheep4.style.opacity = "1";
      sheep5.style.opacity = "0";
      sheep6.style.opacity = "1";
      nightSound.volume = 0.2;
      nightSound.currentTime = 0;
      nightSound.play();
    }

    // dag
    else {
      document.body.style.backgroundColor = "#b3e5fc";
      document.body.style.color = "#332e2e";
      grass.style.backgroundColor = "#83c38a";
      cloud2.style.opacity = "1";
      cloud1.style.opacity = "1";
      cloud3.style.opacity = "1";
      moon.style.opacity = "0";
      stars.style.opacity = "0";
      sheep.style.opacity = "1";
      sheep2.style.opacity = "0";
      sheep3.style.opacity = "1";
      sheep4.style.opacity = "0";
      sheep5.style.opacity = "1";
      sheep6.style.opacity = "0";
      nightSound.pause();
      nightSound.currentTime = 0;
    }
  }

  // boodshcap

  if (count % 15 === 0) {
    tekst.style.display = "block";
    tekst.textContent = `Ben je al moe aan het worden?`;

    setTimeout(() => {
      tekst.textContent =
        "Hoe meer schaapjes je telt hoe dichter je komt tot dromen land";
    }, 3000);
  }

  if (count % 25 === 0) {
    tekst.textContent = "HOPE YOU HAVE A NICE DREAM!!!";
    setTimeout(() => {
      tekst.textContent =
        "Hoe meer schaapjes je telt hoe dichter je komt tot dromen land";
    }, 3000);
  }

  // Vogels

  if (count % 10 === 0) {
    birds.style.display = "block";
    document.body.style.backgroundColor = "#F0E1FF";

    setTimeout(() => {
      document.body.style.backgroundColor = "";
    }, 3000);
  } else {
    birds.style.display = "none";
  }

  if (count === 55) {
    tekst.textContent = "Zzzzzz";

    setTimeout(() => {
      tekst.textContent = "Slaapzacht!";

      setTimeout(() => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = "sleep.html";
        }, 500);
      }, 1000);
    }, 2000);
  }

  // party suprise

  if (count === randomTrigger) {
    randomTrigger = Math.floor(Math.random() * 20) + 5;
    tekst.textContent = "Kan je niet slapen? Dans dan met ons mee!";
    setTimeout(() => {
      tekst.textContent =
        "Hoe meer schaapjes je telt hoe dichter je komt tot dromen land";
    }, 3000);
    document.body.classList.add("disco");
    partyaudio.volume = 0.2;
    partyaudio.currentTime = 0;
    partyaudio.play();
    sheep.classList.add("wiggle");
    sheep2.classList.add("wiggle");
    sheep3.classList.add("wiggle");
    sheep4.classList.add("wiggle");
    sheep5.classList.add("wiggle");
    sheep6.classList.add("wiggle");
  } else {
    document.body.classList.remove("disco");
    partyaudio.pause();
    sheepAudio.currentTime = 0;
    sheep.classList.remove("wiggle");
    sheep2.classList.remove("wiggle");
    sheep3.classList.remove("wiggle");
    sheep4.classList.remove("wiggle");
    sheep5.classList.remove("wiggle");
    sheep6.classList.remove("wiggle");
  }

  // suprise sheep

  if (count === 15 || count === 30) {
    suprise.style.display = "block";
    tekst.textContent = "Rara wat zou het kunnen zij?";
  }

  suprise.addEventListener("click", () => {
    sheep3.style.display = "block";
    sheep4.style.display = "block";

    if (count === 30) {
      sheep5.style.display = "block";
      sheep6.style.display = "block";
    }
    suprise.style.display = "none";
  });
});
