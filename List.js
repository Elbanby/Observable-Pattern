function List(capacity = 1000) {
  this._count = 0;
  this._capacity = capacity;
  this._storage = {};
}

List.prototype.add = function(obj) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = obj;
    return this._storage;
  }
  return "List is full, can't add any more items"
}

List.prototype.remove = function(obj) {
  for(key in this._storage) {
    let value = this._storage[key];
    if (value === obj) delete this._storage[key];
    return {key, value};
  }
}

List.prototype.itterate = function(fn) {
  for(key in this._storage) {
    let value = this._storage[key];
    fn(key,value);
  }
}

module.exports = List;
