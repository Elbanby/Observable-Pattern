const List = require('./List.js');

class Subject {

  // List of all observers. Removing is O(n).
  constructor() {
    this.observers = new List();
    this.stateChange = false;
    this._humidity = 10;
  }

  // Register observers (Add)
  subscribe(observer) {
    this.observers.add(observer);
  }

  // Remove observer (remove)
  unSubscribe(observer) {
    this.observers.remove(observer);
  }

  // SetState (Flags that there is an update available)
  setState() {
    this.negateState();
  }

  // Getters (Pull pattern)
  update() {
    console.log('I should update everyone now ');
    if (!this.stateChange) return null;
    this.observers.itterate((key,value)=>{
      value.update();
    });
  }

  getHumedity() {
    return this._humidity;
  }

  setHumedity(value) {
    this._humidity = value;
    this.negateState();
    this.update();
    this.negateState();
  }

  negateState() {
    this.stateChange = !this.stateChange;
  }

}

const subject = new Subject();

module.exports = subject;
