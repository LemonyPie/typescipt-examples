import { IStack } from './stack.types';

export class Stack<T> implements IStack<T>{
  private stack: T[] = [];

  public get isEmpty(): boolean {
    return this.length === 0;
  }
  public get length(): number {
    return this.stack.length;
  }

  public peek( count?: number ): T | undefined {
    if (count === undefined) {
      return this.stack[this.length - 1];
    }

    return this.stack[this.length - count - 1];
  }

  public pop(): T | undefined {
    return this.stack.pop();
  }

  public push( item: T ): void {
    this.stack.push(item);
  }
}
