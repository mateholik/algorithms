"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
const findNodeById_1 = require("./findNodeById");
// const clonedTree = deepCloneTree(tree3);
// const deleteByUniqueId = (tree: Category3[], id: number): Category3[] => {
//   console.log({
//     tree1: tree,
//   });
//   for (let i = tree.length - 1; i >= 0; i--) {
//     console.log({
//       tree2: tree,
//     });
//     if (tree[i].id === id && tree[i].linkedCategory !== undefined) {
//       console.log({
//         tree3: tree,
//       });
//       const isLinked = findNodeById(tree, tree[i].linkedCategory as number);
//       // console.log({
//       //   isLinked,
//       //   tree,
//       //   "tree[i].linkedCategory": tree[i].linkedCategory,
//       // });
//       if (!isLinked) {
//         tree.splice(i, 1);
//       }
//     }
//     if (tree[i].children) {
//       tree[i].children = deleteByUniqueId(tree[i].children as Category3[], id);
//     }
//   }
//   return tree;
// };
function deleteByUniqueId(tree, id) {
    // Recursive function to traverse and filter the tree
    function traverse(nodes) {
        const newTree = [];
        for (const node of nodes) {
            // Check if the current node should be deleted
            if (node.id === id) {
                // Check if the node has a linkedCategory and if that category exists in the tree
                if (node.linkedCategory !== undefined &&
                    (0, findNodeById_1.findNodeById)(tree, node.linkedCategory)) {
                    // Node is not unique, keep it
                    newTree.push(node);
                }
                else {
                    // Node is unique, delete it (skip adding it to the new tree)
                    console.log(`Deleting node with id: ${node.id}`);
                    continue;
                }
            }
            else {
                // If not matching ID, recurse into children
                const updatedChildren = node.children
                    ? traverse(node.children)
                    : undefined;
                newTree.push(Object.assign(Object.assign({}, node), { children: updatedChildren }));
            }
        }
        return newTree;
    }
    return traverse(tree); // Pass the original tree as a parameter
}
console.log("lox", JSON.stringify(deleteByUniqueId(consts_1.tree3, 12), null, 2));
