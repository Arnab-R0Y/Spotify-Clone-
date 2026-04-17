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