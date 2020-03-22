import { IQueue } from './queue.types';

export class Queue<T> implements IQueue<T> {
  private queue: T[] = [];

  enqueue(item: T): void {
    this.queue.unshift(item);
  }

  dequeue(): T | undefined {
    return this.queue.pop();
  }

  abort( item?: T): T[] {
    if (item === undefined) {
      this.queue.pop();
      return this.queue;
    }

    const itemIndex = this.queue.indexOf(item);
    return this.queue.splice(itemIndex, 1);
  }

  peek(count?: number): T | undefined {
    if (count === undefined) {
      return this.queue[this.length - 1];
    }

    return this.queue[this.length - count - 1]
  }

  get length(): number {
    return this.queue.length;
  }

  get isEmpty() {
    return this.queue.length === 0;
  }
}
