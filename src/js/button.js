import Popover from './popover';

export default class Button {
  constructor(parentEl, isOpen) {
    this.button = document.createElement('button');
    this.parentEl = parentEl;
    this.isOpen = isOpen;
  }

  init() {
    this.parentEl.appendChild(this.button);
    this.button.classList.add('button');
    this.drawButtonText();
    this.initPopover();
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.onClick();
    });
  }

  initPopover() {
    this.popover = new Popover(
      this.parentEl,
      'Заголовок',
      'Текст. Текст длинее заголовка. Но это не важно',
      this.isOpen,
    );
    this.popover.init();
  }

  drawButtonText() {
    if (this.isOpen) {
      this.button.innerText = 'Скрыть попап';
    } else {
      this.button.innerText = 'Показать попап';
    }
  }

  onClick() {
    this.isOpen = !this.isOpen;
    this.popover.open(this.isOpen);
    this.drawButtonText();
  }
}
