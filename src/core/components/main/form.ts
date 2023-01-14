export class FormCat {
  inputText: HTMLInputElement;
  color: HTMLInputElement;
  btn: HTMLElement;
  container: HTMLFormElement;
  constructor(className: string, id: string) {
    this.container = document.createElement("form");
    this.container.className = className;
    this.container.id = id;
    this.inputText = document.createElement("input");
    this.inputText.type = "text";
    this.inputText.className = "settings__input";
    this.color = document.createElement("input");
    this.color.type = "color";
    this.btn = document.createElement("button");
    this.btn.className = "btn create__btn";
    this.btn.textContent = id;
  }
  setDisabled(check: string) {
    const elements = this.container.querySelectorAll("*");
    elements.forEach((item) => {
      item.setAttribute("disabled", check);
    });
  }
  render() {
    this.container.append(this.inputText);
    this.container.append(this.color);
    this.container.append(this.btn);
    return this.container;
  }
}
