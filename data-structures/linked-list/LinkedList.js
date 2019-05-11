class Node {
  /**
   * @param {number} value of the Node
   * @param {(Node | null)} next - reference to the next Node
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Creates new node and inserts at the start of the list
   *
   * @param {number} value
   * @return {LinkedList}
   */
  prepend(value) {
    // Create new node with the next reference as the head
    const newNode = new Node(value, this.head);

    // Update our head to contain new element
    this.head = newNode;

    // If there is no tail update it too
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * Creates new node and inserts in the end of the list
   *
   * @param {number} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  /**
   * Finds element inside the linked list
   *
   * @param {number} value
   * @return {(Node | null)}
   */
  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Removes Node from the list by its value
   *
   * @param {number} value to remove
   * @return {Node | null} remove node or null
   */
  delete(value) {
    if (this.head === null) {
      return null;
    }

    if (this.head.value === value) {
      const deletedNote = this.head;
      // Now make next node to be a new head
      this.head = this.head.next;

      return deletedNote;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        const deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        return deletedNode;
      }

      currentNode = currentNode.next;
    }
  }

  /**
   * Converts linked list to array
   *
   * @return {Node[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * Converts linked link to string representation
   *
   * @return {string}
   */
  toString() {
    return this.toArray()
      .map(node => node.value)
      .toString();
  }
}
