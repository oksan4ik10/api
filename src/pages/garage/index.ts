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

  constructor(id: string) {
    super(id);
    this.cats = [];
    this.areaCats = document.createElement("div");
    this.formCreate = new FormCat("settings__form", "create");
    this.formUpdate = new FormCat("settings__form", "update");
    this.page = App.pageCreate;
    this.area = document.createElement("div");
  }

  async createGameArea(limit = 7) {
    this.area.className = "game";
    this.title.classList.add("game__title");
    this.subtitle.classList.add("game__subtitle");
    const commits = await Api.getCats(limit, this.page);
    if (!commits) return;
    this.area.textContent = "";
    const count = commits.count;
    this.subtitle.textContent = "Page #";
    this.title.textContent = "shelter ";
    this.count.textContent = `(${count})`;
    this.pageCount.textContent = "1";
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
    const btnsPagination = document.createElement("div");
    btnsPagination.className = "pagination";
    btnsPagination.append(this.btnPrev);
    btnsPagination.append(this.btnNext);
    if (Number(count) < 7) {
      this.btnNext.setAttribute("disabled", "true");
      this.btnPrev.setAttribute("disabled", "true");
    }
    this.area.append(btnsPagination);
    this.container.append(this.area);
  }
  createMain() {
    const blockSettings = document.createElement("div");
    blockSettings.className = "settings";

    blockSettings.append(this.formCreate.render());
    blockSettings.append(this.formUpdate.render());
    this.formUpdate.setDisabled("false");

    const el = document.createElement("div");
    el.className = "settings__btns";
    el.innerHTML = `<button class="btn__start btn btn_g">START</button>
    <button class="btn__reset btn btn_g">reset</button>
    <button class="btn__generate btn">generate cat</button>`;
    blockSettings.append(el);

    this.container.append(blockSettings);
  }
  async createCat(obj: ICreateCat) {
    await Api.create(obj);
    this.createGameArea();
  }
  createCatBtn(e: Event) {
    e.preventDefault();
    const text = this.formCreate.inputText.value;
    if (!text) return;
    const color = this.formCreate.color.value;
    if (!color) return;
    this.createCat({ name: text, color: color });
  }

  render(): HTMLElement {
    this.createGameArea();
    this.createMain();
    this.formCreate.btn.addEventListener("click", this.createCatBtn.bind(this));
    this.btnNext.addEventListener("click", this.changePage.bind(this));
    return this.container;
  }
}
