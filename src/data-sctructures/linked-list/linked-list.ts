export class Node <T> {
  public next: null | Node<T> = null;

  constructor(
    public value: T
  ) { }
}

export class LinkedList <T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  length: number = 0;

  push(value: T): Node<T> {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return node;
    }

    // @ts-ignore if head is null then the tail is null also
    this.tail?.next = node;
    this.tail = node;
    this.length++;
    return node;
  }

  pop() {
    if (this.isEmpty) {
      return null;
    }

    const node = this.tail;
    if (this.head === this.tail) {

      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }

    let current = this.head;
    // @ts-ignore
    let penultimate: Node<T> = this.head;
    while (current) {
      if (current.next === this.tail) {
        penultimate = current;
        break;
      }

      current = current.next;
    }

    // @ts-ignore
    penultimate.next = null;
    this.tail = penultimate;
    this.length--;
    return node;
  }

  get(index: number): Node<T> | null {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) { return this.head; }

    let current = this.head;
    for(let i = 0; i < index; i++) {
      // @ts-ignore
      const { next } = current;
      current = next;
    }

    return current;
  }

  delete(index: number): Node<T> | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if(index === 0) {
      const deleted = this.head;
      // @ts-ignore
      this.head = this.head.next;
      this.length--;
      return deleted;
    }

    let current = this.head.next;
    let previous = this.head;
    for(let i = 1; i < index; i++) {
      previous = current;
      current = current.next;
    }

    const deleted = current;
    previous.next = current.next;
    this.length--;
    return deleted;
  }

  print() {
    const values = [];
    let current = this.head;
    while(current) {
      values.push(current);
      current = current.next;
    }

    return values.join(' -> ');
  }

  get isEmpty() {
    return this.length === 0;
  }
}
