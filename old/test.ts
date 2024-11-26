// type Category = {
//   name: string;
//   children?: Category[];
// };

// const tree: Category[] = [
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

// function findCats(
//   tree: Category[],
//   parentName: string
// ): Category[] | undefined {
//   for (const category of tree) {
//     if (category.name === parentName) {
//       return category.children;
//     }
//     if (category.children) {
//       const result = findCats(category.children, parentName);
//       if (result) return result;
//     }
//   }
//   return undefined;
// }

// const result = findCats(tree, "category 3.1");
// console.log(result);
