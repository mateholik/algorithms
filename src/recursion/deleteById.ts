import { tree, type Category } from "./consts";
import { deepCloneTree } from "./deepCloneTree";

// const deleteById = (tree: Category[], id: number): Category[] => {
//   return tree
//     .filter((node) => node.id !== id)
//     .map((node) => ({
//       ...node,
//       children: node.children?.length
//         ? deleteById(node.children, id)
//         : undefined,
//     }));
// };

const deleteById = (tree: Category[], id: number): Category[] => {
  let treeClone = deepCloneTree(tree);

  for (let i = treeClone.length - 1; i >= 0; i--) {
    // if using splice, use backwards looping. If use forward loopin, when array item is deleted, i is incremented and first item after deleted item is skipped
    if (treeClone[i].id === id) {
      treeClone.splice(i, 1);
      continue;
    }
    if (treeClone[i].children)
      treeClone[i].children = deleteById(
        treeClone[i].children as Category[],
        id
      );
  }

  return treeClone;
};
console.log(JSON.stringify(deleteById(tree, 31), null, 2));

const deleteCategoryByID = (tree: Category[], id: number): Category[] => {
  let updatedTree: Category[] = [];

  for (const node of tree) {
    if (node.id === id) {
      continue;
    } else {
      updatedTree.push({
        ...node,
        children: node.children
          ? deleteCategoryByID(node.children, id)
          : undefined,
      });
    }
  }

  return updatedTree;
};
