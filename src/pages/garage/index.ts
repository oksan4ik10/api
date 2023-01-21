import Page from "../../core/templates/page";
import { App } from "../app";
import { Cat } from "../../core/components/main/cat";
import { ICat } from "../../types/types";
import { Api } from "../../core/components/api/api";
import { FormCat } from "../../core/components/main/form";
import { ICreateCat } from "../../types/types";
import { IDriveCat } from "../../types/types";
import { IWinnerCatRace } from "../../types/types";
import { IWinner } from "../../types/types";
export class Main extends Page {
  cats: Cat[];
  areaCats: HTMLElement;
  formCreate: FormCat;
  formUpdate: FormCat;
  btnGenerate: HTMLElement;
  btnReset: HTMLElement;
  btnLunch: HTMLElement;
  modal: HTMLElement;
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

    this.btnGenerate = document.createElement("button");
    this.btnLunch = document.createElement("button");
    this.btnReset = document.createElement("button");

    this.modal = document.createElement("div");
  }

  async createArea() {
    this.area.className = "game";
    this.title.classList.add("game__title");
    this.subtitle.classList.add("game__subtitle");
    const commits = await Api.getCats(7, this.page);
    if (Number(commits.count) <= 1) {
      this.area.textContent = "Not hungry cats. Create cat";
      this.btnLunch.setAttribute("disabled", "true");
      return;
    }
    if (commits.cats.length === 0) return;
    this.cats = [];
    this.btnLunch.removeAttribute("disabled");
    this.formCreate.btn.removeAttribute("disabled");
    this.btnGenerate.removeAttribute("disabled");
    App.pageCreate = this.page;
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
      this.cats.push(el);
      this.areaCats.append(el.render());
    });
    this.area.append(this.areaCats);
    await this.area.append(this.createPagination(Number(count), 7));
  }

  createMain() {
    const blockSettings = document.createElement("div");
    blockSettings.className = "settings";
    blockSettings.append(this.formCreate.render());
    blockSettings.append(this.formUpdate.render());
    this.formCreate.inputText.value = App.formCreateInput;
    this.formCreate.color.value = App.formCreateColor;
    if (!App.formUpdateInput) this.formUpdate.setDisabled("true");
    else {
      this.formUpdate.inputText.value = App.formUpdateInput;
      this.formUpdate.color.value = App.formUpdateColor;
    }
    const el = document.createElement("div");
    el.className = "settings__btns";
    this.btnGenerate.className = "btn__generate btn";
    this.btnGenerate.removeAttribute("disabled");
    this.btnGenerate.textContent = "generate cat";
    this.btnLunch.className = "btn__lunch btn btn_g";
    this.btnLunch.textContent = "Lunch";
    this.btnReset.className = "btn__reset btn btn_g";
    this.btnReset.textContent = "reset";
    this.btnReset.setAttribute("disabled", "true");
    el.append(this.btnLunch);
    el.append(this.btnReset);
    el.append(this.btnGenerate);
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
    this.formCreate.container.reset();
    App.formCreateColor = "";
    App.formCreateInput = "";
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
  async updateCat(id: number, obj: ICreateCat) {
    await Api.update(id, obj);
  }
  updateCatBtn(e: Event) {
    e.preventDefault();
    const id = App.formUpdateId;
    const text = this.formUpdate.inputText.value;
    if (!text) return;
    const color = this.formUpdate.color.value;
    if (!color) return;
    this.updateCat(Number(id), { name: text, color: color });
    this.formUpdate.container.reset();
    this.formUpdate.setDisabled("true");
    this.createArea();
    App.formUpdateColor = "";
    App.formUpdateInput = "";
    App.formUpdateId = "";
  }
  async btnSelect() {
    const cat: ICat = await Api.getCat(Number(App.formUpdateId));
    this.formUpdate.setDisabled("false");
    this.formUpdate.btn.id = String(cat.id);
    this.formUpdate.inputText.value = cat.name;
    this.formUpdate.color.value = cat.color;
    App.formUpdateColor = this.formUpdate.color.value;
    App.formUpdateInput = this.formUpdate.inputText.value;
  }
  async btnRemove(id: string) {
    await Api.delete(Number(id));
    this.createArea();
  }
  btnsCat(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.matches(".btn")) return;
    const id = target.closest(".cat")?.getAttribute("id");
    if (id) {
      if (target.matches(".btn__select")) {
        App.formUpdateId = id;
        this.btnSelect();
      } else {
        return this.btnRemove(id);
      }
    }
  }
  async startGame() {
    this.btnLunch.setAttribute("disabled", "true");
    this.btnNext.setAttribute("disabled", "true");
    this.btnPrev.setAttribute("disabled", "true");
    this.btnGenerate.setAttribute("disabled", "true");
    this.formCreate.btn.setAttribute("disabled", "true");
    const arrCatsPromise: PromiseSettledResult<IDriveCat>[] = await Promise.allSettled(
      this.cats.map((item) => item.startPromiseCat())
    );

    const res = await Promise.any(
      arrCatsPromise.map((item, index) => {
        if (item.status === "fulfilled")
          return this.cats[index].row(item.value);
      })
    );
    this.btnReset.removeAttribute("disabled");
    if (res) {
      this.createModal(res);
      this.addWinner(res);
    }
  }
  async addWinner(obj: IWinnerCatRace) {
    const res: IWinner | undefined = await Api.getWin(obj.cat.id, obj.cat.name);
    let resTime: number;
    if (!res) {
      await Api.createWin({ id: obj.cat.id, time: Number(obj.time), wins: 1 });
    } else {
      resTime = res.time;
      if (resTime > Number(obj.time)) resTime = Number(obj.time);
      await Api.updateWin({
        id: obj.cat.id,
        time: resTime,
        wins: ++res.wins,
      });
    }
  }
  createModal(obj: IWinnerCatRace) {
    this.modal.textContent = "";
    this.modal.className = "modal active";
    const wrapper = document.createElement("div");
    wrapper.className = "modal__wrapper";
    const title = document.createElement("h2");
    title.textContent = `${obj.cat.name} ate first (${obj.time} s)`;
    wrapper.append(title);
    this.modal.append(wrapper);
    this.areaCats.append(this.modal);
  }
  async resetGame() {
    this.btnReset.setAttribute("disabled", "true");
    await Promise.allSettled(this.cats.map((item) => item.stopCat()));
    this.cats.forEach((item) => item.btnA.removeAttribute("disabled"));
    this.btnLunch.removeAttribute("disabled");
    this.createArea();
  }

  render() {
    this.createMain();
    this.createArea();
    this.container.append(this.area);
    this.formCreate.btn.addEventListener("click", this.createCatBtn.bind(this));
    this.btnNext.addEventListener("click", this.changePageNext.bind(this));
    this.btnPrev.addEventListener("click", this.changePagePrev.bind(this));
    this.btnGenerate.addEventListener("click", this.generateCat.bind(this));
    this.areaCats.addEventListener("click", this.btnsCat.bind(this));
    this.formUpdate.btn.addEventListener("click", this.updateCatBtn.bind(this));
    this.btnLunch.addEventListener("click", this.startGame.bind(this));
    this.btnReset.addEventListener("click", this.resetGame.bind(this));
    return this.container;
  }
}
