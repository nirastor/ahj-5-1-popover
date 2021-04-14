import Button from './button';

class App {
  constructor() {
    this.appEl = document.querySelector('.app');
    this.colEl = null;
  }

  init() {
    this.colEl = document.createElement('div');
    this.colEl.classList.add('app-column');
    this.appEl.appendChild(this.colEl);

    this.buttonContainerEl = document.createElement('div');
    this.buttonContainerEl.classList.add('app-button');
    this.colEl.appendChild(this.buttonContainerEl);
    this.buttonEl = new Button(this.buttonContainerEl, false);
    this.buttonEl.init();
  }
}

const app = new App();
app.init();
