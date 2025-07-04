const lightBox = document.querySelector(".lightbox");
const closeBtn = document.getElementById("close-btn");
const lightBoxImg = document.getElementById("lightbox-image");
const thumbnails = document.querySelectorAll(".gallery-item");

function openImage(image) {
  const fullImgSrc = image.src.replace("-thumbnail", "");
  lightBoxImg.src = fullImgSrc;
  lightBox.style.display = "flex";
}

function closeImage() {
  lightBox.style.display = "none";
}

thumbnails.forEach((image) => {
  image.addEventListener("click", () => openImage(image));
});

closeBtn.addEventListener("click", closeImage);

// Close when clicking the lightbox background (but not the image)
lightBox.addEventListener("click", (e) => {
  if (e.target === lightBox) {
    closeImage();
  }
});
