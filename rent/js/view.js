(function () {
  const dialog = document.createElement("dialog");
  const picture = document.createElement("img");
  picture.alt = "";
  dialog.append(picture);
  document.body.append(dialog);

  document.querySelectorAll("a.pic").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const thumb = link.querySelector("img");
      picture.src = link.href;
      picture.alt = thumb ? thumb.alt : "";
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    picture.removeAttribute("src");
  });
})();
