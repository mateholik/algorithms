import { tree, type Category } from "./consts";

export const findNodeById = (
  tree: Category[],
  id: number
): Category | undefined => {
  // console.log("findNodeById", { tree, id });

  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.id === id) return node;
    if (node.children?.length) {
      const match = findNodeById(node.children, id);
      if (match) return match;
    }
  }
  return undefined;
};

// console.log("findNodeById", JSON.stringify(findNodeById(tree, 2), null, 2));
