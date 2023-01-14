abstract class Page {
  protected container: HTMLElement;
  protected title: HTMLElement;
  protected subtitle: HTMLElement;
  protected count: HTMLElement;
  protected pageCount: HTMLElement;
  protected btnNext: HTMLElement;
  protected btnPrev: HTMLElement;
  page: number;

  constructor(id: string) {
    this.container = document.createElement("div");
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
  test() {
    console.log(12);
  }
  changePage() {
    console.log(34);

    //method();
  }

  render() {
    console.log(this.btnNext);
    console.log(34);

    return this.container;
  }
}

export default Page;
