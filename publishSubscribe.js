function Public() {
    this.handlers = {};
}
Public.prototype = {
    // 订阅事件
    on: function (eventType, handler) {
        var self = this;
        if (!(eventType in self.handlers)) {
            self.handlers[eventType] = [];
        }
        self.handlers[eventType].push(handler);
        return this;
    },

    // 触发事件
    emit: function (eventType) {
        var self = this;
        var handleArgs = Array.prototype.slice.call(arguments, 1);
        for(var i = 0; i < self.handlers[eventType].length; i++) {
            self.handlers[eventType][i].apply(self, handleArgs);
        }

        return self;
    },

    // 删除事件
    off: function (eventType, handler) {
        var currentEvent = this.handlers[eventType];
        var len = 0;
        if (currentEvent) {
            len = currentEvent.length;
            for (var i = len - 1; i >= 0; i--) {
                if (currentEvent[i] === handler) {
                    currentEvent.splice(i, 1);
                }
            }
        }
        return this;
    }
};

var Publisher = new Public();

// 订阅事件a
Publisher.on("a", function (data) {
    console.log(1 + data);
});

Publisher.on("a", function (data) {
    console.log(2 + data);
});

//触发事件a
Publisher.emit("a", "我是第一次调用的参数");
Publisher.emit("a", "我是第二次调用的参数");


