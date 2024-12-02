"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./consts");
function printChildren(node) {
    if (!node.children || node.children.length <= 0) {
        return;
    }
    for (let i = 0; i < node.children.length; i++) {
        const currentChild = node.children[i];
        console.log(currentChild.name);
        printChildren(currentChild);
    }
}
printChildren(consts_1.tree2);
