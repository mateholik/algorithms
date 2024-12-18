"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findParents2 = exports.flattenTree = exports.deleteNodeByUniqueId = exports.deleteNodeById = exports.getNodeById = exports.getNodesAmount = exports.getDepthOfTree = exports.getChildrenNodeNames = exports.getAllNodeNames = exports.deleteNodeByUniqueId3 = exports.deleteNodeById3 = exports.findNodeById3 = exports.deepCloneTree2 = exports.revertFlatTree3 = exports.flattenTree6 = exports.flattenTree4 = exports.revertFlattenTree2 = exports.revertFlattenTree = exports.getFlattenTree2 = exports.getFlattenTree = void 0;
const consts_1 = require("./consts");
const getFlattenTree = (tree, parentId) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        const obj = Object.assign(Object.assign({}, tree[i]), { parentId: parentId || -1 });
        delete obj.children;
        result.push(obj);
        if (tree[i].children) {
            const children = (0, exports.getFlattenTree)(tree[i].children, tree[i].id);
            result = [...result, ...children];
        }
    }
    return result;
};
exports.getFlattenTree = getFlattenTree;
// console.log("getFlattenTree", getFlattenTree(tree));
const getFlattenTree2 = (tree) => {
    let result = [];
    const traverse = (node) => {
        result.push(node);
        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                traverse(node.children[i]);
            }
        }
    };
    return result;
};
exports.getFlattenTree2 = getFlattenTree2;
// console.log("getFlattenTree2", getFlattenTree(tree));
const revertFlattenTree = (flatTree) => {
    const traverse = (parentId) => {
        let result = [];
        for (let i = 0; i < flatTree.length; i++) {
            if (flatTree[i].parentId === parentId) {
                result.push(Object.assign(Object.assign({}, flatTree[i]), { children: traverse(flatTree[i].id) }));
            }
        }
        return result;
    };
    return traverse(-1);
};
exports.revertFlattenTree = revertFlattenTree;
// console.log(
//   "revertFlattenTree",
//   JSON.stringify(revertFlattenTree(getFlattenTree(tree)), null, 2)
// );
const revertFlattenTree2 = (flatTree) => {
    const traverse = (parentId) => {
        let result = [];
        for (let i = 0; i < flatTree.length; i++) {
            if (flatTree[i].parentId === parentId) {
                result.push(Object.assign(Object.assign({}, flatTree[i]), { children: traverse(flatTree[i].id) }));
            }
        }
        return result;
    };
    return traverse(-1);
};
exports.revertFlattenTree2 = revertFlattenTree2;
const flattenTree4 = (tree) => {
    let result = [];
    const traverse = (node, parentId) => {
        const obj = Object.assign({}, node);
        delete obj.children;
        obj.parentId = parentId || -1;
        result.push(obj);
        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                traverse(node.children[i], node.id);
            }
        }
    };
    for (let i = 0; i < tree.length; i++) {
        traverse(tree[i]);
    }
    return result;
};
exports.flattenTree4 = flattenTree4;
// console.log("flattenTree4", flattenTree4(tree));
const flattenTree6 = (tree, parentId = -1) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        const obj = Object.assign({}, tree[i]);
        delete obj.children;
        obj.parentId = parentId;
        result.push(obj);
        if (tree[i].children) {
            const children = (0, exports.flattenTree6)(tree[i].children, tree[i].id);
            result = [...result, ...children];
        }
    }
    return result;
};
exports.flattenTree6 = flattenTree6;
// console.log("flattenTree6", flattenTree6(tree));
const revertFlatTree3 = (tree) => {
    const traverse = (parentId) => {
        let result = [];
        for (let i = 0; i < tree.length; i++) {
            if (tree[i].parentId === parentId) {
                const node = Object.assign(Object.assign({}, tree[i]), { children: traverse(tree[i].id) });
                delete node.parentId;
                result.push(node);
            }
        }
        return result;
    };
    return traverse(-1);
};
exports.revertFlatTree3 = revertFlatTree3;
// console.log(
//   "revertFlatTree3",
//   JSON.stringify(revertFlatTree3(flattenTree6(tree)), null, 2)
// );
const deepCloneTree2 = (tree) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        result.push(Object.assign(Object.assign({}, tree[i]), { children: tree[i].children
                ? (0, exports.deepCloneTree2)(tree[i].children)
                : undefined }));
    }
    return result;
};
exports.deepCloneTree2 = deepCloneTree2;
// console.log("deepCloneTree2", JSON.stringify(deepCloneTree2(tree), null, 2));
const findNodeById3 = (tree, id) => {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].id === id) {
            return tree[i];
        }
        if (tree[i].children) {
            const matchInChildren = (0, exports.findNodeById3)(tree[i].children, id);
            if (matchInChildren)
                return matchInChildren;
        }
    }
    return undefined;
};
exports.findNodeById3 = findNodeById3;
// console.log(
//   "findNodeById3",
//   JSON.stringify(findNodeById3(tree, 311), null, 2)
// );
const deleteNodeById3 = (tree, id) => {
    let levelResult = [];
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].id === id) {
            continue;
        }
        else {
            levelResult.push(Object.assign(Object.assign({}, tree[i]), { children: tree[i].children
                    ? (0, exports.deleteNodeById3)(tree[i].children, id)
                    : undefined }));
        }
    }
    return levelResult;
};
exports.deleteNodeById3 = deleteNodeById3;
// console.log(
//   "deleteNodeById3",
//   JSON.stringify(deleteNodeById3(tree, 3), null, 2)
// );
const deleteNodeByUniqueId3 = (tree, id) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].id === id) {
            const isUnique = tree[i].linkedCategory
                ? (0, exports.findNodeById3)(tree, tree[i].linkedCategory) === undefined
                : true;
            if (!isUnique) {
                result.push(Object.assign({}, tree[i]));
            }
        }
        else {
            result.push(Object.assign(Object.assign({}, tree[i]), { children: tree[i].children
                    ? (0, exports.deleteNodeByUniqueId3)(tree[i].children, id)
                    : undefined }));
        }
    }
    return result;
};
exports.deleteNodeByUniqueId3 = deleteNodeByUniqueId3;
// console.log(
//   "deleteNodeByUniqueId3",
//   JSON.stringify(deleteNodeByUniqueId3(tree, 11), null, 2)
// );
const getAllNodeNames = (tree) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        result.push(tree[i].name);
        if (tree[i].children) {
            result = [...result, ...(0, exports.getAllNodeNames)(tree[i].children)];
        }
    }
    return result;
};
exports.getAllNodeNames = getAllNodeNames;
// console.log("getAllNodeNames", getAllNodeNames(tree));
const getChildrenNodeNames = (tree) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].children) {
            const childrenNames = (0, exports.getAllNodeNames)(tree[i].children);
            result = [...result, ...childrenNames];
        }
    }
    return result;
};
exports.getChildrenNodeNames = getChildrenNodeNames;
// console.log("getChildrenNodeNames", getChildrenNodeNames(tree));
const getDepthOfTree = (tree) => {
    let maxDepth = 0;
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].children) {
            const branchDepth = (0, exports.getDepthOfTree)(tree[i].children);
            if (branchDepth > maxDepth)
                maxDepth = branchDepth;
        }
    }
    return maxDepth + 1;
};
exports.getDepthOfTree = getDepthOfTree;
// console.log("getDepthOfTree", getDepthOfTree(tree));
const getNodesAmount = (tree) => {
    let amount = 0;
    for (let i = 0; i < tree.length; i++) {
        amount++;
        if (tree[i].children) {
            const amountInBranch = (0, exports.getNodesAmount)(tree[i].children);
            amount += amountInBranch;
        }
    }
    return amount;
};
exports.getNodesAmount = getNodesAmount;
// console.log("getNodesAmount", getNodesAmount(tree));
const getNodeById = (tree, id) => {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].id === id) {
            return tree[i];
        }
        if (tree[i].children) {
            const matchInChildren = (0, exports.getNodeById)(tree[i].children, id);
            if (matchInChildren)
                return matchInChildren;
        }
    }
    return undefined;
};
exports.getNodeById = getNodeById;
// console.log("getNodeById", getNodeById(tree, 31));
const deleteNodeById = (tree, id) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].id === id) {
            continue;
        }
        else {
            result.push(Object.assign(Object.assign({}, tree[i]), { children: tree[i].children
                    ? (0, exports.deleteNodeById)(tree[i].children, id)
                    : undefined }));
        }
    }
    return result;
};
exports.deleteNodeById = deleteNodeById;
// console.log(
//   "deleteNodeById",
//   JSON.stringify(deleteNodeById(tree, 11), null, 2)
// );
const originalTree = consts_1.tree;
const deleteNodeByUniqueId = (tree, id) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].id === id) {
            const isUnique = tree[i].linkedCategory
                ? (0, exports.getNodeById)(originalTree, tree[i].linkedCategory) ===
                    undefined
                : true;
            if (!isUnique) {
                result.push(Object.assign({}, tree[i]));
            }
        }
        else {
            result.push(Object.assign(Object.assign({}, tree[i]), { children: tree[i].children
                    ? (0, exports.deleteNodeByUniqueId)(tree[i].children, id)
                    : undefined }));
        }
    }
    return result;
};
exports.deleteNodeByUniqueId = deleteNodeByUniqueId;
// console.log(
//   "deleteNodeByUniqueId",
//   JSON.stringify(deleteNodeByUniqueId(tree, 11), null, 2)
// );
const flattenTree = (tree, parentId) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        const node = Object.assign({}, tree[i]);
        delete node.children;
        node.parentId = parentId || -1;
        result.push(node);
        if (tree[i].children) {
            const children = (0, exports.flattenTree)(tree[i].children, tree[i].id);
            result = [...result, ...children];
        }
    }
    return result;
};
exports.flattenTree = flattenTree;
// console.log("flattenTree", flattenTree(tree));
const revertFlattenedTree = (flatTree) => {
    const traverse = (parentId) => {
        let result = [];
        for (let i = 0; i < flatTree.length; i++) {
            if (flatTree[i].parentId === parentId) {
                result.push(Object.assign(Object.assign({}, flatTree[i]), { children: traverse(flatTree[i].id) }));
            }
        }
        return result;
    };
    return traverse(-1);
};
// console.log(
//   "revertFlattenedTree",
//   JSON.stringify(revertFlattenedTree(flattenTree(tree)), null, 2)
// );
const revertFlattenedTree2 = (flatTree) => {
    const traverse = (parentId) => {
        let result = [];
        for (let i = 0; i < flatTree.length; i++) {
            if (flatTree[i].parentId === parentId) {
                result.push(Object.assign(Object.assign({}, flatTree[i]), { children: traverse(flatTree[i].id) }));
            }
        }
        return result;
    };
    return traverse(-1);
};
const getLeafNodes = (tree) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        if (!tree[i].children) {
            result.push(Object.assign({}, tree[i]));
        }
        else {
            const children = getLeafNodes(tree[i].children);
            result = [...result, ...children];
        }
    }
    return result;
};
// console.log("revertFlattenedTree", JSON.stringify(getLeafNodes(tree), null, 2));
const getDepthOfTree3 = (tree) => {
    let maxDepth = 0;
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].children) {
            const branchDepth = getDepthOfTree3(tree[i].children);
            if (branchDepth > maxDepth)
                maxDepth = branchDepth;
        }
    }
    return maxDepth + 1;
};
// console.log("getDepthOfTree3", getDepthOfTree3(tree));
const findCategoryByID = (tree, id) => {
    for (const node of tree) {
        if (node.id === id) {
            return node;
        }
        if (node.children) {
            const match = findCategoryByID(node.children, id);
            if (match)
                return match;
        }
    }
    return undefined;
};
// console.log("findCategoryByID", findCategoryByID(tree, 1));
const deleteCategoryByID = (tree, id) => {
    let updatedTree = [];
    for (const node of tree) {
        if (node.id === id) {
            continue;
        }
        else {
            updatedTree.push(Object.assign(Object.assign({}, node), { children: node.children
                    ? deleteCategoryByID(node.children, id)
                    : undefined }));
        }
    }
    return updatedTree;
};
// console.log(
//   "deleteCategoryByID",
//   JSON.stringify(deleteCategoryByID(tree, 121), null, 2)
// );
const deleteCategoryByUniqueID = (tree, id, originalTree) => {
    let updatedTree = [];
    for (const node of tree) {
        if (node.id === id) {
            const isUnique = node.linkedCategory
                ? findCategoryByID(originalTree, node.linkedCategory) === undefined
                : true;
            if (!isUnique) {
                updatedTree.push(Object.assign({}, node));
            }
        }
        else {
            updatedTree.push(Object.assign(Object.assign({}, node), { children: node.children
                    ? deleteCategoryByUniqueID(node.children, id, originalTree)
                    : undefined }));
        }
    }
    return updatedTree;
};
console.log("deleteCategoryByUniqueID", JSON.stringify(deleteCategoryByUniqueID(consts_1.tree, 3, consts_1.tree), null, 2));
// const originalTree = tree;
// export const deleteNodeByUniqueId = (
//   tree: Category[],
//   id: number
// ): Category[] => {
//   let result: Category[] = [];
//   for (let i = 0; i < tree.length; i++) {
//     if (tree[i].id === id) {
//       const isUnique = tree[i].linkedCategory
//         ? getNodeById(originalTree, tree[i].linkedCategory as number) ===
//           undefined
//         : true;
//       if (!isUnique) {
//         result.push({ ...tree[i] });
//       }
//     } else {
//       result.push({
//         ...tree[i],
//         children: tree[i].children
//           ? deleteNodeByUniqueId(tree[i].children as Category[], id)
//           : undefined,
//       });
//     }
//   }
//   return result;
// };
const walk = (tree) => {
    var _a;
    for (let i = 0; i < tree.length; i++) {
        console.log(tree[i].id);
        if ((_a = tree[i].children) === null || _a === void 0 ? void 0 : _a.length) {
            walk(tree[i].children);
        }
    }
};
// console.log("walk", walk(tree));
const findParents2 = (tree, id) => {
    const traverse = (node, path) => {
        path.push(node.name);
        if (node.id === id) {
            return path.slice(0, -1);
        }
        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                const match = traverse(node.children[i], path);
                if (match)
                    return match;
            }
        }
        path.pop();
        return undefined;
    };
    for (let i = 0; i < tree.length; i++) {
        const path = traverse(tree[i], []);
        if (path)
            return path;
    }
    return [];
};
exports.findParents2 = findParents2;
console.log("findParents2", (0, exports.findParents2)(consts_1.tree, 31));
