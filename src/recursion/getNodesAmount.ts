import { Category3, tree3 } from "./consts";

// export const getNodesAmount = (tree: Category3[]): number => {
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

export const getNodesAmount = (nodes: Category3[]): number => {
  let total: number = 0;

  for (let i = 0; i < nodes.length; i++) {
    total++;
    // total += getNodesAmount(nodes[i].children ?? []);
    if (nodes[i].children) {
      // @ts-ignore
      total += getNodesAmount(nodes[i].children);
    }
  }
  return total;
};

console.log(getNodesAmount(tree3));

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
