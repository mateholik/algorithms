import { Category3, tree3 } from "./consts";

export const getFlattenTree = (
  tree: Category3[],
  parentId?: number
): Category3[] => {
  let result: Category3[] = [];

  for (let i = 0; i < tree.length; i++) {
    const obj = { ...tree[i], parentId: parentId || -1 };

    delete obj.children;

    result.push(obj);

    if (tree[i].children) {
      const children = getFlattenTree(
        tree[i].children as Category3[],
        tree[i].id
      );
      result = [...result, ...children];
    }
  }
  return result;
};

// console.log("getFlattenTree", getFlattenTree(tree3));

export const getFlattenTree2 = (tree: Category3[]): Category3[] => {
  let result: Category3[] = [];

  const traverse = (node: Category3) => {
    result.push(node);
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    }
  };

  return result;
};

// console.log("getFlattenTree2", getFlattenTree(tree3));

export const revertFlattenTree = (flatTree: Category3[]): Category3[] => {
  const traverse = (parentId: number) => {
    let result: Category3[] = [];
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
//   JSON.stringify(revertFlattenTree(getFlattenTree(tree3)), null, 2)
// );

export const revertFlattenTree2 = (flatTree: Category3[]): Category3[] => {
  const traverse = (parentId: number) => {
    let result: Category3[] = [];
    for (let i = 0; i < flatTree.length; i++) {
      if (flatTree[i].parentId === parentId) {
        result.push({ ...flatTree[i], children: traverse(flatTree[i].id) });
      }
    }
    return result;
  };
  return traverse(-1);
};

export const flattenTree4 = (tree: Category3[]): Category3[] => {
  let result: Category3[] = [];

  const traverse = (node: Category3, parentId?: number) => {
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
// console.log("flattenTree4", flattenTree4(tree3));

export const flattenTree6 = (
  tree: Category3[],
  parentId: number = -1
): Category3[] => {
  let result: Category3[] = [];

  for (let i = 0; i < tree.length; i++) {
    const obj = { ...tree[i] };
    delete obj.children;
    obj.parentId = parentId;
    result.push(obj);
    if (tree[i].children) {
      const children = flattenTree6(
        tree[i].children as Category3[],
        tree[i].id
      );
      result = [...result, ...children];
    }
  }

  return result;
};

// console.log("flattenTree6", flattenTree6(tree3));

export const revertFlatTree3 = (tree: Category3[]): Category3[] => {
  const traverse = (parentId: number) => {
    let result: Category3[] = [];
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
//   JSON.stringify(revertFlatTree3(flattenTree6(tree3)), null, 2)
// );

export const deepCloneTree2 = (tree: Category3[]): Category3[] => {
  let result: Category3[] = [];

  for (let i = 0; i < tree.length; i++) {
    result.push({
      ...tree[i],
      children: tree[i].children
        ? deepCloneTree2(tree[i].children as Category3[])
        : undefined,
    });
  }

  return result;
};

// console.log("deepCloneTree2", JSON.stringify(deepCloneTree2(tree3), null, 2));

export const findNodeById3 = (
  tree: Category3[],
  id: number
): Category3 | undefined => {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      return tree[i];
    }
    if (tree[i].children) {
      const matchInChildren = findNodeById3(
        tree[i].children as Category3[],
        id
      );
      if (matchInChildren) return matchInChildren;
    }
  }

  return undefined;
};

// console.log(
//   "findNodeById3",
//   JSON.stringify(findNodeById3(tree3, 311), null, 2)
// );

export const deleteNodeById3 = (tree: Category3[], id: number): Category3[] => {
  let levelResult: Category3[] = [];

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      continue;
    } else {
      levelResult.push({
        ...tree[i],
        children: tree[i].children
          ? deleteNodeById3(tree[i].children as Category3[], id)
          : undefined,
      });
    }
  }

  return levelResult;
};

// console.log(
//   "deleteNodeById3",
//   JSON.stringify(deleteNodeById3(tree3, 3), null, 2)
// );

export const deleteNodeByUniqueId3 = (
  tree: Category3[],
  id: number
): Category3[] => {
  let result: Category3[] = [];

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].id === id) {
      const isUnique = tree[i].linkedCategory
        ? findNodeById3(tree3, tree[i].linkedCategory as number) === undefined
        : true;

      if (!isUnique) {
        result.push({ ...tree[i] });
      }
    } else {
      result.push({
        ...tree[i],
        children: tree[i].children
          ? deleteNodeByUniqueId3(tree[i].children as Category3[], id)
          : undefined,
      });
    }
  }

  return result;
};

// console.log(
//   "deleteNodeByUniqueId3",
//   JSON.stringify(deleteNodeByUniqueId3(tree3, 11), null, 2)
// );

export const getAllNodeNames = (tree: Category3[]): string[] => {
  let result: string[] = [];

  for (let i = 0; i < tree.length; i++) {
    result.push(tree[i].name);
    if (tree[i].children) {
      result = [...result, ...getAllNodeNames(tree[i].children as Category3[])];
    }
  }
  return result;
};

// console.log("getAllNodeNames", getAllNodeNames(tree3));

export const getChildrenNodeNames = (tree: Category3[]): string[] => {
  let result: string[] = [];

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].children) {
      const childrenNames = getAllNodeNames(tree[i].children as Category3[]);
      result = [...result, ...childrenNames];
    }
  }

  return result;
};

// console.log("getChildrenNodeNames", getChildrenNodeNames(tree3));

export const getDepthOfTree = (tree: Category3[]): number => {
  let maxDepth: number = 0;

  for (let i = 0; i < tree.length; i++) {
    if (tree[i].children) {
      const branchDepth = getDepthOfTree(tree[i].children as Category3[]);
      if (branchDepth > maxDepth) maxDepth = branchDepth;
    }
  }

  return maxDepth + 1;
};

console.log("getDepthOfTree", getDepthOfTree(tree3));
