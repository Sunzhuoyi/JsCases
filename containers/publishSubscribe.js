// 发布订阅模式
function Public() {
    this.handlers = {};
}
Public.prototype = {
    // 订阅事件
    on: function (eventType, handler) {
        if (!(eventType in this.handlers)) {
            this.handlers[eventType] = [];
        }
        this.handlers[eventType].push(handler);
    },

    // 触发事件
    emit: function (eventType) {
        console.log(this,this.handlers);
        var handleArgs = Array.prototype.slice.call(arguments, 1);
        console.log("handleArgs", handleArgs);
        for(var i = 0; i < this.handlers[eventType].length; i++) {
            this.handlers[eventType][i].apply(this, handleArgs);
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



