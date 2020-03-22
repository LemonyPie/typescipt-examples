export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(count?: number): T | undefined;
  readonly length: number;
  readonly isEmpty: boolean;
}
