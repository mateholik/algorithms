"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revertFlatTree = exports.flattenTree = exports.deleteNodeAndLinkedNodeById = exports.deleteNodeByUniqueId = exports.deleteNodeById = exports.findNodeById = void 0;
const consts_1 = require("./consts");
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
const findNodeById = (tree, id) => {
    for (const node of tree) {
        if (node.id === id) {
            return node;
        }
        if (node.children) {
            const match = (0, exports.findNodeById)(node.children, id);
            if (match)
                return match;
        }
    }
    return undefined;
};
exports.findNodeById = findNodeById;
// console.log("findNodeById", findNodeById(tree, 31));
const deleteNodeById = (tree, id) => {
    let updatedTree = [];
    for (const node of tree) {
        if (node.id === id) {
            continue;
        }
        else {
            updatedTree.push(Object.assign(Object.assign({}, node), { children: node.children ? (0, exports.deleteNodeById)(node.children, id) : undefined }));
        }
    }
    return updatedTree;
};
exports.deleteNodeById = deleteNodeById;
// console.log(
//   "deleteNodeById",
//   JSON.stringify(deleteNodeById(tree, 121), null, 2)
// );
const deleteNodeByUniqueId = (tree, originalTree, id) => {
    let updatedTree = [];
    for (const node of tree) {
        if (node.id === id) {
            const isUnique = node.linkedCategory
                ? (0, exports.findNodeById)(originalTree, node.linkedCategory) === undefined
                : true;
            if (!isUnique) {
                updatedTree.push(Object.assign({}, node));
            }
        }
        else {
            updatedTree.push(Object.assign(Object.assign({}, node), { children: node.children
                    ? (0, exports.deleteNodeByUniqueId)(node.children, originalTree, id)
                    : undefined }));
        }
    }
    return updatedTree;
};
exports.deleteNodeByUniqueId = deleteNodeByUniqueId;
// console.log(
//   "deleteNodeByUniqueId",
//   JSON.stringify(deleteNodeByUniqueId(tree, tree, 2), null, 2)
// );
const deleteNodeAndLinkedNodeById = (tree, id) => {
    let linkedNode = undefined;
    const traverse = (nodes, id) => {
        let result = [];
        for (const node of nodes) {
            if (node.id === id) {
                linkedNode = node.linkedCategory
                    ? (0, exports.findNodeById)(tree, node.linkedCategory)
                    : undefined;
            }
            else if (node.linkedCategory === id) {
                linkedNode = (0, exports.findNodeById)(tree, node.id);
            }
            else {
                result.push(Object.assign(Object.assign({}, node), { children: node.children ? traverse(node.children, id) : undefined }));
            }
        }
        return result;
    };
    const updatedTree = traverse(tree, id);
    if (linkedNode) {
        return (0, exports.deleteNodeById)(updatedTree, linkedNode.id);
    }
    return updatedTree;
};
exports.deleteNodeAndLinkedNodeById = deleteNodeAndLinkedNodeById;
// console.log(
//   "deleteNodeAndLinkedNodeById",
//   JSON.stringify(deleteNodeAndLinkedNodeById(tree, 121), null, 2)
// );
const flattenTree = (tree, parentId) => {
    let flatTreet = [];
    for (const node of tree) {
        const newNode = Object.assign({}, node);
        delete newNode.children;
        newNode.parentId = parentId || -1;
        flatTreet.push(newNode);
        if (node.children) {
            const flatChildren = (0, exports.flattenTree)(node.children, node.id);
            flatTreet = [...flatTreet, ...flatChildren];
        }
    }
    return flatTreet;
};
exports.flattenTree = flattenTree;
// console.log("flattenTree", flattenTree(tree));
const revertFlatTree = (flatTree) => {
    const traverse = (parentId) => {
        let tree = [];
        for (const node of flatTree) {
            if (node.parentId === parentId) {
                const newNode = Object.assign({}, node);
                delete newNode.parentId;
                newNode.children = traverse(node.id).length
                    ? traverse(node.id)
                    : undefined;
                tree.push(newNode);
            }
        }
        return tree;
    };
    return traverse(-1);
};
exports.revertFlatTree = revertFlatTree;
console.log("revertFlatTree", JSON.stringify((0, exports.revertFlatTree)((0, exports.flattenTree)(consts_1.tree)), null, 2));
