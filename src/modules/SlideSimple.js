//Mostrar os slides de 4 em 4 segundos
//Saber qual slide esta ativo
//Mostrar o proximo em 4 segundos
//Se chegar no maximo voltar para o primeiro

export default class Slide {
  constructor(slide, hasNavigation) {
    this.slide = document.querySelector(slide);
    this.items = this.slide.querySelectorAll(slide + ' > *');
    this.hasNavigation = hasNavigation;
    this.active = 0;
    this.classActive = 'active';

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove(this.classActive));
    this.items[index].classList.add('active');
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');
    prevBtn.addEventListener('click', this.prev);
    nextBtn.addEventListener('click', this.next);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.next();
    }, 10 * 1000);
  }

  init() {
    if (this.slide) {
      this.activeSlide(0);
      if (this.hasNavigation) {
        this.addNavigation();
      }
    }
  }
}
