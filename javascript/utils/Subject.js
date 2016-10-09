
var ObsList = require('./ObserverList');

function Subject() {
    this.observers = new ObsList();
}
Subject.prototype.addObserver = function(obj) {
    this.observers.add(obj);
};
Subject.prototype.removeObserver = function(obj) {
    this.observers.remove(obj);
};
Subject.prototype.notify = function(ctx) {
    for (var i = 0; i < this.observers.count(); i++) {
        this.observers.getObserver(i).update(ctx);
    }
};

module.exports = Subject;
