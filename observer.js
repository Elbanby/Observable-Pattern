const Subject = require('./subject');

class Observer {
  constructor() {
    this._humidity = 0;
    this._observerSpecific = "This is from Observer";
    this._update = this.update;
    Subject.subscribe(this);
  }

  update() {
     this._humidity = Subject.getHumedity();
     console.log('Observer1: Oh I recieved an update, my humidity is now: ' + this._humidity);
  }

}

const ob = new Observer();

module.exports = ob;
