const binary_search = <T extends (number | string)>( list: T[], item: T): number | null => {
  const search = (list: T[], item: T, bias: number ): number | null => {
    const low = 0;
    const high = list.length - 1;
    const mid = Math.floor( ( low + high ) / 2 );
    const guess = list[mid];

    if ( low > high ) {
      return null;
    }

    if ( guess === item ) {
      return bias + mid;
    } else if ( guess > item ) {
      return search( list.slice( 0, mid - 1 ), item, bias)
    } else {
      return search( list.slice( mid + 1, list.length ), item, bias + mid + 1);
    }
  }

  return search(list, item, 0);
};

// binary_search([1], 1); //?
// binary_search([1], 10); //?
// binary_search([1,10,12], 10); //?
// binary_search([1,2,3,4,5,6,10,12], 10); //?
binary_search([1,2,3,4,5,6,10,12], 2); //?
