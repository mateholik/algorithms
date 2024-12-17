"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNodeNames2 = void 0;
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
// console.log(getAllNodesNames(tree));
const getAllNodeNames2 = (tree) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        result.push(tree[i].name);
        if (tree[i].children) {
            result = [...result, ...(0, exports.getAllNodeNames2)(tree[i].children)];
        }
    }
    return result;
};
exports.getAllNodeNames2 = getAllNodeNames2;
// console.log("getAllNodeNames", getAllNodeNames(tree));
