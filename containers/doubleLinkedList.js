// 使用对象设计双链表
class MyLinkedList {
    constructor () {
        this.data = null
    }
    get (index) {
        if (index < 0) return -1;
        let curr = this.data
        while (index > 0 && curr) {
            curr = curr.next;
            index--
        }
        return curr ? curr.val : -1
    }

    addAtHead(val) {
        this.data = {
            val, next: this.data, prev:null
        }
        if (this.data.next) this.data.next.prev = this.data
    }

    addAtTail(val) {
        if (this.data) {
            let curr = this.data;
            while (curr.next) {
                curr = curr.next
            }
            curr.next = {val, next: null, prev: curr}
        } else {
            this.data = {val, next: null, prev: null}
        }
    }

    addAtIndex (index, val) {
        if (index <= 0) return this.addAtIndex(val)
        let curr = this.data;
        for (let i = 0; i < index -1 ; i++) {
            if (!curr || !curr.next) return null
            curr = curr.next
        }
        if (!curr) return null
        let temp = curr.next
        curr.next = {
            val, prev: curr, next: curr.next
        }
        if (temp) temp.prev = curr.next
    }

    deleteAtIndex(index) {
        if (index < 0) return null
        let curr = this.data
        while(index > 0) {
            if (!curr) return null
            curr = curr.next
            index--
        }
        if (!curr) return null
        if (!curr.prev && !curr.next) {
            this.data = null
        } else if (!curr.prev) {
            curr.next.prev = curr.prev
            this.data = curr.next
        } else if (!curr.next) {
            curr.prev.next = null
        } else {
            curr.prev.next = curr.next
            curr.next.prev = curr.prev
        }
    }


}