"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
function getAllNodesNames(tree) {
    const names = [];
    function traverse(node) {
        names.push(node.name);
        if (!node.children)
            return;
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }
    }
    for (let i = 0; i < tree.length; i++) {
        traverse(tree[i]);
    }
    return names;
}
console.log(getAllNodesNames(consts_1.tree));
