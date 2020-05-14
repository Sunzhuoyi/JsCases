class PubSub {
    constructor () {
        this.events = {}
    }

    subscribe(event, fn) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(fn);
    }

    publish() {
        var event = Array.prototype.shift.call(arguments);

    }

    remove() {

    }
}