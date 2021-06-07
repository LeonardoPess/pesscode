export default class TextWriter {
  constructor(texts) {
    this.texts = document.querySelectorAll(texts);
  }

  typeWriter(text) {
    const textoArray = text.innerHTML.split('');
    text.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => text.innerHTML += letra, 80 * i);
    });
  }

  init() {
    this.texts.forEach((text) => {
      this.typeWriter(text);
    })
  }

}
