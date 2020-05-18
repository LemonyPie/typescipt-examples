function bubble(array: number[]){
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = 0; j < array.length - i - 1; j++) {
      if(array[j] > array[j+1]){
        array[j] += array[j+1];
        array[j+1] = array[j] - array[j+1];
        array[j] -= array[j+1];
      }
    }
  }
}

function bubble2(array: number[]){
  let swapped;
  let j = 1;
  do {
    swapped = false;
    for(let i = 0; i < array.length - j; i++) {
      if(array[i] > array[i+1]){
        swapped = true;
        array[i] += array[i+1];
        array[i+1] = array[i] - array[i+1];
        array[i] -= array[i+1];
      }
    }
    j++;
  } while(swapped);
}

let a = [3,2,4,1];
let b = [120,1,2,3,100,110,150,160,20,10,30];

// bubble(a);
// a //?
// bubble(b);
// b //?

let c = [1,2,3,4,5];
// bubble2(c); c //?
bubble2(a); a //?
bubble2(c); c //?


