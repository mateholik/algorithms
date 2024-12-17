"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildrenNodeNames = void 0;
const getAllNodesNames_1 = require("./getAllNodesNames");
function getChildrenNodesNames(tree) {
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
// console.log(getChildrenNodesNames(tree));
const getChildrenNodeNames = (tree) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].children) {
            const childrenNames = (0, getAllNodesNames_1.getAllNodeNames2)(tree[i].children);
            result = [...result, ...childrenNames];
        }
    }
    return result;
};
exports.getChildrenNodeNames = getChildrenNodeNames;
// console.log("getChildrenNodeNames", getChildrenNodeNames(tree));
