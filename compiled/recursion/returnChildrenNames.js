"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
function returnChildrenNames(tree) {
    const childrenNames = [];
    function traverse(node) {
        if (!node.children)
            return;
        for (let i = 0; i < node.children.length; i++) {
            childrenNames.push(node.children[i].name);
            traverse(node.children[i]);
        }
    }
    for (let i = 0; i < tree.length; i++) {
        traverse(tree[i]);
    }
    return childrenNames;
}
console.log(returnChildrenNames(consts_1.tree3));
