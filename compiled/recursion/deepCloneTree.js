"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCloneTree2 = exports.deepCloneTree = void 0;
const deepCloneTree = (tree) => {
    return tree.map((node) => {
        var _a;
        return (Object.assign(Object.assign({}, node), { children: ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) ? (0, exports.deepCloneTree)(node.children) : undefined }));
    });
};
exports.deepCloneTree = deepCloneTree;
// console.log("deepCloneTree2", JSON.stringify(deepCloneTree(tree), null, 2));
const deepCloneTree2 = (tree) => {
    let result = [];
    for (let i = 0; i < tree.length; i++) {
        result.push(Object.assign(Object.assign({}, tree[i]), { children: tree[i].children
                ? (0, exports.deepCloneTree2)(tree[i].children)
                : undefined }));
    }
    return result;
};
exports.deepCloneTree2 = deepCloneTree2;
