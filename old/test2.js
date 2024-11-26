var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tree = [
    {
        name: "category 1",
        children: [
            {
                name: "category 1.1",
            },
        ],
    },
    {
        name: "category 2",
    },
    {
        name: "category 3",
        children: [
            {
                name: "category 3.1",
                children: [
                    {
                        name: "category 3.1.1",
                    },
                    {
                        name: "category 3.1.2",
                    },
                ],
            },
        ],
    },
];
function countNodes(tree) {
    var count = 0; // Initialize a counter
    // Iterate through each node in the current level
    for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
        var node = tree_1[_i];
        count += 1; // Count the current node
        if (node.children) {
            // If the node has children, recursively count them
            count += countNodes(node.children);
        }
    }
    return count; // Return the total count
}
// console.log(countNodes(tree)); // Output: 8
function findNode(tree, nodeName) {
    for (var _i = 0, tree_2 = tree; _i < tree_2.length; _i++) {
        var node = tree_2[_i];
        if (node.name === nodeName) {
            return node;
        }
        if (node.children) {
            var found = findNode(node.children, nodeName);
            if (found)
                return found;
        }
    }
    return undefined;
}
// console.log(findNode(tree, "category 3.1.2"));
function getLeafNodes(tree) {
    var leafNodes = [];
    for (var _i = 0, tree_3 = tree; _i < tree_3.length; _i++) {
        var node = tree_3[_i];
        if (!node.children) {
            leafNodes.push(node);
        }
        if (node.children) {
            var childLeafNodes = getLeafNodes(node.children);
            if (childLeafNodes.length)
                leafNodes = __spreadArray(__spreadArray([], leafNodes, true), childLeafNodes, true);
        }
    }
    return leafNodes;
}
// console.log(getLeafNodes(tree));
console.log(calculateDepth(tree));
function calculateDepth(tree) {
    var maxDepth = 0; // Initialize the maximum depth
    // Iterate through each node in the current level
    for (var _i = 0, tree_4 = tree; _i < tree_4.length; _i++) {
        var node = tree_4[_i];
        if (node.children) {
            // If the node has children, recursively calculate their depth
            var depth = calculateDepth(node.children);
            if (depth > maxDepth) {
                maxDepth = depth; // Update the maximum depth
            }
        }
    }
    return maxDepth + 1; // Return the maximum depth plus one (for the current level)
}
console.log(calculateDepth(tree)); // Output: 4
