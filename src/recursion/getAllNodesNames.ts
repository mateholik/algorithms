import { Category3, tree3 } from "./consts";

function getAllNodesNames(tree: Category3[]): string[] {
  const names: string[] = [];

  function traverse(node: Category3): void {
    names.push(node.name);
    if (!node.children) return;

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  }

  for (let i = 0; i < tree.length; i++) {
    traverse(tree[i]);
  }

  return names;
}

console.log(getAllNodesNames(tree3));
