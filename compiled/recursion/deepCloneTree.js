"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCloneTree = void 0;
const deepCloneTree = (tree) => {
    return tree.map((node) => {
        var _a;
        return (Object.assign(Object.assign({}, node), { children: ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) ? (0, exports.deepCloneTree)(node.children) : undefined }));
    });
};
exports.deepCloneTree = deepCloneTree;
// console.log("deepCloneTree2", JSON.stringify(deepCloneTree(tree3), null, 2));
