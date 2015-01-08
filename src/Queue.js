/*
Queue system based on double-linked list implementation.
*/
var JSContainerLibrary = JSContainerLibrary || {};
JSContainerLibrary.Queue = function() {
    var startNode, endNode;
    var size = 0;
    return {
        /*
        Adds a new item to the queue.
        */
        offer: function(obj) {
            // Backup node data for reference
            var oldNode = startNode;
            var newNode = {
                data: obj,
                prior: undefined,
                next: oldNode
            };
            // oldNode != undefined > queue is not empty
            if (oldNode !== undefined) {
                oldNode.prior = newNode;
                if (endNode === undefined) {
                    endNode = oldNode;
                }
            } else {
                // Set the queue to 1 element
                endNode = newNode;
            }
            size++;
            startNode = newNode;
        },
        /*
        Removes the last item from the queue and returns it.
        */
        poll: function() {
            // Test if queue is not empty
            if (endNode !== undefined) {
                // Backup data for return value
                var nodeValue = endNode.data;
                var priorNode = endNode.prior;
                // only happens when startNode = endNode
                if (priorNode !== undefined) {
                    endNode = priorNode;
                } else {
                    // reset list
                    startNode = endNode = undefined;
                }
                size--;
                return nodeValue;
            }
            return undefined;
        },
        /*
        Returns the value of the last item in the queue.
        */
        peek: function() {
            if (endNode !== undefined) {
                return endNode.data;
            }
            return undefined;
        },
        /*
        Returns the size of the queue.
        */
        size: function() {
            return size;
        },
        /*
        Returns if the queue is empty or not.
        */
        empty: function() {
            return size === 0;
        },
        /*
        Clears the queue by removing all references to the data.
        */
        clear: function() {
            startNode = endNode = undefined;
            size = 0;
        }
    };
};