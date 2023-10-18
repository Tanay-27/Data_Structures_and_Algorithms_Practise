const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
let itemWidth = 110; // Adjust this value based on your item width and margin

function showItem(index) {
  if (index < 0) {
    index = 0;
  } else if (index >= carousel.children.length - 3) {
    index = carousel.children.length - 3;
  }
  const translateX = -index * itemWidth + "px";
  carousel.style.transform = `translateX(${translateX})`;
  currentIndex = index;
}

prevButton.addEventListener("click", () => showItem(currentIndex - 1));
nextButton.addEventListener("click", () => showItem(currentIndex + 1));

showItem(currentIndex);
