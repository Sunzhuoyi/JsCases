class PubSub {
    constructor () {
        this.events = {}
    }

    subscribe(event, fn) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(fn);
    }

    publish() {
        let event = Array.prototype.shift.call(arguments);
        let handles = this.events[event];
        let length = handles.length;
        for (var i = 0; i < length; i++ ) {
                handles[i].apply(this, arguments)
        }
    }

    remove(event, fn) {
        let handles = this.events[event];
        if (!handles) return;
        if (!fn) this.events[event] = [];

        for (var i = 0; i < handles.length; i++) {
            if (handles[i] === fn) {
                handles.slice(i, 1)
            }
        }
    }
}

let pubsub = new PubSub();
pubsub.subscribe('eventOne', function () {
    console.log('eventone')
});

function test() {
    console.log('eventOne otherone');
}

pubsub.subscribe('eventOne', test);

pubsub.subscribe('eventTwo', function (data) {
    console.log(data);
});

pubsub.remove('eventOne', test);

pubsub.publish('eventOne');
pubsub.publish('eventTwo', { message: 'hello' });