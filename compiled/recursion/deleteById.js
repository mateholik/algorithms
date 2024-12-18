"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
const deepCloneTree_1 = require("./deepCloneTree");
// const deleteById = (tree: Category[], id: number): Category[] => {
//   return tree
//     .filter((node) => node.id !== id)
//     .map((node) => ({
//       ...node,
//       children: node.children?.length
//         ? deleteById(node.children, id)
//         : undefined,
//     }));
// };
const deleteById = (tree, id) => {
    let treeClone = (0, deepCloneTree_1.deepCloneTree)(tree);
    for (let i = treeClone.length - 1; i >= 0; i--) {
        // if using splice, use backwards looping. If use forward loopin, when array item is deleted, i is incremented and first item after deleted item is skipped
        if (treeClone[i].id === id) {
            treeClone.splice(i, 1);
            continue;
        }
        if (treeClone[i].children)
            treeClone[i].children = deleteById(treeClone[i].children, id);
    }
    return treeClone;
};
console.log(JSON.stringify(deleteById(consts_1.tree, 31), null, 2));
const deleteCategoryByID = (tree, id) => {
    let updatedTree = [];
    for (const node of tree) {
        if (node.id === id) {
            continue;
        }
        else {
            updatedTree.push(Object.assign(Object.assign({}, node), { children: node.children
                    ? deleteCategoryByID(node.children, id)
                    : undefined }));
        }
    }
    return updatedTree;
};
