const Subject = require('./subject');

class Observer2 {
  constructor() {
    this._humidity = 10;
    this._observerSpecific = "This is from Observer";
    this._update = this.update;
    Subject.subscribe(this);
  }

  update() {
     this._humidity = this._humidity + Subject.getHumedity();
     console.log('Observer2: Oh I recieved an update, my humidity is now: ' + this._humidity);
  }

}


const observer2 = new Observer2();

module.exports = observer2;
// for every observer, you have to register with the observable
