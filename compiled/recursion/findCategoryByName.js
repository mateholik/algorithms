"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
// function findCategoryByName(
//   tree: Category3[],
//   name: string
// ): Category3 | undefined {
//   for (let i = 0; i < tree.length; i++) {
//     if (tree[i].name === name) return tree[i];
//     if (tree[i].children) {
//       const result = findCategoryByName(tree[i].children as Category3[], name);
//       if (result) return result;
//     }
//   }
//   return undefined;
// }
function findCategoryByName(tree, name) {
    let result = undefined;
    function traverse(node) {
        if (node.name === name) {
            result = node;
            return;
        }
        if (!node.children)
            return;
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }
    }
    for (let i = 0; i < tree.length; i++) {
        traverse(tree[i]);
    }
    return result;
}
console.log(findCategoryByName(consts_1.tree3, "category_1_1"));
