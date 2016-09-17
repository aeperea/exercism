const Node = (data, left = null, right = null) => {
  return {data, left, right};
};

const BinarySearchTree = root => {
  let data = new Node(root);

  const insert = n => {
    let node = data;
    while (true) {
      if (n <= node.data) {
        if (!node.left) {
          node.left = new Node(n);
          break;
        } else {
          node = node.left;
        }
      } else {
        if (!node.right) {
          node.right = new Node(n);
          break;
        } else {
          node = node.right;
        }
      }
    }
  }

  // in-order tree traversal recursive
  const each = (cb, node = data) => {
    if (node.left) {each(cb, node.left);}
    cb(node.data);
    if (node.right) {each(cb, node.right);}
  }

  data.insert = insert;
  data.each   = each;

  return data;
}

export default BinarySearchTree;
