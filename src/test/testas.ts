import { tree, type Category } from "./consts";

export const findNodeById = (
  tree: Category[],
  id: number
): Category | undefined => {
  for (const node of tree) {
    if (node.id === id) {
      return node;
    }
    if (node.children) {
      const match = findNodeById(node.children, id);
      if (match) return match;
    }
  }
  return undefined;
};

// console.log("findNodeById", findNodeById(tree, 101));

export const deleteNodeById = (
  tree: Category[],
  originalTree: Category[],
  id: number
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
      continue;
    }

    const newNode = { ...node };
    if (node.children?.length) {
      newNode.children = deleteNodeById(node.children, originalTree, id);
    }

    updatedTree.push(newNode);
  }

  return updatedTree;
};

// console.log(
//   "deleteNodeById",
//   JSON.stringify(deleteNodeById(tree, tree, 11), null, 2)
// );

export const deleteNodesByIds = (tree: Category[], ids: number[]) => {
  let updatedTree: Category[] = [];

  for (const node of tree) {
    // @ts-ignore
    if (ids.includes(node.id)) {
      continue;
    }
    updatedTree.push({
      ...node,
      children: node.children
        ? deleteNodesByIds(node.children, ids)
        : undefined,
    });
  }

  return updatedTree;
};

// console.log(
//   "deleteNodesByIds",
//   JSON.stringify(deleteNodesByIds(tree, [2, 311, 11]), null, 2)
// );

export const deleteNodeWithLinkedNodesById = (
  tree: Category[],
  id: number
): Category[] => {
  let nodesToDelete: number[] = [];

  const traverse = (tree: Category[], id: number) => {
    for (const node of tree) {
      if (node.id === id) {
        nodesToDelete.push(node.id);
      }
      if (node.linkedCategory === id) {
        nodesToDelete.push(node.id);
      }
      if (node.children) {
        traverse(node.children, id);
      }
    }
  };

  traverse(tree, id);

  return deleteNodesByIds(tree, nodesToDelete);
};

console.log(
  "deleteNodeWithLinkedNodesById",
  deleteNodeWithLinkedNodesById(tree, 2)
);
