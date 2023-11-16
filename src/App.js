import controller from "./domain/controller/controller";

class App {
#controller

  constructor(){
    this.#controller = new controller();  
  }

  async play() {
    await this.#controller.run();
  }
}

module.exports = App;
