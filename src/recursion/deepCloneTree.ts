import { tree, type Category } from "./consts";

export const deepCloneTree = (tree: Category[]): Category[] => {
  return tree.map((node) => ({
    ...node,
    children: node.children?.length ? deepCloneTree(node.children) : undefined,
  }));
};

// console.log("deepCloneTree2", JSON.stringify(deepCloneTree(tree), null, 2));

export const deepCloneTree2 = (tree: Category[]): Category[] => {
  let result: Category[] = [];

  for (let i = 0; i < tree.length; i++) {
    result.push({
      ...tree[i],
      children: tree[i].children
        ? deepCloneTree2(tree[i].children as Category[])
        : undefined,
    });
  }

  return result;
};
