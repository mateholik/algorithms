import { tree3, type Category3 } from "./consts";
import { deepCloneTree } from "./deepCloneTree";

// const deleteById = (tree: Category3[], id: number): Category3[] => {
//   return tree
//     .filter((node) => node.id !== id)
//     .map((node) => ({
//       ...node,
//       children: node.children?.length
//         ? deleteById(node.children, id)
//         : undefined,
//     }));
// };

const deleteById = (tree: Category3[], id: number): Category3[] => {
  let treeClone = deepCloneTree(tree);

  for (let i = treeClone.length - 1; i >= 0; i--) {
    // if using splice, use backwards looping. If use forward loopin, when array item is deleted, i is incremented and first item after deleted item is skipped
    if (treeClone[i].id === id) {
      treeClone.splice(i, 1);
      continue;
    }
    if (treeClone[i].children)
      treeClone[i].children = deleteById(
        treeClone[i].children as Category3[],
        id
      );
  }

  return treeClone;
};
console.log(JSON.stringify(deleteById(tree3, 31), null, 2));
