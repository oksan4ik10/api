import Page from "../../core/templates/page";
import { Api } from "../../core/components/api/api";
import { App } from "../app";
import { ICat } from "../../types/types";
import { IWinner } from "../../types/types";
import { Cat } from "../../core/components/main/cat";

export class Win extends Page {
  thead: HTMLElement;
  sort: string;
  order: string;
  constructor(id: string) {
    super(id);
    this.page = App.pageWinCreate;
    this.thead = document.createElement("thead");
    this.sort = "id";
    this.order = "asc";
  }
  createTableHead() {
    this.thead.textContent = "";
    const tr = document.createElement("tr");
    const thN = document.createElement("th");
    thN.textContent = "Num";
    tr.append(thN);
    const thCat = document.createElement("th");
    thCat.textContent = "Cat";
    tr.append(thCat);
    const thName = document.createElement("th");
    thName.textContent = "Name";
    tr.append(thName);
    const thWins = document.createElement("th");
    thWins.textContent = "Wins";
    thWins.id = "wins";
    thWins.className = `table__sort ${this.order}`;
    tr.append(thWins);
    const thTime = document.createElement("th");
    thTime.textContent = "Best time(sec)";
    thTime.id = "time";
    thTime.className = `table__sort ${this.order}`;
    tr.append(thTime);
    this.thead.append(tr);
    return this.thead;
  }
  createRowTable(obj: ICat, objW: IWinner) {
    const objWC = Object.assign(obj, objW);
    const tr = document.createElement("tr");
    const arr = ["id", "color", "name", "wins", "time"];
    arr.forEach((item) => {
      const td = document.createElement("td");
      if (item === "color") td.innerHTML = Cat.catImg(objWC[item]);
      if (
        item === "id" ||
        item === "name" ||
        item === "wins" ||
        item === "time"
      )
        td.textContent = String(objWC[item]);
      tr.append(td);
    });
    return tr;
  }
  async createArea() {
    this.area.className = "winners";
    this.title.classList.add("winners__title");
    this.subtitle.classList.add("winners__subtitle");
    const commits = await Api.getWinners(10, this.page, this.sort, this.order);
    //await Api.createWin();

    if (commits.winners.length === 0) {
      this.container.textContent = "Winners not found";
      return;
    }
    App.pageWinCreate = this.page;
    const count = commits.count;
    this.area.textContent = "";
    this.subtitle.textContent = "Page #";
    this.title.textContent = "Winners ";
    this.count.textContent = `(${count})`;
    this.pageCount.textContent = String(this.page);
    this.title.append(this.count);
    this.subtitle.append(this.pageCount);
    this.area.append(this.title);
    this.area.append(this.subtitle);
    this.container.append(this.area);
    const table = document.createElement("table");
    table.className = "table winners__table";

    table.append(this.createTableHead());
    const tBody = document.createElement("tbody");

    commits.winners.forEach(async (item) => {
      const res = await Api.getCat(item.id);
      tBody.append(this.createRowTable(res, item));
    });
    table.append(tBody);
    this.area.append(table);
  }
  sortWinners(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.matches(".table__sort")) return;
    this.sort = target.id;
    if (target.matches(".asc")) this.order = "desc";
    else this.order = "asc";
    this.createArea();
  }
  render(): HTMLElement {
    this.createArea();
    this.thead.addEventListener("click", this.sortWinners.bind(this));
    return this.container;
  }
}
