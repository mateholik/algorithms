import { Category, tree } from "./consts";

// function getNodeByName(
//   tree: Category[],
//   name: string
// ): Category | undefined {
//   for (let i = 0; i < tree.length; i++) {
//     if (tree[i].name === name) return tree[i];
//     if (tree[i].children) {
//       const result = getNodeByName(tree[i].children as Category[], name);
//       if (result) return result;
//     }
//   }
//   return undefined;
// }

function getNodeByName(tree: Category[], name: string): Category | undefined {
  let result: Category | undefined = undefined;

  function traverse(node: Category): void {
    if (node.name === name) {
      result = node;
      return;
    }

    if (!node.children) return;

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  }

  for (let i = 0; i < tree.length; i++) {
    traverse(tree[i]);
  }

  return result;
}

console.log(getNodeByName(tree, "category_1_1"));
