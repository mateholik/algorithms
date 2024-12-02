import { tree3, type Category3 } from "./consts";

const flattenTree = (tree: Category3[]): Category3[] => {
  let result: Category3[] = [];

  const traverse = (node: Category3): void => {
    if (!node) return;
    result.push({ name: node?.name || "nera", id: node?.id || 420 });
    if (!node?.children) return;

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  };

  for (let i = 0; i < tree.length; i++) {
    traverse(tree[i]);
  }

  return result;
};

console.log(flattenTree(tree3));
