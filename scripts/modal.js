const modal = document.querySelector("#footer__modal");
const openButton = document.querySelector(".save__button");
const closeButton = document.querySelector(".modal_button");

openButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.showModal();
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.close();
});
