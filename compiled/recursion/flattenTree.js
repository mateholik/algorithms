"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
const flattenTree = (tree) => {
    let result = [];
    const traverse = (node) => {
        if (!node)
            return;
        result.push({ name: (node === null || node === void 0 ? void 0 : node.name) || "nera", id: (node === null || node === void 0 ? void 0 : node.id) || 420 });
        if (!(node === null || node === void 0 ? void 0 : node.children))
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
