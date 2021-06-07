import smoothScrollTo from './smoothScrollTo.js';

export default class SmoothScroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  getScrollTopByHref(e) {
    const id = e.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }

  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const to = this.getScrollTopByHref(e.currentTarget) - 30;
    this.scrollToPosition(to);
  }

  scrollToPosition(to) {
    smoothScrollTo(0, to);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}