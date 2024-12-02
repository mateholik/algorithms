"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
function printChildren(node) {
    var _a, _b;
    if (((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) <= 0) {
        return;
    }
    for (let i = 0; i < ((_b = node === null || node === void 0 ? void 0 : node.children) === null || _b === void 0 ? void 0 : _b.length); i++) {
        const currentChild = node.children[i];
        console.log(currentChild.name);
        printChildren(currentChild);
    }
}
printChildren(consts_1.tree2);
