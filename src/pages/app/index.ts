import Page from "../../core/templates/page";
import { Header } from "../../core/components/header/header";
import { Main } from "../garage";
import { Win } from "../win";

export const enum PageIds {
  MainPage = "garage",
  WinPage = "win",
}

export class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId = "current-page";

  header: Header;
  static renderPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.MainPage) {
      page = new Main(idPage);
    } else if (idPage === PageIds.WinPage) {
      page = new Win(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      console.log(page);

      App.container.append(pageHTML);
    }
  }

  constructor() {
    this.header = new Header("header", "header");
  }
  private enableRouteChange() {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderPage(hash);
    });
  }
  run() {
    App.container.append(this.header.render());
    App.renderPage(PageIds.MainPage);
    this.enableRouteChange();
  }
}
