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

const _partition = (arr, start, end, animations) => {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  animations.push({
    pivot: end,
    elements: [],
  });
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      animations[animations.length - 1].elements.push([i, pivotIndex]);
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
};

const _quickSort = (arr, start, end, animations) => {
  // Base case or terminating case
  if (start >= end) {
    return;
  }

  // Returns pivotIndex
  let index = _partition(arr, start, end, animations);

  // Recursively apply the same logic to the left and right subarrays
  _quickSort(arr, start, index - 1, animations);
  _quickSort(arr, index + 1, end, animations);
};

const quickSort = (arr) => {
  const animations = [];
  if (arr.length <= 1) return arr;
  _quickSort(arr, 0, arr.length - 1, animations);
  return animations;
};

const heapSort = () => {};

const bubbleSort = () => {};

export { mergeSort, quickSort, heapSort, bubbleSort };
