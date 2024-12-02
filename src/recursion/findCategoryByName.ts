import { Category3, tree3 } from "./consts";

// function findCategoryByName(
//   tree: Category3[],
//   name: string
// ): Category3 | undefined {
//   for (let i = 0; i < tree.length; i++) {
//     if (tree[i].name === name) return tree[i];
//     if (tree[i].children) {
//       const result = findCategoryByName(tree[i].children as Category3[], name);
//       if (result) return result;
//     }
//   }
//   return undefined;
// }

function findCategoryByName(
  tree: Category3[],
  name: string
): Category3 | undefined {
  let result: Category3 | undefined = undefined;

  function traverse(node: Category3): void {
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

console.log(findCategoryByName(tree3, "category_1_1"));
