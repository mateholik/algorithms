import { Category3, tree3 } from "./consts";

export const getLeafNodes = (tree: Category3[]): Category3[] => {
  let result: Category3[] = [];

  const traverse = (node: Category3) => {
    if (!node.children) {
      result.push(node);
    } else {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    }
  };

  for (let i = 0; i < tree.length; i++) {
    traverse(tree[i]);
  }

  return result;
};

console.log(getLeafNodes(tree3));
