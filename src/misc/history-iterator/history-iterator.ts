export interface Action {
  type: string;
}

export interface ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;
}

export class History implements IterableIterator<Action> {
  constructor(
    private currentAction: ListNode<Action> | null
  ) { }

  public [Symbol.iterator](): IterableIterator<Action> {
    return this;
  }

  public next(): IteratorYieldResult<Action> | IteratorReturnResult<null> {
    if(!this.currentAction) {
      return {
        done: true,
        value: null
      }
    }

    const current = this.currentAction;
    this.currentAction = this.currentAction.prev;

    return {
      value: current.value,
      done: false
    };
  }
}
