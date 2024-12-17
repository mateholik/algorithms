"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlattenTree = void 0;
const consts_1 = require("./consts");
const getFlattenedTree = (tree) => {
    let result = [];
    const traverse = (node, parentNodeId) => {
        result.push(Object.assign(Object.assign({}, node), { children: undefined, parentId: parentNodeId || -1 }));
        if (!node.children)
            return;
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i], node.id);
        }
    };
    for (let i = 0; i < tree.length; i++) {
        traverse(tree[i]);
    }
    return result;
};
// console.log("getFlattenedTree3", getFlattenedTree(tree));
const getFlattenTree = (tree, parentId) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        const obj = Object.assign(Object.assign({}, tree[i]), { parentId: parentId || -1 });
        delete obj.children;
        result.push(obj);
        if (tree[i].children) {
            const children = (0, exports.getFlattenTree)(tree[i].children, tree[i].id);
            result = [...result, ...children];
        }
    }
    return result;
};
exports.getFlattenTree = getFlattenTree;
// console.log("getFlattenTree", getFlattenTree(tree));
const revertFlattenedTree = (flatTree) => {
    const buildTree = (parentId) => {
        let result = [];
        for (let i = 0; i < flatTree.length; i++) {
            if (flatTree[i].parentId === parentId) {
                result.push(Object.assign(Object.assign({}, flatTree[i]), { children: buildTree(flatTree[i].id) }));
            }
        }
        return result;
    };
    return buildTree(-1);
};
console.log("revertFlattenedTree3", JSON.stringify(revertFlattenedTree(getFlattenedTree(consts_1.tree)), null, 2));
// buildTree(-1) → [category_1, category_2, category_3]
//     ├─ buildTree(1) → [category_1_1, category_1_2]
//     │       ├─ buildTree(11) → []
//     │       ├─ buildTree(12) → [category_1_2_1]
//     │               ├─ buildTree(121) → []
//     ├─ buildTree(2) → [category_2_1, category_2_2]
//     │       ├─ buildTree(21) → []
//     │       ├─ buildTree(22) → []
//     ├─ buildTree(3) → [category_3_1]
//             ├─ buildTree(31) → [category_3_1_1]
//                     ├─ buildTree(311) → []
