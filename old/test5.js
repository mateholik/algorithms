var tree = [
    {
        name: "category 1",
        id: 1,
        children: [
            {
                name: "category 1.1",
                id: 1.1,
            },
        ],
    },
    {
        name: "category 2",
        id: 2,
    },
    {
        name: "category 3",
        id: 3,
        children: [
            {
                name: "category 3.1",
                id: 3.1,
                children: [
                    {
                        name: "category 3.1.1",
                        id: 3.11,
                    },
                    {
                        name: "category 3.1.2",
                        id: 3.12,
                    },
                ],
            },
        ],
    },
];
function findByName(tree, name) {
    for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
        var category = tree_1[_i];
        if (category.name === name)
            return category;
        if (category.children) {
            var result = findByName(category.children, name);
            if (result)
                return result;
        }
    }
    return undefined;
}
// const test = findByName(tree, "category 1");
// console.log(test);
// function flatterTree(tree: Category[]): Category[] {
//   let result: Category[] = [];
//   for (const category of tree) {
//     result.push({ name: category.name }); // Push the current category without children
//     if (category.children) {
//       result = [...result, ...flatterTree(category.children)]; // Recursively flatten children
//     }
//   }
//   return result;
// }
// const test = flatterTree(tree);
// console.log(test);
function deleteById(tree, id) {
    return tree.filter(function (item) {
        if (item.id === id)
            return false;
        if (item.children) {
            return deleteById(item.children, id);
        }
        return true;
    });
}
var test = deleteById(tree, 3.11);
console.log(JSON.stringify(test));
