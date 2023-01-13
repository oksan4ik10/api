import Page from "../../core/templates/page";

export class Main extends Page {
  constructor(id: string) {
    super(id);
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


    </div>

    <div class="garage__game game">
        <h1 class="game__title title">garage <span>(104)</span></h1>
        <h3 class="game__subtitle subtitle">Page <span>#1</span></h3>
        <div class="game__cats cats">
            <div class="cats__item cat">
                <div class="cat__btns">
                    <button class="btn btn__select">select</button>
                    <button class="btn btn__remove">remove</button>
                    <p class="cat__name">Tesla</p>
                </div>
                <div class="cat__block">
                    <div class="cat__area">
                        <button class="cat__start cat__btn active">A</button>
                        <button class="cat__stop cat__btn">B</button>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" fill="#FF0000">
                            <g>
                                    .st0{fill:#fff}.st1{fill:none;stroke:#231f20;stroke-width:50;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}
                                </style>
                                <path class="st0" d="M553.9 820.9s-137.5-53.7-137.5-234.6c0-140.3 82.6-144.2 119.8-138.9 11.5 1.6 22.9-3.1 29.9-12.4 13.1-17.4 5.1-42.6-15.6-49.2-69.6-22.2-206.7-35-222.6 200.5 0 0-12.2 165.7 131.4 310.2L425.7 1101s-43.3 83.6-98 111.1-104.1 250.5-104.1 250.5l128.6 90.8s49.8-67.1-23.5-113c8 4.3 13.8-132.9 85-159.9C499.4 1248 548 1230 548 1230l-15.3 129.4 85.5 186.1H774s26.6-99.4-84.2-70.3c0 0-62.5-30.9-50.3-95.1 12.2-64.2 61.1-64.9 91.7-150.1h287.2s-5 144-51.4 195.9v119.5h158.3s-7.2-80.3-85.3-71.4c0 0 45.6-204 128.1-228.4l103.9 3.1 51.9 70.3 232.6 226.4h140.2s0-96-105.5-77.2c0 0-172.5-201.9-169.5-238.2s-6.1-227.7 85.5-278.7h94.7l48.9-54.8-51.9-66.4s-12.2-58.4-85.5-65.9l-3.1-84.9-73.3 84.9s-70.3 4.8-171.1 105.6c0 0-375.8-52.5-397.2-67.5-.1 0-203.1-38.9-314.8 18.6z" id="Layer_2"/>
                                <path class="st1" d="M553.9 820.9s-137.5-53.7-137.5-234.6c0-140.3 82.6-144.2 119.8-138.9 11.5 1.6 22.9-3.1 29.9-12.4 13.1-17.4 5.1-42.6-15.6-49.2-69.6-22.2-206.7-35-222.6 200.5 0 0-12.2 165.7 131.4 310.2L425.7 1101s-43.3 83.6-98 111.1-104.1 250.5-104.1 250.5l128.6 90.8s49.8-67.1-23.5-113c8 4.3 13.8-132.9 85-159.9C499.4 1248 548 1230 548 1230l-15.3 129.4 85.5 186.1H774s26.6-99.4-84.2-70.3c0 0-62.5-30.9-50.3-95.1 12.2-64.2 61.1-64.9 91.7-150.1h287.2s-5 144-51.4 195.9v119.5h158.3s-7.2-80.3-85.3-71.4c0 0 45.6-204 128.1-228.4l103.9 3.1 51.9 70.3 232.6 226.4h140.2s0-96-105.5-77.2c0 0-172.5-201.9-169.5-238.2s-6.1-227.7 85.5-278.7h94.7l48.9-54.8-51.9-66.4s-12.2-58.4-85.5-65.9l-3.1-84.9-73.3 84.9s-70.3 4.8-171.1 105.6c0 0-375.8-52.5-397.2-67.5-.1 0-203.1-38.9-314.8 18.6z" id="STROKES"/>
                                <g>
                            </svg>
                    </div>
                    <img src="./assets/img/finish.png" alt="finish" class="cat__finish">

                </div>

                
            </div>
            <div class="cats__item cat">
                <div class="cat__btns">
                    <button class="btn btn__select">select</button>
                    <button class="btn btn__remove">remove</button>
                    <p class="cat__name">Tesla</p>
                </div>
                <div class="cat__block">
                    <div class="cat__area">
                        <button class="cat__start cat__btn active">A</button>
                        <button class="cat__stop cat__btn">B</button>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" fill="#FF0000">
                            <g>
                                    .st0{fill:#fff}.st1{fill:none;stroke:#231f20;stroke-width:50;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}
                                </style>
                                <path class="st0" d="M553.9 820.9s-137.5-53.7-137.5-234.6c0-140.3 82.6-144.2 119.8-138.9 11.5 1.6 22.9-3.1 29.9-12.4 13.1-17.4 5.1-42.6-15.6-49.2-69.6-22.2-206.7-35-222.6 200.5 0 0-12.2 165.7 131.4 310.2L425.7 1101s-43.3 83.6-98 111.1-104.1 250.5-104.1 250.5l128.6 90.8s49.8-67.1-23.5-113c8 4.3 13.8-132.9 85-159.9C499.4 1248 548 1230 548 1230l-15.3 129.4 85.5 186.1H774s26.6-99.4-84.2-70.3c0 0-62.5-30.9-50.3-95.1 12.2-64.2 61.1-64.9 91.7-150.1h287.2s-5 144-51.4 195.9v119.5h158.3s-7.2-80.3-85.3-71.4c0 0 45.6-204 128.1-228.4l103.9 3.1 51.9 70.3 232.6 226.4h140.2s0-96-105.5-77.2c0 0-172.5-201.9-169.5-238.2s-6.1-227.7 85.5-278.7h94.7l48.9-54.8-51.9-66.4s-12.2-58.4-85.5-65.9l-3.1-84.9-73.3 84.9s-70.3 4.8-171.1 105.6c0 0-375.8-52.5-397.2-67.5-.1 0-203.1-38.9-314.8 18.6z" id="Layer_2"/>
                                <path class="st1" d="M553.9 820.9s-137.5-53.7-137.5-234.6c0-140.3 82.6-144.2 119.8-138.9 11.5 1.6 22.9-3.1 29.9-12.4 13.1-17.4 5.1-42.6-15.6-49.2-69.6-22.2-206.7-35-222.6 200.5 0 0-12.2 165.7 131.4 310.2L425.7 1101s-43.3 83.6-98 111.1-104.1 250.5-104.1 250.5l128.6 90.8s49.8-67.1-23.5-113c8 4.3 13.8-132.9 85-159.9C499.4 1248 548 1230 548 1230l-15.3 129.4 85.5 186.1H774s26.6-99.4-84.2-70.3c0 0-62.5-30.9-50.3-95.1 12.2-64.2 61.1-64.9 91.7-150.1h287.2s-5 144-51.4 195.9v119.5h158.3s-7.2-80.3-85.3-71.4c0 0 45.6-204 128.1-228.4l103.9 3.1 51.9 70.3 232.6 226.4h140.2s0-96-105.5-77.2c0 0-172.5-201.9-169.5-238.2s-6.1-227.7 85.5-278.7h94.7l48.9-54.8-51.9-66.4s-12.2-58.4-85.5-65.9l-3.1-84.9-73.3 84.9s-70.3 4.8-171.1 105.6c0 0-375.8-52.5-397.2-67.5-.1 0-203.1-38.9-314.8 18.6z" id="STROKES"/>
                                <g>
                            </svg>
                    </div>

                    <svg version="1.1" viewBox="0 0 3300 3300"  xmlns="http://www.w3.org/2000/svg" fill="red" class="cat__finish"><defs></defs><g id="Layer_x0020_1"><g id="_221226120"><path class="fil0" d="M2708 1083l-2116 0c0,584 474,1058 1058,1058 584,0 1058,-474 1058,-1058z"/><path class="fil0" d="M1317 2071l652 0 53 98c38,55 -18,49 -119,47 -119,-3 -211,0 -306,0 -79,0 -159,1 -258,0 -83,-1 -100,6 -54,-85l32 -60z"/><path class="fil1" d="M1650 2071l0 -987 -1058 0c0,465 300,860 717,1002l8 -14 333 0z"/><path class="fil1" d="M1650 2071l-333 0 -8 14 -25 45c-46,91 -29,84 54,85 99,1 179,0 258,0 18,0 35,0 53,0l0 -74 0 -70z"/></g></g></svg>
                    <!-- <img src="./assets/img/finish.png" alt="finish" class="cat__finish"> -->

                </div>

                
            </div>
            <div class="cats__item cat">
                <div class="cat__btns">
                    <button class="btn btn__select">select</button>
                    <button class="btn btn__remove">remove</button>
                    <p class="cat__name">Tesla</p>
                </div>
                <div class="cat__block">
                    <div class="cat__area">
                        <button class="cat__start cat__btn active">A</button>
                        <button class="cat__stop cat__btn">B</button>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" fill="#FF0000">
                            <g>
                                    .st0{fill:#fff}.st1{fill:none;stroke:#231f20;stroke-width:50;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}
                                </style>
                                <path class="st0" d="M553.9 820.9s-137.5-53.7-137.5-234.6c0-140.3 82.6-144.2 119.8-138.9 11.5 1.6 22.9-3.1 29.9-12.4 13.1-17.4 5.1-42.6-15.6-49.2-69.6-22.2-206.7-35-222.6 200.5 0 0-12.2 165.7 131.4 310.2L425.7 1101s-43.3 83.6-98 111.1-104.1 250.5-104.1 250.5l128.6 90.8s49.8-67.1-23.5-113c8 4.3 13.8-132.9 85-159.9C499.4 1248 548 1230 548 1230l-15.3 129.4 85.5 186.1H774s26.6-99.4-84.2-70.3c0 0-62.5-30.9-50.3-95.1 12.2-64.2 61.1-64.9 91.7-150.1h287.2s-5 144-51.4 195.9v119.5h158.3s-7.2-80.3-85.3-71.4c0 0 45.6-204 128.1-228.4l103.9 3.1 51.9 70.3 232.6 226.4h140.2s0-96-105.5-77.2c0 0-172.5-201.9-169.5-238.2s-6.1-227.7 85.5-278.7h94.7l48.9-54.8-51.9-66.4s-12.2-58.4-85.5-65.9l-3.1-84.9-73.3 84.9s-70.3 4.8-171.1 105.6c0 0-375.8-52.5-397.2-67.5-.1 0-203.1-38.9-314.8 18.6z" id="Layer_2"/>
                                <path class="st1" d="M553.9 820.9s-137.5-53.7-137.5-234.6c0-140.3 82.6-144.2 119.8-138.9 11.5 1.6 22.9-3.1 29.9-12.4 13.1-17.4 5.1-42.6-15.6-49.2-69.6-22.2-206.7-35-222.6 200.5 0 0-12.2 165.7 131.4 310.2L425.7 1101s-43.3 83.6-98 111.1-104.1 250.5-104.1 250.5l128.6 90.8s49.8-67.1-23.5-113c8 4.3 13.8-132.9 85-159.9C499.4 1248 548 1230 548 1230l-15.3 129.4 85.5 186.1H774s26.6-99.4-84.2-70.3c0 0-62.5-30.9-50.3-95.1 12.2-64.2 61.1-64.9 91.7-150.1h287.2s-5 144-51.4 195.9v119.5h158.3s-7.2-80.3-85.3-71.4c0 0 45.6-204 128.1-228.4l103.9 3.1 51.9 70.3 232.6 226.4h140.2s0-96-105.5-77.2c0 0-172.5-201.9-169.5-238.2s-6.1-227.7 85.5-278.7h94.7l48.9-54.8-51.9-66.4s-12.2-58.4-85.5-65.9l-3.1-84.9-73.3 84.9s-70.3 4.8-171.1 105.6c0 0-375.8-52.5-397.2-67.5-.1 0-203.1-38.9-314.8 18.6z" id="STROKES"/>
                                <g>
                            </svg>
                    </div>
                    <img src="./assets/img/finish.png" alt="finish" class="cat__finish">

                </div>

                
            </div>
        </div>

    </div>
</div>`;
  }
  render(): HTMLElement {
    this.createMain();
    return this.container;
  }
}
