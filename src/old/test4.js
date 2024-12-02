var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tree = [
    {
        name: "category 1",
        children: [
            {
                name: "category 1.1",
            },
        ],
    },
    {
        name: "category 2",
    },
    {
        name: "category 3",
        children: [
            {
                name: "category 3.1",
                children: [
                    {
                        name: "category 3.1.1",
                    },
                    {
                        name: "category 3.1.2",
                    },
                ],
            },
        ],
    },
];
// let count = 0;
// function findCats(tree: Category[], name: string): Category[] | undefined {
//   count++;
//   for (const category of tree) {
//     if (category.name === name) {
//       return category.children;
//     }
//     if (category.children) {
//       const result = findCats(category.children, name);
//       if (result) return result;
//     }
//   }
//   return undefined;
// }
// const result = findCats(tree, "category 3.1");
// console.log({ result, count });
function findCategories(nodes, name) {
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        if (node.name === name)
            return node;
        if (node.children) {
            var result_1 = findCategories(node.children, name);
            if (result_1)
                return result_1;
        }
    }
    return undefined;
}
// const result = findCategories(tree, "category 3");
// console.log({ result });
function findNodeAmount(nodes) {
    var count = 0;
    for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
        var node = nodes_2[_i];
        count++;
        if (node.children) {
            count += findNodeAmount(node.children);
        }
    }
    return count;
}
// const result = findNodeAmount(tree);
// console.log({ result });
function flattenTree(nodes) {
    var tree = [];
    for (var _i = 0, nodes_3 = nodes; _i < nodes_3.length; _i++) {
        var node = nodes_3[_i];
        tree.push(node.name);
        if (node.children) {
            var result_2 = flattenTree(node.children);
            tree = __spreadArray(__spreadArray([], tree, true), result_2, true);
        }
    }
    return tree;
}
var result = flattenTree(tree);
console.log({ result: result });
