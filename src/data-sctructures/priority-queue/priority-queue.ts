import { Queue } from '../queue/queue';
import { IQueue } from '../queue/queue.types';

export class PriorityQueue<T> implements IQueue<T> {
  private lowPriorityQueue = new Queue<T>();
  private highPriorityQueue = new Queue<T>();
  public get isEmpty(): boolean {
    return (
      this.lowPriorityQueue.isEmpty &&
      this.highPriorityQueue.isEmpty
    );
  };
  public get length(): number {
    return this.lowPriorityQueue.length + this.highPriorityQueue.length;
  }

  public dequeue(): T | undefined {
    if(!this.highPriorityQueue.isEmpty) {
      return this.highPriorityQueue.dequeue();
    }

    return this.lowPriorityQueue.dequeue();
  }

  public enqueue( item: T, isHighPriority = false ): void {
    isHighPriority
      ? this.highPriorityQueue.enqueue(item)
      : this.lowPriorityQueue.enqueue(item);
  }

  public peek( count?: number ): T | undefined {
    if(!this.highPriorityQueue.isEmpty) {
      return this.highPriorityQueue.peek(count);
    }

    return this.lowPriorityQueue.peek(count);
  }
}
