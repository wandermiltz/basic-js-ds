const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

	let head = l; // l is the head node of the list
	let curr = head; // set current pointer to head
	let prev = null;

	while (curr !== null) { // iterate until current-pointer gets the end of the list

		if (curr.value === k) { // if k is found, we will remove that current-node

			if (prev === null) { // if that node is the first node
				head = curr.next; // we remove that current-node by updating the head-node

			} else if (prev !== null) {  // else if that node is not the first node
				prev.next = curr.next; // we remove that current-node by updating next-pointer of previous-node
			}

		} else {
			prev = curr; // if k is not found, make previous to point to current to keep that node
		}

		curr = curr.next; // move current-pointer to the next-node to iterate
	}

	l = head
	return l;
}

module.exports = {
	removeKFromList
};
