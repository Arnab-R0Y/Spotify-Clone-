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


const bottomPlayer = document.querySelector(".bottom");
const playButton = document.querySelector(".fa-play");

let isPlaying = false;

playButton.addEventListener("click", () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
        bottomPlayer.classList.add("showPlayer");
    } else {
        bottomPlayer.classList.remove("showPlayer");
    }
});



//Playing Audio

const audio = new Audio();

const cards = document.querySelectorAll(".songCard");

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


//Linking the song cards to the bottom player

