"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeafNodes = void 0;
const consts_1 = require("./consts");
const getLeafNodes = (tree) => {
    let result = [];
    const traverse = (node) => {
        if (!node.children) {
            result.push(node);
        }
        else {
            for (let i = 0; i < node.children.length; i++) {
                traverse(node.children[i]);
            }
        }
    };
    for (let i = 0; i < tree.length; i++) {
        traverse(tree[i]);
    }
    return result;
};
exports.getLeafNodes = getLeafNodes;
console.log((0, exports.getLeafNodes)(consts_1.tree));
