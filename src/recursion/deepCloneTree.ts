import { tree, type Category } from "./consts";

export const deepCloneTree = (tree: Category[]): Category[] => {
  return tree.map((node) => ({
    ...node,
    children: node.children?.length ? deepCloneTree(node.children) : undefined,
  }));
};

// console.log("deepCloneTree2", JSON.stringify(deepCloneTree(tree), null, 2));
