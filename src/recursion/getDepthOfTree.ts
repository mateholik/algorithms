import { Category3, tree3 } from "./consts";

// function getDepthOfTree(tree: Category3[]): number {
//   let maxDepthAmongChildren = 0;

//   for (const node of tree) {
//     if (node.children) {
//       const depth = getDepthOfTree(node.children);
//       if (depth > maxDepthAmongChildren) {
//         maxDepthAmongChildren = depth;
//       }
//     }
//   }

//   return maxDepthAmongChildren + 1;
// }

export const getDepthOfTree = (tree: Category3[]): number => {
  let depthOflongestNode = 0;

  const traverse = (node: Category3) => {
    let depthOfChildren = 0;

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        const maxDepthOfChildren = traverse(node.children[i]);
        console.log({ nodeName: node.children[i].name, maxDepthOfChildren });

        if (maxDepthOfChildren > depthOfChildren)
          depthOfChildren = maxDepthOfChildren;
      }
    }

    return depthOfChildren + 1;
  };

  for (let i = 0; i < tree.length; i++) {
    const maxDepthOfChildren = traverse(tree[i]);
    if (maxDepthOfChildren > depthOflongestNode)
      depthOflongestNode = maxDepthOfChildren;
  }

  return depthOflongestNode;
};

console.log(getDepthOfTree(tree3));
