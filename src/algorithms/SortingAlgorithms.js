// const _merge = (left, right) => {
//   let arr = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       arr.push(left.shift());
//     } else {
//       arr.push(right.shift());
//     }
//   }
//   return [...arr, ...left, ...right];
// };

// const _mergeSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const mid = arr.length / 2;
//   const left = arr.splice(0, mid);
//   const sortedArr = _merge(_mergeSort(left), _mergeSort(arr));
//   return sortedArr;
// };

// const mergeSort = (array, setArray) => {
//   const arr = [...array];
//   const sortedArr = _mergeSort(arr, 0, arr.length - 1);
//   setArray([...sortedArr]);
// };

const _merge = (arr, si, mid, ei, tempArr, animations) => {
  let i = si;
  let j = mid + 1;
  let k = si;
  while (i <= mid && j <= ei) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (tempArr[i] <= tempArr[j]) {
      animations.push([k, tempArr[i]]);
      arr[k++] = tempArr[i++];
    } else {
      animations.push([k, tempArr[j]]);
      arr[k++] = tempArr[j++];
    }
  }
  while (i <= mid) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, tempArr[i]]);
    arr[k++] = tempArr[i++];
  }
  while (j <= ei) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, tempArr[j]]);
    arr[k++] = tempArr[j++];
  }
};

const _mergeSort = (arr, si, ei, tempArr, animations) => {
  if (si === ei) return;
  const mid = Math.floor((si + ei) / 2);
  _mergeSort(tempArr, si, mid, arr, animations);
  _mergeSort(tempArr, mid + 1, ei, arr, animations);
  _merge(arr, si, mid, ei, tempArr, animations);
};

const mergeSort = (arr) => {
  const animations = [];
  if (arr.length <= 1) return arr;
  const tempArr = [...arr];
  _mergeSort(arr, 0, arr.length - 1, tempArr, animations);
  return animations;
};

const quickSort = () => {};

const heapSort = () => {};

const bubbleSort = () => {};

export { mergeSort, quickSort, heapSort, bubbleSort };
