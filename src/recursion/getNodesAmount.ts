import { Category, tree } from "./consts";

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

export const getNodesAmount = (tree: Category[]): number => {
  let amount: number = 0;

  for (let i = 0; i < tree.length; i++) {
    amount++;
    if (tree[i].children) {
      const amountInBranch = getNodesAmount(tree[i].children as Category[]);
      amount += amountInBranch;
    }
  }

  return amount;
};

// console.log("getNodesAmount", getNodesAmount(tree));

console.log(getNodesAmount(tree));

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
