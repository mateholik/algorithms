"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodesAmount = void 0;
const consts_1 = require("./consts");
// export const getNodesAmount = (tree: Category[]): number => {
//   let nodesAmount: number = 0;
//   const traverse = (node: Category): void => {
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
const getNodesAmount = (nodes) => {
    let total = 0;
    for (let i = 0; i < nodes.length; i++) {
        total++;
        // total += getNodesAmount(nodes[i].children ?? []);
        if (nodes[i].children) {
            // @ts-ignore
            total += (0, exports.getNodesAmount)(nodes[i].children);
        }
    }
    return total;
};
exports.getNodesAmount = getNodesAmount;
console.log((0, exports.getNodesAmount)(consts_1.tree));
//  getNodesAmount
//    getNodesAmount
//      getNodesAmount
//      return 1
//    return 1+1+1 = 3
//    getNodesAmount
//    return 2
//    getNodesAmount
//      getNodesAmount
//      return 1
//    return 1+1 = 2
//  return 1+3 + 1+2 + 1+2 = 10
