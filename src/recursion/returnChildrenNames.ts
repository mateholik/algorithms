import { tree3, type Category3 } from "./consts";

function returnChildrenNames(tree: Category3[]): string[] {
  const childrenNames: string[] = [];

  function traverse(node: Category3): void {
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

console.log(returnChildrenNames(tree3));
