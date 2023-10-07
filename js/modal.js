function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const source = e.target.src;

  const modalWindow = basicLightbox.create(
    `<img src="${source}" width="800" height="600">`
  );
  modalWindow.show();
}

export default onImageClick;
