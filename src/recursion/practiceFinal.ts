import { Category, tree } from "./consts";

export const getFlattenTree = (
  tree: Category[],
  parentId?: number
): Category[] => {
  let result: Category[] = [];

  for (let i = 0; i < tree.length; i++) {
    const obj = { ...tree[i], parentId: parentId || -1 };

    delete obj.children;

    result.push(obj);

    if (tree[i].children) {
      const children = getFlattenTree(
        tree[i].children as Category[],
        tree[i].id
      );
      result = [...result, ...children];
    }
  }
  return result;
};

// console.log("getFlattenTree", getFlattenTree(tree));

export const getFlattenTree2 = (tree: Category[]): Category[] => {
  let result: Category[] = [];

  const traverse = (node: Category) => {
    result.push(node);
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    }
  };

  return result;
};

// console.log("getFlattenTree2", getFlattenTree(tree));

export const revertFlattenTree = (flatTree: Category[]): Category[] => {
  const traverse = (parentId: number) => {
    let result: Category[] = [];
    for (let i = 0; i < flatTree.length; i++) {
      if (flatTree[i].parentId === parentId) {
        result.push({ ...flatTree[i], children: traverse(flatTree[i].id) });
      }
    }
    return result;
  };

  return traverse(-1);
};

// console.log(
//   "revertFlattenTree",
//   JSON.stringify(revertFlattenTree(getFlattenTree(tree)), null, 2)
// );

export const revertFlattenTree2 = (flatTree: Category[]): Category[] => {
  const traverse = (parentId: number) => {
    let result: Category[] = [];
    for (let i = 0; i < flatTree.length; i++) {
      if (flatTree[i].parentId === parentId) {
        result.push({ ...flatTree[i], children: traverse(flatTree[i].id) });
      }
    }
    return result;
  };
  return traverse(-1);
};

export const flattenTree4 = (tree: Category[]): Category[] => {
  let result: Category[] = [];

  const traverse = (node: Category, parentId?: number) => {
    const obj = { ...node };
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
// console.log("flattenTree4", flattenTree4(tree));

export const flattenTree6 = (
  tree: Category[],
  parentId: number = -1
): Category[] => {
  let result: Category[] = [];

  for (let i = 0; i < tree.length; i++) {
    const obj = { ...tree[i] };
    delete obj.children;
    obj.parentId = parentId;
    result.push(obj);
    if (tree[i].children) {
      const children = flattenTree6(tree[i].children as Category[], tree[i].id);
      result = [...result, ...children];
    }
  }

  return result;
};

// console.log("flattenTree6", flattenTree6(tree));

export const revertFlatTree3 = (tree: Category[]): Category[] => {
  const traverse = (parentId: number) => {
    let result: Category[] = [];
    for (let i = 0; i < tree.length; i++) {
      if (tree[i].parentId === parentId) {
        const node = { ...tree[i], children: traverse(tree[i].id) };
        delete node.parentId;
        result.push(node);
      }
    }
    return result;
  };

  return traverse(-1);
};

// console.log(
//   "revertFlatTree3",
//   JSON.stringify(revertFlatTree3(flattenTree6(tree)), null, 2)
// );

export const deepCloneTree2 = (tree: Category[]): Category[] => {
  let result: Category[] = [];

  for (let i = 0; i < tree.length; i++) {
    result.push({
      ...tree[i],
      children: tree[i].children
        ? deepCloneTree2(tree[i].children as Category[])
        : undefined,
    });
  }

  return result;
};

// console.log("deepCloneTree2", JSON.stringify(deepCloneTree2(tree), null, 2));

export const findNodeById3 = (
  tree: Category[],
  id: number
): Category | undefined => {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      return tree[i];
    }
    if (tree[i].children) {
      const matchInChildren = findNodeById3(tree[i].children as Category[], id);
      if (matchInChildren) return matchInChildren;
    }
  }

  return undefined;
};

// console.log(
//   "findNodeById3",
//   JSON.stringify(findNodeById3(tree, 311), null, 2)
// );

export const deleteNodeById3 = (tree: Category[], id: number): Category[] => {
  let levelResult: Category[] = [];

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      continue;
    } else {
      levelResult.push({
        ...tree[i],
        children: tree[i].children
          ? deleteNodeById3(tree[i].children as Category[], id)
          : undefined,
      });
    }
  }

  return levelResult;
};

// console.log(
//   "deleteNodeById3",
//   JSON.stringify(deleteNodeById3(tree, 3), null, 2)
// );

export const deleteNodeByUniqueId3 = (
  tree: Category[],
  id: number
): Category[] => {
  let result: Category[] = [];

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      const isUnique = tree[i].linkedCategory
        ? findNodeById3(tree, tree[i].linkedCategory as number) === undefined
        : true;

      if (!isUnique) {
        result.push({ ...tree[i] });
      }
    } else {
      result.push({
        ...tree[i],
        children: tree[i].children
          ? deleteNodeByUniqueId3(tree[i].children as Category[], id)
          : undefined,
      });
    }
  }

  return result;
};

// console.log(
//   "deleteNodeByUniqueId3",
//   JSON.stringify(deleteNodeByUniqueId3(tree, 11), null, 2)
// );

export const getAllNodeNames = (tree: Category[]): string[] => {
  let result: string[] = [];

  for (let i = 0; i < tree.length; i++) {
    result.push(tree[i].name);
    if (tree[i].children) {
      result = [...result, ...getAllNodeNames(tree[i].children as Category[])];
    }
  }
  return result;
};

// console.log("getAllNodeNames", getAllNodeNames(tree));

export const getChildrenNodeNames = (tree: Category[]): string[] => {
  let result: string[] = [];

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].children) {
      const childrenNames = getAllNodeNames(tree[i].children as Category[]);
      result = [...result, ...childrenNames];
    }
  }

  return result;
};

// console.log("getChildrenNodeNames", getChildrenNodeNames(tree));

export const getDepthOfTree = (tree: Category[]): number => {
  let maxDepth: number = 0;

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].children) {
      const branchDepth = getDepthOfTree(tree[i].children as Category[]);
      if (branchDepth > maxDepth) maxDepth = branchDepth;
    }
  }

  return maxDepth + 1;
};

// console.log("getDepthOfTree", getDepthOfTree(tree));

export const getNodesAmount = (tree: Category[]): number => {
  let amount: number = 0;

  for (let i = 0; i < tree.length; i++) {
    amount++;
    if (tree[i].children) {
      const amountInBranch = getNodesAmount(tree[i].children as Category[]);
      amount += amountInBranch;
    }
  }

  return amount;
};

// console.log("getNodesAmount", getNodesAmount(tree));

export const getNodeById = (
  tree: Category[],
  id: number
): Category | undefined => {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      return tree[i];
    }
    if (tree[i].children) {
      const matchInChildren = getNodeById(tree[i].children as Category[], id);
      if (matchInChildren) return matchInChildren;
    }
  }
  return undefined;
};

// console.log("getNodeById", getNodeById(tree, 31));

export const deleteNodeById = (tree: Category[], id: number): Category[] => {
  let result: Category[] = [];
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      continue;
    } else {
      result.push({
        ...tree[i],
        children: tree[i].children
          ? deleteNodeById(tree[i].children as Category[], id)
          : undefined,
      });
    }
  }

  return result;
};
// console.log(
//   "deleteNodeById",
//   JSON.stringify(deleteNodeById(tree, 11), null, 2)
// );

const originalTree = tree;
export const deleteNodeByUniqueId = (
  tree: Category[],
  id: number
): Category[] => {
  let result: Category[] = [];

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      const isUnique = tree[i].linkedCategory
        ? getNodeById(originalTree, tree[i].linkedCategory as number) ===
          undefined
        : true;

      if (!isUnique) {
        result.push({ ...tree[i] });
      }
    } else {
      result.push({
        ...tree[i],
        children: tree[i].children
          ? deleteNodeByUniqueId(tree[i].children as Category[], id)
          : undefined,
      });
    }
  }

  return result;
};

// console.log(
//   "deleteNodeByUniqueId",
//   JSON.stringify(deleteNodeByUniqueId(tree, 11), null, 2)
// );

export const flattenTree = (
  tree: Category[],
  parentId?: number
): Category[] => {
  let result: Category[] = [];

  for (let i = 0; i < tree.length; i++) {
    const node = { ...tree[i] };
    delete node.children;
    node.parentId = parentId || -1;
    result.push(node);

    if (tree[i].children) {
      const children = flattenTree(tree[i].children as Category[], tree[i].id);

      result = [...result, ...children];
    }
  }

  return result;
};

// console.log("flattenTree", flattenTree(tree));

const revertFlattenedTree = (flatTree: Category[]): Category[] => {
  const traverse = (parentId: number) => {
    let result: Category[] = [];
    for (let i = 0; i < flatTree.length; i++) {
      if (flatTree[i].parentId === parentId) {
        result.push({ ...flatTree[i], children: traverse(flatTree[i].id) });
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

const revertFlattenedTree2 = (flatTree: Category[]): Category[] => {
  const traverse = (parentId: number) => {
    let result: Category[] = [];
    for (let i = 0; i < flatTree.length; i++) {
      if (flatTree[i].parentId === parentId) {
        result.push({ ...flatTree[i], children: traverse(flatTree[i].id) });
      }
    }
    return result;
  };
  return traverse(-1);
};

const getLeafNodes = (tree: Category[]): Category[] => {
  let result: Category[] = [];
  for (let i = 0; i < tree.length; i++) {
    if (!tree[i].children) {
      result.push({ ...tree[i] });
    } else {
      const children = getLeafNodes(tree[i].children as Category[]);
      result = [...result, ...children];
    }
  }

  return result;
};

// console.log("revertFlattenedTree", JSON.stringify(getLeafNodes(tree), null, 2));

const getDepthOfTree3 = (tree: Category[]): number => {
  let maxDepth = 0;

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].children) {
      const branchDepth = getDepthOfTree3(tree[i].children as Category[]);
      if (branchDepth > maxDepth) maxDepth = branchDepth;
    }
  }

  return maxDepth + 1;
};

// console.log("getDepthOfTree3", getDepthOfTree3(tree));

const findCategoryByID = (
  tree: Category[],
  id: number
): Category | undefined => {
  for (const node of tree) {
    if (node.id === id) {
      return node;
    }
    if (node.children) {
      const match = findCategoryByID(node.children, id);
      if (match) return match;
    }
  }
  return undefined;
};

// console.log("findCategoryByID", findCategoryByID(tree, 1));

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

// console.log(
//   "deleteCategoryByID",
//   JSON.stringify(deleteCategoryByID(tree, 121), null, 2)
// );

const deleteCategoryByUniqueID = (
  tree: Category[],
  id: number,
  originalTree: Category[]
): Category[] => {
  let updatedTree: Category[] = [];

  for (const node of tree) {
    if (node.id === id) {
      const isUnique = node.linkedCategory
        ? findCategoryByID(originalTree, node.linkedCategory) === undefined
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

const walk = (tree: Category[]) => {
  for (let i = 0; i < tree.length; i++) {
    console.log(tree[i].id);

    if (tree[i].children?.length) {
      walk(tree[i].children as Category[]);
    }
  }
};

// console.log("walk", walk(tree));

export const findParents2 = (tree: Category[], id: number): string[] => {
  const traverse = (node: Category, path: string[]): string[] | undefined => {
    path.push(node.name);

    if (node.id === id) {
      return path.slice(0, -1);
    }
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        const match = traverse(node.children[i], path);
        if (match) return match;
      }
    }
    path.pop();
    return undefined;
  };

  for (let i = 0; i < tree.length; i++) {
    const path = traverse(tree[i], []);
    if (path) return path;
  }
  return [];
};

console.log("findParents2", findParents2(tree, 31));
