import Menu from './modules/Menu.js';
import SmoothScroll from './modules/SmoothScroll.js';
import SlideNav from './modules/SlideNav.js';
import Slide from './modules/SlideSimple.js';
import TextWriter from './modules/TextWriter.js';

const menu = new Menu('.menu-btn', 'nav.mobile ul', 'show');
menu.init();

const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();

setTimeout(() => {
  const slideHome = new SlideNav('.slide', '.slide-wrapper');
  slideHome.init();
  slideHome.addControl('.custom-controls');
}, 3 * 1000);

const slideReviews = new Slide('.slideReviews', false);
slideReviews.init();

const writer = new TextWriter('.textWriter');
writer.init();
