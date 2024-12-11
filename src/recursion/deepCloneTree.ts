import { tree3, type Category3 } from "./consts";

export const deepCloneTree = (tree: Category3[]): Category3[] => {
  return tree.map((node) => ({
    ...node,
    children: node.children?.length ? deepCloneTree(node.children) : undefined,
  }));
};

// console.log("deepCloneTree2", JSON.stringify(deepCloneTree(tree3), null, 2));
