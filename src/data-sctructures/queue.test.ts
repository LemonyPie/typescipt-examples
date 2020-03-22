import { Queue } from './queue';
import set = Reflect.set;

describe(Queue, () => {
  const setup = () => {
    const queue = new Queue();
    return {
      queue
    };
  };
  describe('isEmpty', () => {
    it( 'should return true if empty otherwise false', function () {
      const { queue } = setup();
      expect( queue.isEmpty ).toBe( true );
      queue.enqueue( 'item' );
      expect( queue.isEmpty ).toBe( false );
    });
  });
  describe('peek', () => {
    it( 'should return last item by default', function () {
      const { queue } = setup();
      const expectedItem = 'FOFI';
      queue.enqueue(expectedItem);
      queue.enqueue('one');
      queue.enqueue('two');
      queue.enqueue('three');
      expect(queue.peek()).toBe(expectedItem);
    });
    it( 'should be able to peek with offset from the end', function () {
      const { queue } = setup();
      queue.enqueue('one');
      queue.enqueue('two');
      queue.enqueue('three');
      expect(queue.peek(0)).toBe('one');
      expect(queue.peek(1)).toBe('two');
      expect(queue.peek(2)).toBe('three');
    });
    it( 'should return undefined if no item to peek', function () {
      const { queue } = setup();
      queue.enqueue('one');
      expect(queue.peek(1)).toBe(undefined);
    } );
  });
  describe('adding and removing items', () => {
    it( 'should add new item to queue', function () {
      const { queue } = setup();
      expect(queue.isEmpty).toBe(true);
      queue.enqueue('item');
      expect(queue.isEmpty).toBe(false);
      expect(queue.length).toBe(1);
    });
    it('should be able to deque last item', () => {
      const { queue } = setup();
      expect(queue.isEmpty).toBe(true);
      queue.enqueue('item');
      queue.dequeue('item');
      expect(queue.isEmpty).toBe(true);
      expect(queue.length).toBe(0);
    });
    it( 'should be able to deque specified item', function () {
      const { queue } = setup();
      expect(queue.isEmpty).toBe(true);
      queue.enqueue('item');
      queue.enqueue('dequeue');
      queue.enqueue('item');
      expect(queue.length).toBe(3);
      expect(queue.peek(1)).toBe('dequeue');
      queue.dequeue('dequeue');
      expect(queue.length).toBe(2);
      expect(queue.peek(1)).toBe('item')
    } );
  })
});

