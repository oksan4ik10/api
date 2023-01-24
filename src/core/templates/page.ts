abstract class Page {
  protected container: HTMLElement;
  protected title: HTMLElement;
  protected subtitle: HTMLElement;
  protected count: HTMLElement;
  protected pageCount: HTMLElement;
  protected btnNext: HTMLElement;
  protected btnPrev: HTMLElement;
  page: number;
  area: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement("div");
    this.area = document.createElement("div");
    this.container.id = id;
    this.title = document.createElement("h1");
    this.subtitle = document.createElement("h3");
    this.count = document.createElement("span");
    this.pageCount = document.createElement("span");
    this.title.className = "title";
    this.subtitle.className = "subtitle";
    this.btnNext = document.createElement("button");
    this.btnPrev = document.createElement("button");
    this.btnNext.className = "btn btn__next";
    this.btnPrev.className = "btn btn__prev";
    this.btnNext.textContent = "Next";
    this.btnPrev.textContent = "Prev";
    this.page = 1;
  }
  async createArea() {
    return;
  }
  createPagination(num: number, limit: number) {
    const btnsPagination = document.createElement("div");
    btnsPagination.className = "pagination";
    btnsPagination.append(this.btnPrev);
    btnsPagination.append(this.btnNext);
    if (num < limit) {
      this.btnNext.setAttribute("disabled", "true");
      this.btnPrev.setAttribute("disabled", "true");
    } else {
      this.btnNext.removeAttribute("disabled");
      this.btnPrev.removeAttribute("disabled");
    }
    return btnsPagination;
  }
  async changePageNext() {
    this.page++;
    await this.createArea();
  }
  async changePagePrev() {
    this.page--;
    if (this.page === 0) {
      this.page = 1;
      return;
    }
    await this.createArea();
  }

  render() {
    return this.container;
  }
}

export default Page;
