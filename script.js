function createLove() {
  const love = document.createElement("div");
  love.classList.add("love");
  love.textContent = "❤";
  love.style.left = Math.random() * window.innerWidth + "px";
  love.style.fontSize = Math.random() * 45 + 15 + "px";
  document.querySelector(".container").appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 5000);
}

setInterval(createLove, 300);

function updateTimer() {
  const startDate = new Date("2024-05-21T08:43:00+07:00");
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").innerText = String(seconds).padStart(
    2,
    "0"
  );
}

setInterval(updateTimer, 1000);
updateTimer();

document.addEventListener("DOMContentLoaded", () => {
  const readBtn = document.querySelector(".sub-btn1");
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");

  readBtn.addEventListener("click", () => {
    popup.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const readBtn = document.querySelector(".main-btn");
  const popup = document.getElementById("popup2");
  const closeBtn = document.querySelector(".close-btn2");

  readBtn.addEventListener("click", () => {
    popup.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});

let targetPage = ""; // simpan tujuan dari tombol

function showPasswordBox(page) {
  targetPage = page;
  document.getElementById("password-modal").style.display = "flex";
  document.getElementById("error-msg").textContent = "";
  document.getElementById("password-input").value = "";
}

function closeModal() {
  document.getElementById("password-modal").style.display = "none";
  document.getElementById("password-input").value = "";
  document.getElementById("error-msg").textContent = "";
}

function checkPassword() {
  const input = document.getElementById("password-input").value.trim();

  const passwordMap = {
    hbd: {
      amel: "gatau.html",
      hilang: "HBD.html",
    },
    galery: {
      hilang: "galery.html",
      amel: "gatau.html",
    },
  };

  if (passwordMap[targetPage] && passwordMap[targetPage][input]) {
    window.location.href = passwordMap[targetPage][input];
  } else {
    document.getElementById("error-msg").textContent =
      "SALAH DONGOK. LU SIAPA ANJING!";
  }
}

function positionSpotifyPlayer() {
  const mainBox = document.querySelector(".main-box");
  const spotifyPlayer = document.querySelector(".spotify-player");

  if (mainBox && spotifyPlayer) {
    const mainBoxRect = mainBox.getBoundingClientRect();
    spotifyPlayer.style.top = `${mainBoxRect.bottom + 20}px`;
    spotifyPlayer.style.left = "50%";
    spotifyPlayer.style.transform = "translateX(-50%)";
  }
}

window.addEventListener("load", positionSpotifyPlayer);
window.addEventListener("resize", positionSpotifyPlayer);
