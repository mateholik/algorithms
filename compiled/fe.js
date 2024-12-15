"use strict";
const originalTree = [
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
function findNodeById(tree, id) {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].id === id)
            return tree[i];
        if (tree[i].children) {
            const match = findNodeById(tree[i].children, id);
            if (match)
                return match;
        }
    }
    return undefined;
}
// console.log("findNodeById", JSON.stringify(findNodeById(originalTree, 311), null, 2));
function deleteByUniqId(tree, id) {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].id === id) {
            const isUnique = tree[i].linkedCategory
                ? findNodeById(originalTree, tree[i].linkedCategory) ===
                    undefined
                : true;
            if (!isUnique) {
                result.push(Object.assign({}, tree[i]));
            }
        }
        else {
            result.push(Object.assign(Object.assign({}, tree[i]), { children: tree[i].children
                    ? deleteByUniqId(tree[i].children, id)
                    : undefined }));
        }
    }
    return result;
}
console.log("deleteByUniqId", JSON.stringify(deleteByUniqId(originalTree, 12), null, 2));
