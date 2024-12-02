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
function findCats(tree, parentName) {
  for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
    var category = tree_1[_i];
    if (category.name === parentName) {
      return category.children;
    }
    if (category.children) {
      var result_1 = findCats(category.children, parentName);
      if (result_1) return result_1;
    }
  }
  return undefined;
}
var result = findCats(tree, "category 3.1");
console.log(result);
