"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
// export const getLeafNodes = (tree: Category[]): Category[] => {
//   let result: Category[] = [];
//   const traverse = (node: Category) => {
//     if (!node.children) {
//       result.push(node);
//     } else {
//       for (let i = 0; i < node.children.length; i++) {
//         traverse(node.children[i]);
//       }
//     }
//   };
//   for (let i = 0; i < tree.length; i++) {
//     traverse(tree[i]);
//   }
//   return result;
// };
const getLeafNodes = (tree) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        if (!tree[i].children) {
            result.push(Object.assign({}, tree[i]));
        }
        else {
            const children = getLeafNodes(tree[i].children);
            result = [...result, ...children];
        }
    }
    return result;
};
console.log(getLeafNodes(consts_1.tree));
