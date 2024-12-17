"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOriginalAndRelatedNodeById = exports.rebuildFlatTree = exports.flattenTree = exports.deleteNodeByUniqueId = exports.findNodeById = void 0;
const consts_1 = require("./consts");
const findNodeById = (tree, id) => {
    for (const node of tree) {
        if (node.id === id) {
            return Object.assign({}, node);
        }
        if (node.children) {
            const matchInChildren = (0, exports.findNodeById)(node.children, id);
            if (matchInChildren)
                return matchInChildren;
        }
    }
    return undefined;
};
exports.findNodeById = findNodeById;
// console.log("findNodeById", findNodeById(tree, 311));
const deleteNodeByUniqueId = (tree, id, originalTree) => {
    let updatedTree = [];
    for (const node of tree) {
        if (node.id === id) {
            const isUnique = node.linkedCategory
                ? (0, exports.findNodeById)(originalTree, node.linkedCategory) === undefined
                : true;
            if (!isUnique) {
                updatedTree.push(Object.assign({}, node));
            }
        }
        else {
            updatedTree.push(Object.assign(Object.assign({}, node), { children: node.children
                    ? (0, exports.deleteNodeByUniqueId)(node.children, id, originalTree)
                    : undefined }));
        }
    }
    return updatedTree;
};
exports.deleteNodeByUniqueId = deleteNodeByUniqueId;
// console.log(
//   "deleteNodeByUniqueId",
//   JSON.stringify(deleteNodeByUniqueId(tree, 3, tree), null, 2)
// );
const flattenTree = (tree, parentId) => {
    let flatTree = [];
    for (const node of tree) {
        const newNode = Object.assign({}, node);
        newNode.parentId = parentId || -1;
        delete newNode.children;
        flatTree.push(newNode);
        if (node.children) {
            const flattenChildren = (0, exports.flattenTree)(node.children, node.id);
            flatTree = [...flatTree, ...flattenChildren];
        }
    }
    return flatTree;
};
exports.flattenTree = flattenTree;
// console.log("flattenTree", flattenTree(tree));
const rebuildFlatTree = (flatTree) => {
    const traverse = (parentId) => {
        let tree = [];
        for (const node of flatTree) {
            if (node.parentId === parentId) {
                const newNode = Object.assign({}, node);
                delete newNode.parentId;
                newNode.children = traverse(node.id).length
                    ? traverse(node.id)
                    : undefined;
                tree.push(newNode);
            }
        }
        return tree;
    };
    return traverse(-1);
};
exports.rebuildFlatTree = rebuildFlatTree;
// console.log(
//   "rebuildFlatTree",
//   JSON.stringify(rebuildFlatTree(flattenTree(tree)), null, 2)
// );
const deleteOriginalAndRelatedNodeById = (tree, id) => {
    let linkedNode = undefined;
    const traverse = (nodes) => {
        let updatedTree = [];
        for (const node of nodes) {
            if (node.id === id) {
                linkedNode = node.linkedCategory
                    ? (0, exports.findNodeById)(tree, node.linkedCategory)
                    : undefined;
            }
            else {
                updatedTree.push(Object.assign(Object.assign({}, node), { children: node.children ? traverse(node.children) : undefined }));
            }
        }
        return updatedTree;
    };
    const updatedTree = traverse(tree);
    if (linkedNode !== undefined) {
        // @ts-ignore
        return (0, exports.deleteNodeByUniqueId)(updatedTree, linkedNode.id, tree);
    }
    return updatedTree;
};
exports.deleteOriginalAndRelatedNodeById = deleteOriginalAndRelatedNodeById;
console.log("deleteOriginalAndRelatedNodeById", JSON.stringify((0, exports.deleteOriginalAndRelatedNodeById)(consts_1.tree, 11), null, 2));
