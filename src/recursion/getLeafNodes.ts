import { Category, tree } from "./consts";

// export const getLeafNodes = (tree: Category[]): Category[] => {
//   let result: Category[] = [];

//   const traverse = (node: Category) => {
//     if (!node.children) {
//       result.push(node);
//     } else {
//       for (let i = 0; i < node.children.length; i++) {
//         traverse(node.children[i]);
//       }
//     }
//   };

//   for (let i = 0; i < tree.length; i++) {
//     traverse(tree[i]);
//   }

//   return result;
// };

const getLeafNodes = (tree: Category[]): Category[] => {
  let result: Category[] = [];
  for (let i = 0; i < tree.length; i++) {
    if (!tree[i].children) {
      result.push({ ...tree[i] });
    } else {
      const children = getLeafNodes(tree[i].children as Category[]);
      result = [...result, ...children];
    }
  }

  return result;
};

console.log(getLeafNodes(tree));
