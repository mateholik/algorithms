import { tree, type Category } from "./consts";

// export const findNodeById = (
//   tree: Category[],
//   id: number
// ): Category | undefined => {
//   for (const node of tree) {
//     if (node.id === id) {
//       return { ...node };
//     }
//     if (node.children) {
//       const matchInChildren = findNodeById(node.children, id);
//       if (matchInChildren) return matchInChildren;
//     }
//   }

//   return undefined;
// };

// // console.log("findNodeById", findNodeById(tree, 311));

// export const deleteNodeByUniqueId = (
//   tree: Category[],
//   id: number,
//   originalTree: Category[]
// ): Category[] => {
//   let updatedTree: Category[] = [];

//   for (const node of tree) {
//     if (node.id === id) {
//       const isUnique = node.linkedCategory
//         ? findNodeById(originalTree, node.linkedCategory) === undefined
//         : true;

//       if (!isUnique) {
//         updatedTree.push({ ...node });
//       }
//     } else {
//       updatedTree.push({
//         ...node,
//         children: node.children
//           ? deleteNodeByUniqueId(node.children, id, originalTree)
//           : undefined,
//       });
//     }
//   }

//   return updatedTree;
// };

// // console.log(
// //   "deleteNodeByUniqueId",
// //   JSON.stringify(deleteNodeByUniqueId(tree, 3, tree), null, 2)
// // );

// export const flattenTree = (
//   tree: Category[],
//   parentId?: number
// ): Category[] => {
//   let flatTree: Category[] = [];

//   for (const node of tree) {
//     const newNode = { ...node };
//     newNode.parentId = parentId || -1;
//     delete newNode.children;

//     flatTree.push(newNode);

//     if (node.children) {
//       const flattenChildren = flattenTree(node.children, node.id);
//       flatTree = [...flatTree, ...flattenChildren];
//     }
//   }

//   return flatTree;
// };

// // console.log("flattenTree", flattenTree(tree));

// export const rebuildFlatTree = (flatTree: Category[]): Category[] => {
//   const traverse = (parentId: number) => {
//     let tree: Category[] = [];
//     for (const node of flatTree) {
//       if (node.parentId === parentId) {
//         const newNode = { ...node };
//         delete newNode.parentId;
//         newNode.children = traverse(node.id).length
//           ? traverse(node.id)
//           : undefined;
//         tree.push(newNode);
//       }
//     }
//     return tree;
//   };

//   return traverse(-1);
// };

// // console.log(
// //   "rebuildFlatTree",
// //   JSON.stringify(rebuildFlatTree(flattenTree(tree)), null, 2)
// // );

// export const deleteOriginalAndRelatedNodeById = (
//   tree: Category[],
//   id: number
// ): Category[] => {
//   let linkedNode: Category | undefined = undefined;

//   const traverse = (nodes: Category[]): Category[] => {
//     let updatedTree: Category[] = [];

//     for (const node of nodes) {
//       if (node.id === id) {
//         linkedNode = node.linkedCategory
//           ? findNodeById(tree, node.linkedCategory)
//           : undefined;
//       } else {
//         updatedTree.push({
//           ...node,
//           children: node.children ? traverse(node.children) : undefined,
//         });
//       }
//     }

//     return updatedTree;
//   };

//   const updatedTree = traverse(tree);

//   if (linkedNode !== undefined) {
//     // @ts-ignore
//     return deleteNodeByUniqueId(updatedTree, linkedNode.id, tree);
//   }

//   return updatedTree;
// };

// console.log(
//   "deleteOriginalAndRelatedNodeById",
//   JSON.stringify(deleteOriginalAndRelatedNodeById(tree, 11), null, 2)
// );

// export const findNodeById = (
//   tree: Category[],
//   id: number
// ): Category | undefined => {
//   for (const node of tree) {
//     if (node.id === id) {
//       return node;
//     }
//     if (node.children) {
//       const match = findNodeById(node.children, id);
//       if (match) return match;
//     }
//   }
//   return undefined;
// };

// // console.log("findNodeById", findNodeById(tree, 31));

// export const deleteNodeById = (tree: Category[], id: number): Category[] => {
//   let updatedTree: Category[] = [];

//   for (const node of tree) {
//     if (node.id === id) {
//       continue;
//     } else {
//       updatedTree.push({
//         ...node,
//         children: node.children ? deleteNodeById(node.children, id) : undefined,
//       });
//     }
//   }
//   return updatedTree;
// };

// // console.log(
// //   "deleteNodeById",
// //   JSON.stringify(deleteNodeById(tree, 121), null, 2)
// // );

// export const deleteNodeByUniqueId = (
//   tree: Category[],
//   originalTree: Category[],
//   id: number
// ): Category[] => {
//   let updatedTree: Category[] = [];
//   for (const node of tree) {
//     if (node.id === id) {
//       const isUnique = node.linkedCategory
//         ? findNodeById(originalTree, node.linkedCategory) === undefined
//         : true;

//       if (!isUnique) {
//         updatedTree.push({ ...node });
//       }
//     } else {
//       updatedTree.push({
//         ...node,
//         children: node.children
//           ? deleteNodeByUniqueId(node.children, originalTree, id)
//           : undefined,
//       });
//     }
//   }
//   return updatedTree;
// };

// // console.log(
// //   "deleteNodeByUniqueId",
// //   JSON.stringify(deleteNodeByUniqueId(tree, tree, 2), null, 2)
// // );

// export const deleteNodeAndLinkedNodeById = (
//   tree: Category[],
//   id: number
// ): Category[] => {
//   let linkedNode: Category | undefined = undefined;

//   const traverse = (nodes: Category[], id: number): Category[] => {
//     let result: Category[] = [];

//     for (const node of nodes) {
//       if (node.id === id) {
//         linkedNode = node.linkedCategory
//           ? findNodeById(tree, node.linkedCategory)
//           : undefined;
//       } else if (node.linkedCategory === id) {
//         linkedNode = findNodeById(tree, node.id);
//       } else {
//         result.push({
//           ...node,
//           children: node.children ? traverse(node.children, id) : undefined,
//         });
//       }
//     }
//     return result;
//   };

//   const updatedTree = traverse(tree, id);

//   if (linkedNode) {
//     return deleteNodeById(updatedTree, (linkedNode as Category).id);
//   }
//   return updatedTree;
// };

// // console.log(
// //   "deleteNodeAndLinkedNodeById",
// //   JSON.stringify(deleteNodeAndLinkedNodeById(tree, 121), null, 2)
// // );

// export const flattenTree = (
//   tree: Category[],
//   parentId?: number
// ): Category[] => {
//   let flatTreet: Category[] = [];

//   for (const node of tree) {
//     const newNode = { ...node };
//     delete newNode.children;
//     newNode.parentId = parentId || -1;
//     flatTreet.push(newNode);
//     if (node.children) {
//       const flatChildren = flattenTree(node.children, node.id);
//       flatTreet = [...flatTreet, ...flatChildren];
//     }
//   }

//   return flatTreet;
// };

// // console.log("flattenTree", flattenTree(tree));

// export const revertFlatTree = (flatTree: Category[]): Category[] => {
//   const traverse = (parentId: number): Category[] => {
//     let tree: Category[] = [];

//     for (const node of flatTree) {
//       if (node.parentId === parentId) {
//         const newNode = { ...node };
//         delete newNode.parentId;
//         newNode.children = traverse(node.id).length
//           ? traverse(node.id)
//           : undefined;
//         tree.push(newNode);
//       }
//     }

//     return tree;
//   };
//   return traverse(-1);
// };

// console.log(
//   "revertFlatTree",
//   JSON.stringify(revertFlatTree(flattenTree(tree)), null, 2)
// );

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

// console.log("findNodeById", findNodeById(tree, 31));

export const deleteNodeByUniqueId = (
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
    } else {
      updatedTree.push({
        ...node,
        children: node.children
          ? deleteNodeByUniqueId(node.children, originalTree, id)
          : undefined,
      });
    }
  }

  return updatedTree;
};

// console.log(
//   "findNodeById",
//   JSON.stringify(deleteNodeByUniqueId(tree, tree, 121), null, 2)
// );
