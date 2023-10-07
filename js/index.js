import updateDateTime from "./getDataTime.js";
import onImageClick from "./modal.js";

const listOfImgElement = document.getElementById("imageCount");
const imageList = document.getElementById("imageList");
let imageCount = imageList.getElementsByTagName("li").length;

setInterval(updateDateTime, 1000);
updateDateTime();

imageList.addEventListener("click", onImageClick);

const startMarcup = imageList.innerHTML;
const startLength = imageCount;

document.addEventListener("DOMContentLoaded", function () {
  function updateImageCount() {
    listOfImgElement.textContent = `Кількість картинок: ${imageCount}`;
  }

  function removeImage(button) {
    const listItem = button.parentElement;
    listItem.remove();

    imageCount -= 1;
    updateImageCount();
    localStorage.setItem("imageList", imageList.innerHTML);
    localStorage.setItem("imageCount", imageCount);
  }

  function restoreImages() {
    updateImageCount();
  }

  imageList.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("del-img")) {
      removeImage(event.target);
    }
  });

  document.querySelector(".update-all").addEventListener("click", function () {
    imageList.innerHTML = startMarcup;
    imageCount = startLength;
    restoreImages();
    localStorage.setItem("imageList", imageList.innerHTML);
    localStorage.setItem("imageCount", startLength);
  });

  updateImageCount();
});

function getInfoFromLS() {
  const LSMarkup = localStorage.getItem("imageList") || startMarcup;
  const LSImageCount = localStorage.getItem("imageCount") || imageCount;
  imageList.innerHTML = LSMarkup;
  imageCount = LSImageCount;
  restoreImages();
}
getInfoFromLS();
