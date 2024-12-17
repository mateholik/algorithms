import { tree, type Category } from "./consts";
import { deepCloneTree } from "./deepCloneTree";

import { findNodeById } from "./findNodeById";

const deleteByUniqueId = (tree: Category[], id: number): Category[] => {
  const traverse = (nodes: Category[]): Category[] => {
    const newTree: Category[] = [];

    for (const node of nodes) {
      if (node.id === id) {
        const isUnique =
          !node.linkedCategory || !findNodeById(tree, node.linkedCategory);
        if (isUnique) {
          console.log(`Deleting node with id: ${node.id}`);
        } else {
          console.log(`Deletion skipped, node is not unique: ${node.id}`);
          newTree.push(node);
        }
      } else {
        const updatedChildren = node.children
          ? traverse(node.children)
          : undefined;
        newTree.push({ ...node, children: updatedChildren });
      }
    }

    return newTree;
  };

  return traverse(tree);
};

console.log(
  "deleteByUniqueId",
  JSON.stringify(deleteByUniqueId(tree, 11), null, 2)
);

// deleteByUniqueId(tree, 12)
// ├─ traverse([id: 1, id: 2, id: 3])
// │   ├─ traverse([id: 11, id: 12])
// │   │   ├─ traverse([]) → []
// │   │   │   └─ return []
// │   │   ├─ traverse([id: 121])
// │   │   │   ├─ traverse([]) → []
// │   │   │   │   └─ return []
// │   │   │   └─ return [id: 121]
// │   │   └─ return [id: 11]
// │   └─ return [id: 1, children: [id: 11]]
// │   ├─ traverse([id: 21, id: 22])
// │   │   ├─ traverse([]) → []
// │   │   │   └─ return []
// │   │   ├─ traverse([]) → []
// │   │   │   └─ return []
// │   │   └─ return [id: 21, id: 22]
// │   └─ return [id: 2, children: [id: 21, id: 22]]
// │   ├─ traverse([id: 31])
// │   │   ├─ traverse([id: 311])
// │   │   │   ├─ traverse([]) → []
// │   │   │   │   └─ return []
// │   │   │   └─ return [id: 311]
// │   │   └─ return [id: 31, children: [id: 311]]
// │   └─ return [id: 3, children: [id: 31, children: [id: 311]]]
// └─ return [
//       { id: 1, children: [id: 11] },
//       { id: 2, children: [id: 21, id: 22] },
//       { id: 3, children: [id: 31, children: [id: 311]] }
//    ]

const deleteCategoryByUniqueID = (
  tree: Category[],
  id: number,
  originalTree: Category[]
): Category[] => {
  let updatedTree: Category[] = [];

  for (const node of tree) {
    if (node.id === id) {
      const isUnique = node.linkedCategory
        ? findNodeById(originalTree, node.linkedCategory) === undefined
        : true;

      if (!isUnique) {
        updatedTree.push({ ...node });
      }
    } else {
      updatedTree.push({
        ...node,
        children: node.children
          ? deleteCategoryByUniqueID(node.children, id, originalTree)
          : undefined,
      });
    }
  }

  return updatedTree;
};
console.log(
  "deleteCategoryByUniqueID",
  JSON.stringify(deleteCategoryByUniqueID(tree, 3, tree), null, 2)
);
