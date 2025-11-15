const modal = document.querySelector("#footer__modal");
const openButton = document.querySelector(".save__button");
const closeButton = document.querySelector(".modal_button");

const openModal = (e) => {
  e.preventDefault();
  modal.showModal();
};

const closeModal = (e) => {
  e.preventDefault();
  modal.close();
};

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
