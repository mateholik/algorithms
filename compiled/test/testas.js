"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNodeWithLinkedNodesById = exports.deleteNodesByIds = exports.deleteNodeById = exports.findNodeById = void 0;
const consts_1 = require("./consts");
const findNodeById = (tree, id) => {
    for (const node of tree) {
        if (node.id === id) {
            return node;
        }
        if (node.children) {
            const match = (0, exports.findNodeById)(node.children, id);
            if (match)
                return match;
        }
    }
    return undefined;
};
exports.findNodeById = findNodeById;
// console.log("findNodeById", findNodeById(tree, 101));
const deleteNodeById = (tree, originalTree, id) => {
    var _a;
    let updatedTree = [];
    for (const node of tree) {
        if (node.id === id) {
            const isUnique = node.linkedCategory
                ? (0, exports.findNodeById)(originalTree, node.linkedCategory) === undefined
                : true;
            if (!isUnique) {
                updatedTree.push(Object.assign({}, node));
            }
            continue;
        }
        const newNode = Object.assign({}, node);
        if ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) {
            newNode.children = (0, exports.deleteNodeById)(node.children, originalTree, id);
        }
        updatedTree.push(newNode);
    }
    return updatedTree;
};
exports.deleteNodeById = deleteNodeById;
// console.log(
//   "deleteNodeById",
//   JSON.stringify(deleteNodeById(tree, tree, 11), null, 2)
// );
const deleteNodesByIds = (tree, ids) => {
    let updatedTree = [];
    for (const node of tree) {
        // @ts-ignore
        if (ids.includes(node.id)) {
            continue;
        }
        updatedTree.push(Object.assign(Object.assign({}, node), { children: node.children
                ? (0, exports.deleteNodesByIds)(node.children, ids)
                : undefined }));
    }
    return updatedTree;
};
exports.deleteNodesByIds = deleteNodesByIds;
// console.log(
//   "deleteNodesByIds",
//   JSON.stringify(deleteNodesByIds(tree, [2, 311, 11]), null, 2)
// );
const deleteNodeWithLinkedNodesById = (tree, id) => {
    let nodesToDelete = [];
    const traverse = (tree, id) => {
        for (const node of tree) {
            if (node.id === id) {
                nodesToDelete.push(node.id);
            }
            if (node.linkedCategory === id) {
                nodesToDelete.push(node.id);
            }
            if (node.children) {
                traverse(node.children, id);
            }
        }
    };
    traverse(tree, id);
    return (0, exports.deleteNodesByIds)(tree, nodesToDelete);
};
exports.deleteNodeWithLinkedNodesById = deleteNodeWithLinkedNodesById;
console.log("deleteNodeWithLinkedNodesById", (0, exports.deleteNodeWithLinkedNodesById)(consts_1.tree, 2));
