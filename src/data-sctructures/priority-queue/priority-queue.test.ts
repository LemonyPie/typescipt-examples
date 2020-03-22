import { PriorityQueue } from './priority-queue';

describe(PriorityQueue, () => {
  const setup = () => {
    return {
      queue: new PriorityQueue()
    };
  };

  describe('low priority queue', () => {
    it( 'should use low priority by default', function () {
      const { queue } = setup();
      queue.enqueue('task');
      queue.enqueue('another task');
      expect(queue.peek()).toBe('task');
      queue.dequeue();
      expect(queue.peek()).toBe('another task');
    } );
  });

  describe('high priority queue', () => {
    it( 'should ', function () {
      const { queue } = setup();
      queue.enqueue('task');
      queue.enqueue('another task');
      queue.enqueue('immediate task', true);
      expect(queue.peek()).toBe('immediate task');
      expect(queue.dequeue()).toBe('immediate task');
      expect(queue.peek()).toBe('task');
    } );
  })
});
