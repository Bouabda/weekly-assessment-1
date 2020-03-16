// implement your hashTable data structure

var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
}

//  insertion
HashTable.prototype.insert = function(key, value) {
  
  let index = this.hashFunc(key, this._limit) 
  let bucket = this._storage[index];
  
  for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
      let oldValue = tuple[1];
      tuple[1] = value;
      return oldValue;
    }
  }
  bucket.push([key, value]);
    this._storage.push([index, bucket]);
    this._count++;
};


HashTable.prototype.remove = function(key) {
  let index = this.hashFunc(key, this._limit) 
  let bucket = this._storage[index];
  
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this._count--;
        return tuple[1];
    }
    return undefined ;
  }

};

HashTable.prototype.retrieve = function(key) {
  let index = this.hashFunc(key, this._limit)
  let bucket = this._storage[index];
   
  for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
      return undefined;
    }
  };



HashTable.prototype.hashFunc = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};


HashTable.prototype.resize = function(newLimit) {
};


HashTable.prototype.retrieveAll = function() {
  return this._storage;
};
