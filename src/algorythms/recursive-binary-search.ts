const search = (list: number[] | string [], item: number | string): number | string | null => {
  const low = 0;
  const high = list.length - 1;
  const mid = Math.floor((low + high) / 2);
  const guess = list[mid];

  if (low > high) {
    return null;
  }

  if( guess === item) {
    return mid;
  } else if (guess > item) {
    return search( list.slice( 0, mid - 1 ), item )
  } else {
    return search( list.slice( mid + 1, list.length ), item );
  }

};

// search([1], 1); //?
// search([1], 10); //?
// search([1,10,12], 10); //?
search([1,2,3,4,5,6,10,12], 10); //?
