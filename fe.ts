type Category = {
  name: string;
  children?: Category[];
  id: number;
  linkedCategory?: number;
};

const tree: Category[] = [
  {
    name: "category_1",
    id: 1,

    children: [
      { name: "category_1_1", id: 11, linkedCategory: 2 },
      {
        name: "category_1_2",
        id: 12,
        children: [{ name: "category_1_2_1", id: 121 }],
      },
    ],
  },
  {
    name: "category_2",
    id: 2,
    children: [
      { name: "category_2_1", id: 21 },
      { name: "category_2_2", id: 22 },
    ],
  },
  {
    name: "category_3",
    id: 3,
    children: [
      {
        name: "category_3_1",
        id: 31,
        children: [{ name: "category_3_1_1", id: 311 }],
      },
    ],
  },
];

function categoryById(tree: Category[], id: number): Category | undefined {
  for (const category of tree) {
    if (category.id === id) return category;
    if (category.children) {
      const result = categoryById(category.children, id);
      if (result) return result;
    }
  }
  return undefined;
}

function deleteByUniqId(tree: Category[], id: number): Category[] {
  for (let i = 0; i < tree.length; i++) {
    const category = tree[i];
    if (category.id === id) {
      if (category.linkedCategory !== undefined) {
        const isLinked = categoryById(tree, category.linkedCategory);

        if (isLinked === undefined) {
          tree.splice(i, 1);
          return tree;
        }
      } else {
        tree.splice(i, 1);
        return tree;
      }
    } else if (category.children) {
      const children = deleteByUniqId(category.children, id);
      if (children !== undefined) category.children = children;
    }
  }
  return tree;
}

function deleteByUniqId2(
  tree: Category[],
  id: number,
  originalTree: Category[] = tree
): Category[] {
  for (let i = 0; i < tree.length; i++) {
    const category = tree[i];
    console.log(
      "Current Category:",
      category.name,
      "| ID:",
      category.id,
      "| Looking for ID:",
      id
    );

    if (category.id === id) {
      console.log("Matched ID:", id);

      if (category.linkedCategory !== undefined) {
        console.log("Category has linkedCategory:", category.linkedCategory);
        // Search the entire original tree for the linked category
        const isLinked = categoryById(originalTree, category.linkedCategory);

        if (isLinked !== undefined) {
          console.log(
            "Linked category exists. Not deleting category with ID:",
            id
          );
          return tree;
        } else {
          console.log(
            "Linked category does not exist. Deleting category with ID:",
            id
          );
          tree.splice(i, 1);
          return tree;
        }
      } else {
        console.log("No linkedCategory. Deleting category with ID:", id);
        tree.splice(i, 1);
        return tree;
      }
    } else if (category.children) {
      console.log("Going deeper into children of category:", category.name);
      const updatedChildren = deleteByUniqId2(
        category.children,
        id,
        originalTree
      );
      if (updatedChildren.length !== category.children.length) {
        console.log("Updated children of category:", category.name);
      }
      category.children = updatedChildren;
    } else {
      console.log("No match at current level for category:", category.name);
    }
  }
  console.log("End of loop for current tree level. Returning tree.");
  return tree; // Ensure the tree is always returned
}

const test = deleteByUniqId2(tree, 31);

console.log("Resulting Tree:", JSON.stringify(test, null, 2));
