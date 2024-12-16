"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findParents = void 0;
const consts_1 = require("./consts");
const findParents = (tree, id) => {
    const traverse = (tree, path) => {
        for (let i = 0; i < tree.length; i++) {
            path.push(tree[i].name);
            if (tree[i].id === id) {
                return path.slice(0, -1);
            }
            if (tree[i].children) {
                const result = traverse(tree[i].children, path);
                if (result)
                    return result;
            }
            path.pop();
        }
        return undefined;
    };
    return traverse(tree, []) || [];
};
exports.findParents = findParents;
console.log("findParents", (0, exports.findParents)(consts_1.tree, 121));
// findParents(tree, 121)
// ├─ traverse([category_1, category_2, category_3], [])
// │   ├─ traverse([category_1_1, category_1_2], [category_1])
// │   │   ├─ traverse([], [category_1, category_1_1])
// │   │   │   └─ return null
// │   │   ├─ traverse([category_1_2_1], [category_1, category_1_2])
// │   │   │   ├─ traverse([], [category_1, category_1_2, category_1_2_1])
// │   │   │   │   └─ return null
// │   │   │   └─ Found target: 121 → return [category_1, category_1_2]
// │   │   └─ return [category_1, category_1_2]
// │   └─ return [category_1, category_1_2]
// ├─ traverse([category_2_1, category_2_2], [category_2])
// │   ├─ traverse([], [category_2, category_2_1])
// │   │   └─ return null
// │   ├─ traverse([], [category_2, category_2_2])
// │   │   └─ return null
// │   └─ return null
// ├─ traverse([category_3_1], [category_3])
// │   ├─ traverse([category_3_1_1], [category_3, category_3_1])
// │   │   ├─ traverse([], [category_3, category_3_1, category_3_1_1])
// │   │   │   └─ return null
// │   │   └─ return null
// │   └─ return null
// └─ return [category_1, category_1_2]
// export const findParents = (
//   tree: Category[],
//   id: number
// ): string[] | undefined => {
//   const traverse = (node: Category, path: string[]): string[] | undefined => {
//     console.log("Visiting:", node.id, "Path so far:", path);
//     path.push(node.name);
//     if (node.id === id) {
//       return path.slice(0, -1);
//     }
//     if (node.children) {
//       for (let i = 0; i < node.children.length; i++) {
//         const match = traverse(node.children[i] as Category, path);
//         if (match) return match;
//       }
//     }
//     path.pop();
//     return undefined;
//   };
//   for (let i = 0; i < tree.length; i++) {
//     const match = traverse(tree[i] as Category, []);
//     if (match) return match;
//   }
// };
