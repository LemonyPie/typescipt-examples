const sum = (numbers: number[]): number => numbers.length > 0
  ? numbers[0] + sum(numbers.slice(1, numbers.length))
  : 0;

const arr = [1,2,3,4,5];

sum([]); //?
sum([1,2,3,4,5,6]); //?
sum(arr); //?
arr //?

const count = <T>(array: T[]): number => array.length > 0
  ? 1 + count(array.slice(1, array.length))
  : 0;

count([]); //?
count([1]) //?
count([1,2,3]) //?

