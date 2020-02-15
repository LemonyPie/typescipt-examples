import { Action, History, ListNode } from './history-iterator';

describe(History, () => {
  it('Should iterate back between actions', () => {
    const action1: Action = { type: 'LOGIN' };
    const action2: Action = { type: 'LOAD_POSTS' };
    const action3: Action = { type: 'DISPLAY_POSTS' };
    const action4: Action = { type: 'SELECT_FIRST_POST' };

    const actionNode1: ListNode<Action> = {
      value: action1,
      prev: null,
      next: null
    };

    const actionNode2: ListNode<Action> = {
      value: action2,
      prev: actionNode1,
      next: null
    };
    actionNode1.next = actionNode2;

    const actionNode3: ListNode<Action> = {
      value: action3,
      prev: actionNode2,
      next: null
    };
    actionNode2.next = actionNode3;

    const actionNode4: ListNode<Action> = {
      value: action4,
      prev: actionNode3,
      next: null
    };
    actionNode3.next = actionNode4;

    const backwardsActionList = new History(actionNode4);
    expect(backwardsActionList).toBeTruthy();

    const actionTypes: string[] = [];
    for(let action of backwardsActionList) {
      actionTypes.push(action.type);
    }
    const actionTypesExpected = [action4.type, action3.type, action2.type, action1.type];
    expect(actionTypes).toEqual(actionTypesExpected);
  });
});
