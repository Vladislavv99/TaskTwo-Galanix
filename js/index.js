import updateDateTime from "./getDataTime.js";

setInterval(updateDateTime, 1000);
updateDateTime();

const listOfImgElement = document.getElementById("number-of-img");
const myList = document.querySelector(".gallery");

const numberOfItems = myList.getElementsByTagName("li").length;
listOfImgElement.innerHTML = `${numberOfItems} картинок на екрані`;
