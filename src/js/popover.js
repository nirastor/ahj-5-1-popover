export default class Popover {
  constructor(parentEl, title, text, isOpen) {
    this.parentEl = parentEl;
    this.title = title;
    this.text = text;
    this.parentEl = parentEl;
    this.isOpen = isOpen;
  }

  init() {
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');
    this.popover.innerHTML = `
      <div class="popover-title">${this.title}</div>
      <div class="popover-text">${this.text}</div>
    `;
    this.parentEl.appendChild(this.popover);
    this.draw();
  }

  open(isOpen) {
    this.isOpen = isOpen;
    this.draw();
  }

  draw() {
    if (this.isOpen) {
      this.popover.style.opacity = 1;
    } else {
      this.popover.style.opacity = 0;
    }
  }
}
