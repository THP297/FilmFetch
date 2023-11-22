class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    notifyObservers(ObserversToNotify) {
      ObserversToNotify.forEach(observer => observer.update(this));
    }
  }

export default Subject;