const isSorted = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] < arr[i]) {
      return false;
    }
  }
  return true;
}

const BinarySearch = arr => {
  if (!isSorted(arr)) { return; }

  const indexOf = n => {
    let size   = arr.length;
    let min    = 0;
    let max    = size - 1;
    let middle = Math.floor((max + min)/2);
    let last   = null;
    let last2  = null;

    while (true) {
      if (arr[middle] === n) {return middle;}

      if (arr[middle] < n) {
        max    = size - 1;
        min    = middle;
        middle = Math.floor((max + min) / 2);
      } else {
        max    = middle;
        min    = 0;
        middle = Math.floor((max + min) / 2);
      }
      if (last2 === middle) { return -1; }
      last2 = last;
      last  = middle;
    }
  }

  return {
    array : arr,
    indexOf
  }
}

export default BinarySearch;
