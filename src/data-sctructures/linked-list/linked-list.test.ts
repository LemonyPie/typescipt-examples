import { LinkedList } from './linked-list';

describe(LinkedList, () => {
  const setup = () => {
    return {
      linkedList: new LinkedList();
    }
  };

  it( 'should be empty by default', function () {
    const { linkedList } = setup();

    expect(linkedList.isEmpty).toBe(true);
  } );

  it( 'should push values', function () {
    const { linkedList } = setup();

    linkedList.push(1);
    expect(linkedList.isEmpty).toBe(false);
    expect(linkedList.length).toBe(1);
  } );


  it( 'should delete values', function () {
    const { linkedList } = setup();
    linkedList.push('one');
    linkedList.push('two');
    linkedList.push('three');
    expect(linkedList.length).toBe(3);

    linkedList.pop();
    expect(linkedList.length).toBe(2);
    expect(linkedList.tail.value).toBe('two');

    linkedList.push('three');
    expect(linkedList.delete(2).value).toBe('three');
    expect(linkedList.length).toBe(2);
  } );


  it( 'should get values', function () {
    const { linkedList } = setup();
    linkedList.push('one');
    linkedList.push('two');
    expect(linkedList.get(0).value).toBe('one');
    expect(linkedList.get(1).value).toBe('two');
  } );
})
