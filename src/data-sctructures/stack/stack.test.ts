import { Stack } from './stack';

describe(Stack, () => {
  const setup = () => {
    return {
      stack: new Stack()
    }
  };

  it( 'should be empty initially', function () {
    const { stack } = setup();
    expect(stack.isEmpty).toBe(true);
  } );

  it( 'should give isEmpty of stack', function () {
    const { stack } = setup();
    expect(stack.isEmpty).toBe(true);
    stack.push('item');
    expect(stack.isEmpty).toBe(false);
  } );

  it( 'should follow the rule: first in last out', function () {
    const { stack } = setup();
    stack.push('first');
    stack.push('item');
    stack.push('last');
    expect(stack.peek()).toBe('last');
    expect(stack.peek(2)).toBe('first');
    expect(stack.pop()).toBe('last');
    stack.pop();
    expect(stack.pop()).toBe('first');
  } );
});
