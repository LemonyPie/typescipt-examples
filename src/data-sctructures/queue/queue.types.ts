export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(count?: number): T | undefined;
  readonly length: number;
  readonly isEmpty: boolean;
}
