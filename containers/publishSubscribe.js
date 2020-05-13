// 发布订阅模式
function Public() {
    this.handlers = {};
}
Public.prototype = {
    // 订阅事件
    on: function (eventType, handler) {
        var self = this;
        console.log(9, self)
        if (!(eventType in self.handlers)) {
            self.handlers[eventType] = [];
        }
        self.handlers[eventType].push(handler);
    },

    // 触发事件
    emit: function (eventType) {
        var self = this;
        var handleArgs = Array.prototype.slice.call(arguments, 1);
        for(var i = 0; i < self.handlers[eventType].length; i++) {
            self.handlers[eventType][i].apply(self, handleArgs);
        }
    },

    // 删除事件
    off: function (eventType, handler) {
        var currentEvent = this.handlers[eventType];
        // console.log(30, this.handlers, currentEvent);
        var len = 0;
        if (currentEvent) {
            len = currentEvent.length;
            for (var i = len - 1; i >= 0; i--) {
                // console.log(35,currentEvent.toString(), currentEvent[i].toString(), handler.toString());
                if (currentEvent[i] === handler) {
                   //  console.log(36, currentEvent.toString(), i)
                    currentEvent.splice(i, 1);
                }
            }
        }
       // console.log(39, this.handlers);
    },

    // once
    once: function (eventType, callback) {
        this.on(eventType, (...args)=> {
            callback(...args);
            this.off(eventType)
        })
    }
};

var Publisher = new Public();

let test = function (data) {
    console.log("test")
}

// 订阅事件a
Publisher.on("a", function (data) {
    console.log(1 + data);
});

Publisher.on("a", test);
Publisher.on("a", test);
Publisher.on("a", test);

Publisher.off("a", test);
Publisher.off("a", test);
Publisher.off("a", test);

//触发事件a
Publisher.emit("a", "我是第一次调用的参数");

Publisher.emit("a", "我是第二次调用的参数");

Publisher.emit("a", "我是第三次调用的参数");



