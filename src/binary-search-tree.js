const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
	constructor(data) {
		this.data = data;
		this.leftNode = null;
		this.rightNode = null;
	}
}
class BinarySearchTree {

	constructor() {
		this.rootNode = null;
	}
	root() {
		return this.rootNode;
	}

	add(data) {

		this.rootNode = addNode(this.rootNode, data);

		function addNode(node, value) {

			if (!node) {
				return new Node(value);
			}

			if (value === node.data) {
				return node;
			}

			if (value > node.data) {
				node.rightNode = addNode(node.rightNode, value);

			} else if (value < node.data) {
				node.leftNode = addNode(node.leftNode, value);
			}

			return node;
		}
	}

	has(data) {

		return searchNode(this.rootNode, data);

		function searchNode(node, value) {

			if (!node) {
				return false;
			}

			if (value === node.data) {
				return true;
			}

			if (value > node.data) {
				return searchNode(node.rightNode, value)

			} else if (value < node.data) {
				return searchNode(node.leftNode, value)
			}
		}
	}

	find(data) {

		return findNode(this.rootNode, data);

		function findNode(node, value) {

			if (!node) {
				return null;
			}

			if (value === node.data) {
				return node;
			}

			if (value > node.data) {
				return findNode(node.rightNode, value)

			} else if (value < node.data) {
				return findNode(node.leftNode, value)
			}
		}
	}

	remove(data) {

		this.rootNode = removeNode(this.rootNode, data);

		function removeNode(node, value) {

			if (!node) {
				return null;
			}

			if (value > node.data) {

				node.rightNode = removeNode(node.rightNode, value);
				return node;

			} else if (value < node.data) {

				node.leftNode = removeNode(node.leftNode, value);
				return node;

			} else if (value === node.data) {

				if (!node.leftNode && !node.rightNode) { // if item is a leaf
					return null; // remove this item by putting null instead it
				}

				if (!node.rightNode) { // if only left children exist
					node = node.leftNode; // set left children instead item
					return node;
				}

				if (!node.leftNode) {  // if only right children exist
					node = node.rightNode; // set right children instead item
					return node;
				}

				// if both children exist
				// can choose maxFromLeft or minFromRight
				let maxFromLeft = node.leftNode;

				while (maxFromLeft.rightNode) { // while right node exist
					maxFromLeft = maxFromLeft.rightNode; // move pointer
				}

				node.data = maxFromLeft.data; // when value is found put it into node
				node.leftNode = removeNode(node.leftNode, maxFromLeft.data); // remove maxFromLeft from left children

				return node;
			}
		}
	}

	min() {

		if (!this.rootNode) {
			return;
		}

		let node = this.rootNode;

		while (node.leftNode) { // while smaller value exist
			node = node.leftNode; // move pointer
		}

		return node.data;
	}

	max() {

		if (!this.rootNode) {
			return;
		}

		let node = this.rootNode;

		while (node.rightNode) {
			node = node.rightNode;
		}

		return node.data;
	}
}

module.exports = {
	BinarySearchTree
};