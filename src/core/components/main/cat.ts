import Component from "../../templates/component";
import { Api } from "../api/api";
import { IDriveCat } from "../../../types/types";

export class Cat extends Component {
  name: string;
  color: string;
  id: number;
  btnA: HTMLElement;
  btnB: HTMLElement;
  static catImg(color: string) {
    return `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" fill="${color}" class="cat__img">
    <g>
            .st0{fill:#fff}.st1{fill:none;stroke:#231f20;stroke-width:50;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}
        </style>
        <path class="st0" d="M553.9 820.9s-137.5-53.7-137.5-234.6c0-140.3 82.6-144.2 119.8-138.9 11.5 1.6 22.9-3.1 29.9-12.4 13.1-17.4 5.1-42.6-15.6-49.2-69.6-22.2-206.7-35-222.6 200.5 0 0-12.2 165.7 131.4 310.2L425.7 1101s-43.3 83.6-98 111.1-104.1 250.5-104.1 250.5l128.6 90.8s49.8-67.1-23.5-113c8 4.3 13.8-132.9 85-159.9C499.4 1248 548 1230 548 1230l-15.3 129.4 85.5 186.1H774s26.6-99.4-84.2-70.3c0 0-62.5-30.9-50.3-95.1 12.2-64.2 61.1-64.9 91.7-150.1h287.2s-5 144-51.4 195.9v119.5h158.3s-7.2-80.3-85.3-71.4c0 0 45.6-204 128.1-228.4l103.9 3.1 51.9 70.3 232.6 226.4h140.2s0-96-105.5-77.2c0 0-172.5-201.9-169.5-238.2s-6.1-227.7 85.5-278.7h94.7l48.9-54.8-51.9-66.4s-12.2-58.4-85.5-65.9l-3.1-84.9-73.3 84.9s-70.3 4.8-171.1 105.6c0 0-375.8-52.5-397.2-67.5-.1 0-203.1-38.9-314.8 18.6z" id="Layer_2"/>
        <path class="st1" d="M553.9 820.9s-137.5-53.7-137.5-234.6c0-140.3 82.6-144.2 119.8-138.9 11.5 1.6 22.9-3.1 29.9-12.4 13.1-17.4 5.1-42.6-15.6-49.2-69.6-22.2-206.7-35-222.6 200.5 0 0-12.2 165.7 131.4 310.2L425.7 1101s-43.3 83.6-98 111.1-104.1 250.5-104.1 250.5l128.6 90.8s49.8-67.1-23.5-113c8 4.3 13.8-132.9 85-159.9C499.4 1248 548 1230 548 1230l-15.3 129.4 85.5 186.1H774s26.6-99.4-84.2-70.3c0 0-62.5-30.9-50.3-95.1 12.2-64.2 61.1-64.9 91.7-150.1h287.2s-5 144-51.4 195.9v119.5h158.3s-7.2-80.3-85.3-71.4c0 0 45.6-204 128.1-228.4l103.9 3.1 51.9 70.3 232.6 226.4h140.2s0-96-105.5-77.2c0 0-172.5-201.9-169.5-238.2s-6.1-227.7 85.5-278.7h94.7l48.9-54.8-51.9-66.4s-12.2-58.4-85.5-65.9l-3.1-84.9-73.3 84.9s-70.3 4.8-171.1 105.6c0 0-375.8-52.5-397.2-67.5-.1 0-203.1-38.9-314.8 18.6z" id="STROKES"/>
        <g>
    </svg>`;
  }
  static finishImg(color: string) {
    return `<svg version="1.1" viewBox="0 0 3300 3300"  xmlns="http://www.w3.org/2000/svg" fill="${color}"><defs></defs><g id="Layer_x0020_1"><g id="_221226120"><path class="fil0" d="M2708 1083l-2116 0c0,584 474,1058 1058,1058 584,0 1058,-474 1058,-1058z"/><path class="fil0" d="M1317 2071l652 0 53 98c38,55 -18,49 -119,47 -119,-3 -211,0 -306,0 -79,0 -159,1 -258,0 -83,-1 -100,6 -54,-85l32 -60z"/><path class="fil1" d="M1650 2071l0 -987 -1058 0c0,465 300,860 717,1002l8 -14 333 0z"/><path class="fil1" d="M1650 2071l-333 0 -8 14 -25 45c-46,91 -29,84 54,85 99,1 179,0 258,0 18,0 35,0 53,0l0 -74 0 -70z"/></g></g></svg>`;
  }
  constructor(
    tagName: string,
    className: string,
    name: string,
    color: string,
    id: number
  ) {
    super(tagName, className);
    this.name = name;
    this.color = color;
    this.id = id;
    this.btnA = document.createElement("button");
    this.btnB = document.createElement("button");
  }
  createCat() {
    this.btnB.setAttribute("disabled", "true");

    this.container.setAttribute("id", String(this.id));
    this.container.innerHTML = `
    <div class="cat__btns">
        <button class="btn btn__select">select</button>
        <button class="btn btn__remove">remove</button>
        <p class="cat__name">${this.name}</p>
    </div>`;
    const catBlock = document.createElement("div");
    catBlock.className = "cat__block";
    const catArea = document.createElement("div");
    catArea.className = "cat__area";
    this.btnA.className = "cat__start cat__btn active";
    this.btnB.className = "cat__stop cat__btn";
    this.btnA.textContent = "A";
    this.btnB.textContent = "B";
    catArea.append(this.btnA);
    catArea.append(this.btnB);
    const cat = document.createElement("div");
    cat.innerHTML = Cat.catImg(this.color);
    catArea.append(cat);
    catBlock.append(catArea);
    const finish = document.createElement("div");
    finish.className = "cat__finish";
    finish.innerHTML = Cat.finishImg(this.color);
    catBlock.append(finish);
    this.container.append(catBlock);
  }
  startPromiseCat() {
    return Api.startCat(this.id, this.name, "started");
  }
  drivePromiseCat() {
    return Api.startCat(this.id, this.name, "drive");
  }
  async clickABtn() {
    const res = await this.startPromiseCat();
    this.row(res);
  }
  async row(resStart: IDriveCat) {
    this.btnA.setAttribute("disabled", "true");
    this.btnB.removeAttribute("disabled");

    const duration = resStart.distance / resStart.velocity;
    const start = performance.now();
    const cat = this.container.querySelector("svg");
    let catX = 0;
    if (cat) {
      catX =
        100 -
        ((cat.getBoundingClientRect().x + 100) / window.screen.availWidth) *
          100;
    }
    let idAnimation: number;

    idAnimation = requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      const progress = timeFraction;
      if (cat) cat.style.right = `calc(${catX}% - ${progress * catX}%)`;
      if (timeFraction < 1) {
        idAnimation = requestAnimationFrame(animate);
      }
    });
    const resDrive = await this.drivePromiseCat();

    if (!resDrive) {
      cancelAnimationFrame(idAnimation);
    }
  }
  async stop() {
    await Api.startCat(this.id, this.name, "stopped");
    this.container.textContent = "";
    this.btnA.removeAttribute("disabled");
    this.createCat();
  }
  render() {
    this.createCat();
    this.btnA.addEventListener("click", this.clickABtn.bind(this));
    this.btnB.addEventListener("click", this.stop.bind(this));

    return this.container;
  }
}
