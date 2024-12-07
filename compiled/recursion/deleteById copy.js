"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
const deleteById = (tree, id) => {
    return tree
        .filter((node) => node.id !== id)
        .map((node) => {
        var _a;
        return (Object.assign(Object.assign({}, node), { children: ((_a = node.children) === null || _a === void 0 ? void 0 : _a.length)
                ? deleteById(node.children, id)
                : undefined }));
    });
};
console.log(JSON.stringify(deleteById(consts_1.tree3, 2), null, 2));
