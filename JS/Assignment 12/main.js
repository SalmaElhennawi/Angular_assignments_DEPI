const images = document.querySelectorAll(".card img");
const layer = document.querySelector(".layer");
const imgBox = document.querySelector(".img-box");
const closeBtn = document.querySelector(".fa-square-xmark");
const leftArrow = document.querySelector(".fa-angle-left");
const rightArrow = document.querySelector(".fa-angle-right");

let currentIndex = 0;

// Show image in popup
function showImage(index) {
  currentIndex = index;
  const imgSrc = images[index].getAttribute("src");
  imgBox.style.backgroundImage = `url(${imgSrc})`;
  layer.classList.remove("d-none");
}

// Add click event to each image
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index);
  });
});

// Close popup
closeBtn.addEventListener("click", () => {
  layer.classList.add("d-none");
});

// Left & Right arrows click
leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (layer.classList.contains("d-none")) return; // Only work when popup is open

  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  } else if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  } else if (e.key === "Escape") {
    layer.classList.add("d-none"); // ESC closes popup
  }
});
