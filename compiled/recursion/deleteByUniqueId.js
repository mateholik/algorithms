"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
const findNodeById_1 = require("./findNodeById");
const deleteByUniqueId = (tree, id) => {
    const traverse = (nodes) => {
        const newTree = [];
        for (const node of nodes) {
            if (node.id === id) {
                const isUnique = !node.linkedCategory || !(0, findNodeById_1.findNodeById)(tree, node.linkedCategory);
                if (isUnique) {
                    console.log(`Deleting node with id: ${node.id}`);
                }
                else {
                    console.log(`Deletion skipped, node is not unique: ${node.id}`);
                    newTree.push(node);
                }
            }
            else {
                const updatedChildren = node.children
                    ? traverse(node.children)
                    : undefined;
                newTree.push(Object.assign(Object.assign({}, node), { children: updatedChildren }));
            }
        }
        return newTree;
    };
    return traverse(tree);
};
console.log("deleteByUniqueId", JSON.stringify(deleteByUniqueId(consts_1.tree, 11), null, 2));
