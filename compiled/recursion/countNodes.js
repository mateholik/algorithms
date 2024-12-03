"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countNodes = void 0;
const consts_1 = require("./consts");
// export const countNodes = (tree: Category3[]): number => {
//   let nodesAmount: number = 0;
//   const traverse = (node: Category3): void => {
//     nodesAmount++;
//     if (node.children) {
//       for (let i = 0; i < node.children.length; i++) {
//         traverse(node.children[i]);
//       }
//     }
//   };
//   for (let i = tree.length - 1; i >= 0; i--) {
//     traverse(tree[i]);
//   }
//   return nodesAmount;
// };
const countNodes = (nodes) => {
    let total = 0;
    for (let i = 0; i < nodes.length; i++) {
        total++;
        // total += countNodes(nodes[i].children ?? []);
        if (nodes[i].children) {
            // @ts-ignore
            total += (0, exports.countNodes)(nodes[i].children);
        }
    }
    return total;
};
exports.countNodes = countNodes;
console.log((0, exports.countNodes)(consts_1.tree3));
//  countNodes
//    countNodes
//      countNodes
//      return 1
//    return 1+1+1 = 3
//    countNodes
//    return 2
//    countNodes
//      countNodes
//      return 1
//    return 1+1 = 2
//  return 1+3 + 1+2 + 1+2 = 10
