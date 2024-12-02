// type TreeNode = {
//   name: string;
//   children?: TreeNode[];
// };

// const tree: TreeNode[] = [
//   {
//     name: "category 1",
//     children: [
//       {
//         name: "category 1.1",
//       },
//     ],
//   },
//   {
//     name: "category 2",
//   },
//   {
//     name: "category 3",
//     children: [
//       {
//         name: "category 3.1",
//         children: [
//           {
//             name: "category 3.1.1",
//           },
//           {
//             name: "category 3.1.2",
//           },
//         ],
//       },
//     ],
//   },
// ];

// function countNodes(tree: TreeNode[]): number {
//   let count = 0; // Initialize a counter

//   // Iterate through each node in the current level
//   for (const node of tree) {
//     count += 1; // Count the current node
//     if (node.children) {
//       // If the node has children, recursively count them
//       count += countNodes(node.children);
//     }
//   }

//   return count; // Return the total count
// }

// // console.log(countNodes(tree)); // Output: 8

// function findNode(tree: TreeNode[], nodeName: string): TreeNode | undefined {
//   for (const node of tree) {
//     if (node.name === nodeName) {
//       return node;
//     }
//     if (node.children) {
//       const found = findNode(node.children, nodeName);
//       if (found) return found;
//     }
//   }
//   return undefined;
// }

// // console.log(findNode(tree, "category 3.1.2"));

// function getLeafNodes(tree: TreeNode[]): TreeNode[] {
//   let leafNodes: TreeNode[] = [];
//   for (const node of tree) {
//     if (!node.children) {
//       leafNodes.push(node);
//     }
//     if (node.children) {
//       const childLeafNodes = getLeafNodes(node.children);
//       if (childLeafNodes.length) leafNodes = [...leafNodes, ...childLeafNodes];
//     }
//   }
//   return leafNodes;
// }

// // console.log(getLeafNodes(tree));

// function calculateDepth(tree: TreeNode[]): number {
//   let maxDepth = 0;

//   for (const node of tree) {
//     if (node.children) {
//       const depth = calculateDepth(node.children);
//       if (depth > maxDepth) {
//         maxDepth = depth;
//       }
//     }
//   }

//   return maxDepth + 1;
// }

// // console.log(calculateDepth(tree));

// // function findAllPaths(tree: TreeNode[]): string[][] {
// //   let paths: string[][] = [];

// //   for (let i = 0; i < tree.length; i++) {
// //     paths[i].push(tree[i].name);

// //     if (tree[i].children) {
// //     }
// //   }
// // }

// function flattenTree(tree: TreeNode[]): TreeNode[] {
//   const flatList: TreeNode[] = [];

//   for (const node of tree) {
//     flatList.push({ name: node.name }); // Add the current node without its children
//     if (node.children) {
//       flatList.push(...flattenTree(node.children)); // Recursively flatten the children and add to the flatList
//     }
//   }

//   return flatList;
// }

// const flatTree = flattenTree(tree);
// console.log(flatTree);
