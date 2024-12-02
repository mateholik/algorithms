import { tree2, type Category2 } from "./consts";

function printChildren(node: Category2) {
  if (!node.children || node.children.length <= 0) {
    return;
  }
  for (let i = 0; i < node.children.length; i++) {
    const currentChild = node.children[i];
    console.log(currentChild.name);
    printChildren(currentChild);
  }
}

printChildren(tree2);
