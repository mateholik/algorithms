import { Category, tree } from "./consts";

function getAllNodesNames(tree: Category[]): string[] {
  const names: string[] = [];

  function traverse(node: Category): void {
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

console.log(getAllNodesNames(tree));
