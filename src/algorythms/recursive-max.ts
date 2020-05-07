const max = (list: number[]): number | null => {
  if( list.length === 0 ) {
    return null;
  } else if( list.length === 1) {
    return list[0];
  } else if (list.length === 2) {
    return list[0] > list[1] ? list[0] : list[1];
  }

  const sub_max = max(list.slice(1, list.length));

  return sub_max === null || list[0] > sub_max ? list[0] : sub_max;
}

max([]); //?
max([1]); //?
max([100, 2]); //?
max([2, 100]); //?
max([100, 100]); //?
max([-1,1]); //?
max([1,-1]); //?
max([0,-1]); //?
max([-1,0]); //?
max([50,2,10,505, 123, 22,1024, 99, 101, 101]) //?
