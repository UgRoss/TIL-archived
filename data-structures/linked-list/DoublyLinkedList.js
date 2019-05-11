class Node {
  /**
   * @param {number} value of the Node
   * @param {(Node | null)} next - reference to the next Node
   * @param {(Node | null)} previous - reference to the previous Node
   */
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Creates new node and inserts at the start of the list
   *
   * @param {number} value
   * @return {DoublyLinkedList}
   */
  prepend(value) {
    const newNode = new Node(value, this.head);

    // if there is head, then update it's previous reference as it won't be head anymore
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;

    // If there is no tail create it
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  append(value) {
    const newNode = new Node(value);

    // If there is no head create it
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Add new node to the tail
    this.tail.next = newNode;
    // Update new Node's previous reference
    newNode.previous = this.tail;
    // Set new node to be the tail of the list.
    this.tail = newNode;

    return this;
  }

  /**
   * Finds Node inside the linked list by its value
   *
   * @param {number} value to find
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
   * Removes Node from the list
   *
   * @param {number} value
   * @return {(Node | null)}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null; // Save deleted node to return it in the end

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          // 🔗 Node that we need to remove is in the head
          this.head = deletedNode.next;

          if (this.head) {
            this.head.previous = null; // update new head previous reference
          }

          if (deletedNode === this.tail) {
            // Our node is in the head and tail, so we can simply remove the tail
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          // 🔗 Node that we need to delete is in the tail
          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          // 🔗 Node that we need to delete is the middle Node
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      currentNode = currentNode.next;
    }

    return deletedNode;
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
