import { tree, type Category } from "./consts";

function getChildrenNodesNames(tree: Category[]): string[] {
  const childrenNames: string[] = [];

  function traverse(node: Category): void {
    if (!node.children) return;

    for (let i = 0; i < node.children.length; i++) {
      childrenNames.push(node.children[i].name);
      traverse(node.children[i]);
    }
  }

  for (let i = 0; i < tree.length; i++) {
    traverse(tree[i]);
  }

  return childrenNames;
}

console.log(getChildrenNodesNames(tree));
