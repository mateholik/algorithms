"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
const flattenTree = (tree) => {
    let result = [];
    const traverse = (node) => {
        result.push({ name: node.name, id: node.id });
        if (!node.children)
            return;
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }
    };
    for (let i = 0; i < tree.length; i++) {
        traverse(tree[i]);
    }
    return result;
};
console.log(flattenTree(consts_1.tree3));
