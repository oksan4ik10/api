import Page from "../../core/templates/page";
import { Cat } from "../../core/components/main/cat";
import { ICat } from "../../types/types";
import { Api } from "../../core/components/api/api";

export class Main extends Page {
  cats: ICat[];
  areaCats: HTMLElement;

  constructor(id: string) {
    super(id);
    this.cats = [];
    this.areaCats = document.createElement("div");
  }

  async createGameArea(page = 1, limit = 7) {
    const area = document.createElement("div");
    area.className = "garage__game game";
    this.title.classList.add("game__title");
    this.subtitle.classList.add("game__subtitle");
    const commits = await Api.getCars(limit, page);
    const count = commits.count;
    this.subtitle.textContent = "Page #";
    this.title.textContent = "shelter ";
    this.count.textContent = `(${count})`;
    this.pageCount.textContent = "1";
    this.title.append(this.count);
    this.subtitle.append(this.pageCount);
    area.append(this.title);
    area.append(this.subtitle);
    this.container.append(area);
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
    this.container.append(this.areaCats);
    const btnsPagination = document.createElement("div");
    btnsPagination.className = "pagination";
    btnsPagination.append(this.btnPrev);
    btnsPagination.append(this.btnNext);
    if (Number(count) < 7) {
      this.btnNext.setAttribute("disabled", "true");
      this.btnPrev.setAttribute("disabled", "true");
    }
    this.container.append(btnsPagination);
  }
  createMain() {
    this.container.innerHTML = `    <div class="garage">
    <div class="garage__settings settings">
        <form class="settings__form" id="create-car">
            <input type="text" name="name-create-cat" id="name-create-cat" class="settings__input">
            <input type="color" name="name-create-color" id="name-create-color">
            <button class="btn create__btn">CREATE</button>
        </form>
        <form  class="settings__form" id="update-car" disabled>
            <input type="text" name="name-update-cat" id="name-update-cat" class="settings__input" disabled>
            <input type="color" name="name-update-color" id="name-update-color" disabled>
            <button class="btn update__btn" disabled>update</button>
        </form>
        <div class="settings__btns">
            <button class="btn__start btn btn_g">START</button>
            <button class="btn__reset btn btn_g">reset</button>
            <button class="btn__generate btn">generate cat</button>
        </div>


    </div>`;
  }
  render(): HTMLElement {
    this.createGameArea();

    this.createMain();
    return this.container;
  }
}
