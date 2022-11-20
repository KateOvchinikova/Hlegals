(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("#body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  refs.openModalBtn.addEventListener("click", toggleBody);
  refs.closeModalBtn.addEventListener("click", toggleBody);
  function toggleBody() {
    refs.body.classList.toggle("lock");
  }
})();
(() => {
  document.querySelector(".js-speaker-form").addEventListener("submit", (e) => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}:${value}`)
    );
  });
})();
