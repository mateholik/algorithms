function countDown(n) {
    for (var i = n; i > 0; i--) {
        console.log(i);
    }
}
// countDown(4);
function countDownRecursion(n) {
    if (n <= 0)
        return;
    console.log(n);
    countDownRecursion(n - 1);
}
// countDownRecursion(4);
function sumRange(n) {
    var total = 0;
    for (var i = n; i > 0; i--) {
        total += i;
    }
    console.log(total);
}
// sumRange(3);
function sumRangeRecursion(n, total) {
    if (total === void 0) { total = 0; }
    if (n <= 0) {
        console.log(total);
        return;
    }
    sumRangeRecursion(n - 1, total + n);
}
// sumRangeRecursion(3);
var tree2 = {
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
    var _a, _b;
    if (((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) <= 0) {
        return;
    }
    for (var i = 0; i < ((_b = node === null || node === void 0 ? void 0 : node.children) === null || _b === void 0 ? void 0 : _b.length); i++) {
        var currentChild = node.children[i];
        console.log(currentChild.name);
        printChildren(currentChild);
    }
}
var tree3 = [
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
function returnChildrenName(tree) {
    var childrenNames = [];
    function traverse(node) {
        if (!node.children)
            return;
        for (var i = 0; i < node.children.length; i++) {
            childrenNames.push(node.children[i].name);
            traverse(node.children[i]);
        }
    }
    for (var i = 0; i < tree.length; i++) {
        traverse(tree[i]);
    }
    return childrenNames;
}
// console.log(returnChildrenName(tree3));
function getAllCategoryNames(tree) {
    var names = [];
    function traverse(node) {
        names.push(node.name);
        if (!node.children)
            return;
        for (var i = 0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }
    }
    for (var i = 0; i < tree.length; i++) {
        traverse(tree[i]);
    }
    return names;
}
// console.log(getAllCategoryNames(tree3));
// function findCategoryByName(
//   tree: Category3[],
//   name: string
// ): Category3 | undefined {
//   for (let i = 0; i < tree.length; i++) {
//     if (tree[i].name === name) return tree[i];
//     if (tree[i].children) {
//       const result = findCategoryByName(tree[i].children as Category3[], name);
//       if (result) return result;
//     }
//   }
//   return undefined;
// }
function findCategoryByName(tree, name) {
    var result = undefined;
    function traverse(node) {
        if (node.name === name) {
            result = node;
            return;
        }
        if (!node.children)
            return;
        for (var i = 0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }
    }
    for (var i = 0; i < tree.length; i++) {
        traverse(tree[i]);
    }
    return result;
}
console.log(findCategoryByName(tree3, "category_1_1"));
