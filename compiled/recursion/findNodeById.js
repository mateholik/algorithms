"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
const findNodeById = (tree, id) => {
    var _a;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.id === id)
            return node;
        if ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) {
            const match = findNodeById(node.children, id);
            if (match)
                return match;
        }
    }
    return undefined;
};
console.log(JSON.stringify(findNodeById(consts_1.tree3, 2), null, 2));
