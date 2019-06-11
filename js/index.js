var slider = document.querySelector('.slider');
var sliderDots = slider.querySelectorAll('.slider-dots .dot-btn');
var sliderSlides = slider.querySelectorAll('.slide');

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].addEventListener('click', function (evt) {
    evt.preventDefault();

    if (this.classList.contains('dot-btn-active')) {
      return;
    }

    if (sliderSlides[i]) {
      var activeSlide = slider.querySelector('.slide-active');

      if (activeSlide) {
        activeSlide.classList.remove('slide-active');
      }

      var activeBtn = slider.querySelector('.dot-btn-active');

      if (activeBtn) {
        activeBtn.classList.remove('dot-btn-active')
      }

      sliderSlides[i].classList.add('slide-active');
      this.classList.add('dot-btn-active');
    }
  })
}
