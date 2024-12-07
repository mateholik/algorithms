import { tree3, type Category3 } from "./consts";

const findNodeById = (tree: Category3[], id: number): Category3 | undefined => {
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

console.log(JSON.stringify(findNodeById(tree3, 2), null, 2));
