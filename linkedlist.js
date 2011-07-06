function LinkedList() {
    if (!(this instanceof arguments.callee)) {
        throw new Error("Constructor called as a function");
    }

    //private members
    var _nodes = [], 
        _head = null, 
        _tail = null;

    //public members
    function Node(value) {
        this.previous = null,
        this.next = null,
        this.value = value;
    }

    this.size = function () {
        return _nodes.length;
    }

    this.add = function (val) {
        var newNode = new Node(val);
        if (_tail != null) {
            newNode.previous = _tail;
            _tail.next = newNode;
        }
        _tail = newNode;

        if (_head == null)
            _head = newNode;

        _nodes.push(newNode);
        return this;
    }

    this.getHead = function () {
        return _head;
    }

    this.getTail = function () {
        return _tail;
    }

    this.findByValue = function (value) {
        for (var i = 0, len = _nodes.length; i < len; i++) {
            if (_nodes[i].value == value)
                return _nodes[i];
        }
        return null;
    }

    this.insertAfter = function (value, newValue) {
        var prevNode = this.findByValue(value);
        if (prevNode == null)
            return null;
        var newNode = new Node(newValue);

        newNode.next = prevNode.next;
        newNode.previous = prevNode;
        newNode.previous.next = newNode;

        if (newNode.next != null)
            newNode.next.previous = newNode;

        _nodes.push(newNode);
        return newNode;
    }

}
