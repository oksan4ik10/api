import Page from "../../core/templates/page";
import { App } from "../app";
import { Cat } from "../../core/components/main/cat";
import { ICat } from "../../types/types";
import { Api } from "../../core/components/api/api";
import { FormCat } from "../../core/components/main/form";
import { ICreateCat } from "../../types/types";

export class Main extends Page {
  cats: ICat[];
  areaCats: HTMLElement;
  formCreate: FormCat;
  formUpdate: FormCat;
  area: HTMLElement;
  btnGenerate: HTMLElement;
  static randomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
  }
  static randomNum(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  static randomName() {
    const arrBreeds = [
      "Persian",
      "Bengal",
      "Burmese",
      "Scottish Fold",
      "Sphynx",
      "American Curl",
      "American Bobtail",
      "Siamese",
      "Maine Coon",
      "Chartreux",
    ];
    const arrName = [
      "Luna",
      "Nala",
      "Oliver",
      "Ollie",
      "Leo",
      "Simba",
      "Milo",
      "Tigger",
      "Max",
      "Lola",
      "Bella",
    ];

    return Main.randomNum(arrBreeds) + " " + Main.randomNum(arrName);
  }

  constructor(id: string) {
    super(id);
    this.cats = [];
    this.areaCats = document.createElement("div");
    this.formCreate = new FormCat("settings__form", "create");
    this.formUpdate = new FormCat("settings__form", "update");
    this.page = App.pageCreate;
    this.area = document.createElement("div");
    this.btnGenerate = document.createElement("button");
  }

  async createArea() {
    this.area.className = "game";
    this.title.classList.add("game__title");
    this.subtitle.classList.add("game__subtitle");
    const commits = await Api.getCats(7, this.page);
    if (commits.cats.length === 0) return;
    this.area.textContent = "";
    const count = commits.count;
    this.subtitle.textContent = "Page #";
    this.title.textContent = "shelter ";
    this.count.textContent = `(${count})`;
    this.pageCount.textContent = String(this.page);
    this.title.append(this.count);
    this.subtitle.append(this.pageCount);
    this.area.append(this.title);
    this.area.append(this.subtitle);
    this.areaCats.textContent = "";
    this.areaCats.className = "cats__item cat";
    commits.cats.forEach((element: ICat) => {
      const el = new Cat(
        "div",
        "cats__item cat",
        element.name,
        element.color,
        element.id
      );
      this.areaCats.append(el.render());
    });
    this.area.append(this.areaCats);

    await this.area.append(this.createPagination(Number(count)));
    this.container.append(this.area);
  }
  createPagination(num: number) {
    const btnsPagination = document.createElement("div");
    btnsPagination.className = "pagination";
    btnsPagination.append(this.btnPrev);
    btnsPagination.append(this.btnNext);
    if (num < 7) {
      this.btnNext.setAttribute("disabled", "true");
      this.btnPrev.setAttribute("disabled", "true");
    } else {
      this.btnNext.removeAttribute("disabled");
      this.btnPrev.removeAttribute("disabled");
    }
    return btnsPagination;
  }
  createMain() {
    const blockSettings = document.createElement("div");
    blockSettings.className = "settings";

    blockSettings.append(this.formCreate.render());
    blockSettings.append(this.formUpdate.render());
    this.formUpdate.setDisabled("false");

    const el = document.createElement("div");
    el.className = "settings__btns";
    this.btnGenerate.className = "btn__generate btn";
    this.btnGenerate.textContent = "generate cat";
    el.append(this.btnGenerate);
    // el.innerHTML = `<button class="btn__start btn btn_g">START</button>
    // <button class="btn__reset btn btn_g">reset</button>
    // <button class="btn__generate btn">generate cat</button>`;
    blockSettings.append(el);

    this.container.append(blockSettings);
  }
  async createCat(obj: ICreateCat) {
    await Api.create(obj);
  }
  createCatBtn(e: Event) {
    e.preventDefault();
    const text = this.formCreate.inputText.value;
    if (!text) return;
    const color = this.formCreate.color.value;
    if (!color) return;
    this.createCat({ name: text, color: color });
    this.createArea();
  }
  async generateCat() {
    Main.randomColor();
    for (let index = 0; index < 100; index++) {
      this.createCat({
        name: Main.randomName(),
        color: Main.randomColor(),
      });
    }
    this.createArea();
  }

  render(): HTMLElement {
    this.createArea();
    this.createMain();
    this.formCreate.btn.addEventListener("click", this.createCatBtn.bind(this));
    this.btnNext.addEventListener("click", this.changePageNext.bind(this));
    this.btnPrev.addEventListener("click", this.changePagePrev.bind(this));
    this.btnGenerate.addEventListener("click", this.generateCat.bind(this));
    return this.container;
  }
}
