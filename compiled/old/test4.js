"use strict";
// type Category = {
//   name: string;
//   children?: Category[];
// };
// var tree: Category[] = [
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
// // let count = 0;
// // function findCats(tree: Category[], name: string): Category[] | undefined {
// //   count++;
// //   for (const category of tree) {
// //     if (category.name === name) {
// //       return category.children;
// //     }
// //     if (category.children) {
// //       const result = findCats(category.children, name);
// //       if (result) return result;
// //     }
// //   }
// //   return undefined;
// // }
// // const result = findCats(tree, "category 3.1");
// // console.log({ result, count });
// function findCategories(nodes: Category[], name: string): Category | undefined {
//   for (const node of nodes) {
//     if (node.name === name) return node;
//     if (node.children) {
//       const result = findCategories(node.children, name);
//       if (result) return result;
//     }
//   }
//   return undefined;
// }
// // const result = findCategories(tree, "category 3");
// // console.log({ result });
// function findNodeAmount(nodes: Category[]): number {
//   let count = 0;
//   for (const node of nodes) {
//     count++;
//     if (node.children) {
//       count += findNodeAmount(node.children);
//     }
//   }
//   return count;
// }
// // const result = findNodeAmount(tree);
// // console.log({ result });
// function flattenTree(nodes: Category[]): string[] {
//   let tree: string[] = [];
//   for (const node of nodes) {
//     tree.push(node.name);
//     if (node.children) {
//       const result = flattenTree(node.children);
//       tree = [...tree, ...result];
//     }
//   }
//   return tree;
// }
// const result = flattenTree(tree);
// console.log({ result });
// console.log(kgergogrek);
