import Component from "../../templates/component";
import { PageIds } from "../../../pages/app";

export class Header extends Component {
  btnGarage: HTMLElement;
  btnWin: HTMLElement;
  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.btnGarage = document.createElement("button");
    this.btnWin = document.createElement("button");
  }
  createGarage() {
    window.location.hash = PageIds.MainPage;
  }
  createWin() {
    window.location.hash = PageIds.WinPage;
  }
  createHeader() {
    const btns = document.createElement("div");
    btns.className = "header__btns";
    this.btnGarage.className = "btn btn__garage btn_g";
    this.btnWin.className = "btn btn__win btn_g";
    this.btnGarage.textContent = "shelter";
    this.btnWin.textContent = "winner";
    btns.append(this.btnGarage);
    btns.append(this.btnWin);
    return btns;
  }
  render() {
    this.container.append(this.createHeader());
    this.btnGarage.addEventListener("click", this.createGarage);
    this.btnWin.addEventListener("click", this.createWin);
    return this.container;
  }
}
