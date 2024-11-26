function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}

// countDown(4);

function countDownRecursion(n) {
  if (n <= 0) return;
  console.log(n);
  countDownRecursion(n - 1);
}

// countDownRecursion(4);

function sumRange(n) {
  let total = 0;

  for (let i = n; i > 0; i--) {
    total += i;
  }
  console.log(total);
}

// sumRange(3);

function sumRangeRecursion(n, total = 0) {
  if (n <= 0) {
    console.log(total);
    return;
  }
  sumRangeRecursion(n - 1, total + n);
}

// sumRangeRecursion(3);

const tree2 = {
  name: "John",
  children: [
    { name: "Jim", children: [] },
    {
      name: "Zoe",
      children: [
        {
          name: "Kyle",
          children: [],
        },
        {
          name: "Sophia",
          children: [],
        },
      ],
    },
  ],
};

function printChildren(node) {
  if (node.children?.length <= 0) {
    return;
  }
  for (let i = 0; i < node?.children?.length; i++) {
    const currentChild = node.children[i];
    console.log(currentChild.name);
    printChildren(currentChild);
  }
}

// printChildren(tree2);

type Category3 = {
  name: string;
  children?: Category3[];
  id: number;
  linkedCategory?: number;
};

const tree3: Category3[] = [
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

function returnChildrenName(tree: Category3[]): string[] {
  const childrenNames: string[] = [];

  function traverse(node: Category3): void {
    if (!node.children) return;

    for (let i = 0; i < node.children.length; i++) {
      childrenNames.push(node.children[i].name);
      traverse(node.children[i]);
    }
  }

  for (let i = 0; i < tree.length; i++) {
    traverse(tree[i]);
  }

  return childrenNames;
}

// console.log(returnChildrenName(tree3));

function getAllCategoryNames(tree: Category3[]): string[] {
  const names: string[] = [];

  function traverse(node: Category3): void {
    names.push(node.name);
    if (!node.children) return;

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  }

  for (let i = 0; i < tree.length; i++) {
    traverse(tree[i]);
  }

  return names;
}

// console.log(getAllCategoryNames(tree3));

function findCategoryByName(
  tree: Category3[],
  name: string
): Category3 | undefined {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].name === name) return tree[i];
    if (tree[i].children) {
      const result = findCategoryByName(tree[i].children as Category3[], name);
      if (result) return result;
    }
  }
  return undefined;
}
console.log(findCategoryByName(tree3, "category_1_1"));
