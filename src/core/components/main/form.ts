import { App } from "../../../pages/app";
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
      if (check === "true") item.setAttribute("disabled", check);
      else item.removeAttribute("disabled");
    });
  }
  inputData() {
    if (this.container.id === "create") {
      App.formCreateInput = this.inputText.value;
    } else if (this.container.id === "update") {
      App.formUpdateInput = this.inputText.value;
    }
  }
  changeColor() {
    if (this.container.id === "create") {
      App.formCreateColor = this.color.value;
    } else if (this.container.id === "update") {
      App.formUpdateColor = this.color.value;
    }
  }

  render() {
    this.container.append(this.inputText);
    this.container.append(this.color);
    this.container.append(this.btn);
    this.inputText.addEventListener("input", this.inputData.bind(this));
    this.color.addEventListener("change", this.changeColor.bind(this));
    return this.container;
  }
}
