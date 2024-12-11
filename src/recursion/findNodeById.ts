import { tree3, type Category3 } from "./consts";

export const findNodeById = (
  tree: Category3[],
  id: number
): Category3 | undefined => {
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

// console.log("findNodeById", JSON.stringify(findNodeById(tree3, 2), null, 2));
