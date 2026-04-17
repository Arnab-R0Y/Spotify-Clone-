console.log("Spotify Clone");

const songsGrid = document.querySelector(".songsGrid");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

// how much to scroll per click
const scrollAmount = 255;

rightArrow.addEventListener("click", () => {
    songsGrid.scrollLeft += scrollAmount;
});

leftArrow.addEventListener("click", () => {
    songsGrid.scrollLeft -= scrollAmount;
});



//Playing Audio

const audio = new Audio();

const cards = document.querySelectorAll(".songCard");
const bottomPlayer = document.querySelector(".bottom");


const songName = document.getElementById("songName");
const songArtist = document.getElementById("songArtist");
const songCover = document.getElementById("songCover");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const songSrc = card.getAttribute("data-song");
        const title = card.getAttribute("data-title");
        const artist = card.getAttribute("data-artist");
        const imgSrc = card.querySelector("img").src;

        // play audio
        audio.src = songSrc;
        audio.play();

        // update bottom player
        songName.innerText = title;
        songArtist.innerText = artist;
        songCover.src = imgSrc;

        // show bottom player
        bottomPlayer.classList.add("showPlayer");
    });
});


//Linking Progressbar with Audio

const progressBar = document.getElementById("myProgressBar");

audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;

        progressBar.style.background = `linear-gradient(to right, #1db954 ${progress}%, #535353 ${progress}%)`;
    }
});

progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});


//Play pause functionality

const playPauseBtn = document.getElementById("playButton");

playButton.addEventListener("click", () => {
    if(audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
});

audio.addEventListener("play", () => {
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-pause");
});

audio.addEventListener("pause", () => {
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
});


//Volume Control

const volumeBar = document.getElementById("volumeBar");

volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value / 100;
});


//Spacebar functionality

document.addEventListener("keydown", (e) => {

    if(e.code === "Space") {
        e.preventDefault();

        if(audio.paused) {
            audio.play();
        }
        else {
            audio.pause();
        }
    }

    if(e.code === "ArrowRight") {
        e.preventDefault();
        audio.currentTime += 5;
    }

    if(e.code === "ArrowLeft") {
        e.preventDefault();
        audio.currentTime -= 5;
    }
});