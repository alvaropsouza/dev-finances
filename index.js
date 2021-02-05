const Modal = {
  open() {
    // abrir modal
    // add active class to modal
    document
    .querySelector('.modal-overlay')
    .classList.add('active')
  },
  close() {
    document
    .querySelector('.modal-overlay')
    .classList.remove('active')
  }
}