import { tree3, type Category3 } from "./consts";
import { deepCloneTree } from "./deepCloneTree";

import { findNodeById } from "./findNodeById";

const deleteByUniqueId = (tree: Category3[], id: number): Category3[] => {
  const traverse = (nodes: Category3[]): Category3[] => {
    const newTree: Category3[] = [];

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
  JSON.stringify(deleteByUniqueId(tree3, 11), null, 2)
);
