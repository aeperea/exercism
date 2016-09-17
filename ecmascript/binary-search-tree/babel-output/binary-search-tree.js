"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Node = function Node(data) {
  var left = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var right = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  return { data: data, left: left, right: right };
};

var BinarySearchTree = function BinarySearchTree(root) {
  var data = new Node(root);

  var insert = function insert(n) {
    var node = data;
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
  };

  // in-order tree traversal recursive
  var each = function each(cb) {
    var node = arguments.length <= 1 || arguments[1] === undefined ? data : arguments[1];

    if (node.left) {
      each(cb, node.left);
    }
    cb(node.data);
    if (node.right) {
      each(cb, node.right);
    }
  };

  data.insert = insert;
  data.each = each;

  return data;
};

exports["default"] = BinarySearchTree;
module.exports = exports["default"];