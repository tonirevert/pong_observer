function ObserverList() {
    this.observerList = [];
}
//Add observer to the list function
ObserverList.prototype.add = function(observer) {
    this.observerList.push(observer);
};
//Remove observer from the list funcion
ObserverList.prototype.remove = function(observer){
  this.observerList.splice(this.indexOf(observer),1);
};
//Return the count of observers
ObserverList.prototype.count = function() {
    return this.observerList.length;
};
//Search the observer position
ObserverList.prototype.indexOf = function(observer) {
    for (var i = 0; i < this.observerList.length; i++) {
        if (this.observerList[i] === observer) {
            return i;
        }
    }
};
//Returns an observer from its position
ObserverList.prototype.getObserver = function(index) {
    return this.observerList[index];
};

module.exports = ObserverList;
