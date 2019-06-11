var writeOpen = document.querySelector('.js-btn-write');
var writePopup = document.querySelector('.modal-write');
var writeClose = writePopup.querySelector('.modal-close');
var writeFirstInput = writePopup.querySelector('input[type="text"]');

writeOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  writePopup.classList.add('modal-show');

  if (writeFirstInput) {
    writeFirstInput.focus();
  }
});

writeClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  writePopup.classList.remove('modal-show');
});

// fix product card focus action - not working while tabbing
var productCards = document.querySelectorAll('.product-card');

for (let i = 0; i < productCards.length; i++) {
  productCards[i].addEventListener('focus', function (evt) {
    this.classList.add('product-card-focused');
  });

  productCards[i].addEventListener('blur', function (evt) {
    if (!evt.relatedTarget || !this.contains(evt.relatedTarget)) {
      this.classList.remove('product-card-focused');
    }
  }, { capture: true });
}
