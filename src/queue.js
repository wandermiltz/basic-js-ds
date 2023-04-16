const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

	constructor() {
		this.head = null;
		this.tail = null;
	}

	getUnderlyingList() {
		let head = this.head;
		return head;
	}

	enqueue(value) {

		let node = new ListNode(value);

		if (this.head === null) { // if queue is empty, set both ends by node
			this.head = node;
			this.tail = node;

		} else { // add node to the end of queue
			this.tail.next = node;
			this.tail = node;
		}
	}

	dequeue() {

		const topEl = this.head.value;

		if (this.head !== null) {
			this.head = this.head.next;
		} else { // if queue is empty
			return null;
		}

		return topEl;
	}
}

module.exports = {
	Queue
};
