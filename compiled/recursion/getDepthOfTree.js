"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDepthOfTree = void 0;
const consts_1 = require("./consts");
// function getDepthOfTree(tree: Category[]): number {
//   let maxDepthAmongChildren = 0;
//   for (const node of tree) {
//     if (node.children) {
//       const depth = getDepthOfTree(node.children);
//       if (depth > maxDepthAmongChildren) {
//         maxDepthAmongChildren = depth;
//       }
//     }
//   }
//   return maxDepthAmongChildren + 1;
// }
const getDepthOfTree = (tree) => {
    let depthOflongestNode = 0;
    const traverse = (node) => {
        let depthOfChildren = 0;
        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                const maxDepthOfChildren = traverse(node.children[i]);
                console.log({ nodeName: node.children[i].name, maxDepthOfChildren });
                if (maxDepthOfChildren > depthOfChildren)
                    depthOfChildren = maxDepthOfChildren;
            }
        }
        return depthOfChildren + 1;
    };
    for (let i = 0; i < tree.length; i++) {
        const maxDepthOfChildren = traverse(tree[i]);
        if (maxDepthOfChildren > depthOflongestNode)
            depthOflongestNode = maxDepthOfChildren;
    }
    return depthOflongestNode;
};
exports.getDepthOfTree = getDepthOfTree;
console.log((0, exports.getDepthOfTree)(consts_1.tree));
