/*
A object generator for Stack container based on a linked reference implementation.
*/
var JSContainerLibrary = JSContainerLibrary || {};
JSContainerLibrary.Stack = function() {
    var activeNode = undefined; // contains the data node that is on top of the stack
    var size = 0; // data structure size
    return {
        /*
        Pushes a new object on the top of the stack.
        */
        push: function(obj) {
            // backup data to stop manipulation
            var nextNode = activeNode;
            // create new node containing data and its neighbour
            var newNode = {
                data: obj,
                next: nextNode
            };
            // copy new node to the top of the stack
            activeNode = newNode;
            size++;
        },
        /*
        Removes an object from the top of the stack and returns its value.
        */
        pop: function() {
            // when there is something ...
            if (activeNode !== undefined) {
                // backup current value of the top of the stack
                var popValue = activeNode.data;
                // set the top to its own neighbour (removes the top)
                activeNode = activeNode.next;
                return size--, popValue;
            }
            return undefined;
        },
        /*
        Returns the value of the top of the stack.
        */
        peek: function() {
            if (activeNode !== undefined) {
                return activeNode.data;
            }
            return undefined;
        },  
        /*
        Returns the current size of the stack.
        */
        size: function() {
            return size;
        },
        /*
        Returns if the stack is empty or not.
        */
        empty: function() {
            return size == 0;   
        }
    };
};
