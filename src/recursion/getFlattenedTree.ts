import { tree, type Category } from "./consts";

const getFlattenedTree = (tree: Category[]): Category[] => {
  let result: Category[] = [];

  const traverse = (node: Category, parentNodeId?: number): void => {
    result.push({
      ...node,
      children: undefined,
      parentId: parentNodeId || -1,
    });
    if (!node.children) return;

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i], node.id);
    }
  };

  for (let i = 0; i < tree.length; i++) {
    traverse(tree[i]);
  }

  return result;
};

// console.log("getFlattenedTree3", getFlattenedTree(tree));

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

const revertFlattenedTree = (flatTree: Category[]): Category[] => {
  const buildTree = (parentId: number): Category[] => {
    let result = [];

    for (let i = 0; i < flatTree.length; i++) {
      if (flatTree[i].parentId === parentId) {
        result.push({
          ...flatTree[i],
          children: buildTree(flatTree[i].id),
        });
      }
    }
    return result;
  };

  return buildTree(-1);
};

console.log(
  "revertFlattenedTree3",
  JSON.stringify(revertFlattenedTree(getFlattenedTree(tree)), null, 2)
);

// buildTree(-1) → [category_1, category_2, category_3]
//     ├─ buildTree(1) → [category_1_1, category_1_2]
//     │       ├─ buildTree(11) → []
//     │       ├─ buildTree(12) → [category_1_2_1]
//     │               ├─ buildTree(121) → []
//     ├─ buildTree(2) → [category_2_1, category_2_2]
//     │       ├─ buildTree(21) → []
//     │       ├─ buildTree(22) → []
//     ├─ buildTree(3) → [category_3_1]
//             ├─ buildTree(31) → [category_3_1_1]
//                     ├─ buildTree(311) → []
