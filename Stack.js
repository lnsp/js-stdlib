/*
A object generator for Stack container based on a linked reference implementation.
*/
var JSContainerLibrary = JSContainerLibrary || {};
JSContainerLibrary.Stack = function() {
    var activeNode = undefined, size = 0;
    return {
        push: function(obj) {
            var nextNode = activeNode;
            var newNode = {
                data: obj,
                next: nextNode
            };
            activeNode = newNode;
            size++;
        },
        pop: function() {
            if (activeNode !== undefined) {
                var popValue = activeNode.data;
                activeNode = activeNode.next;
                return size--, popValue;
            }
            return undefined;
        },
        peek: function() {
            if (activeNode !== undefined) {
                return activeNode.data;
            }
            return undefined;
        },  
        size: function() {
            return size;
        },
        empty: function() {
            return size == 0;   
        }
    };
};
