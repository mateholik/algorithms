"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNodeById = void 0;
const findNodeById = (tree, id) => {
    // console.log("findNodeById", { tree, id });
    var _a;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.id === id)
            return node;
        if ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) {
            const match = (0, exports.findNodeById)(node.children, id);
            if (match)
                return match;
        }
    }
    return undefined;
};
exports.findNodeById = findNodeById;
// console.log("findNodeById", JSON.stringify(findNodeById(tree3, 2), null, 2));
