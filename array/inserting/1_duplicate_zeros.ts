/**
 *  Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

    Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
 */

/**
 *  Input: arr = [1,0,2,3,0,4,5,0]
    Output: [1,0,0,2,3,0,0,4]
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
 */

/**
 *  Input: arr = [1,2,3]
    Output: [1,2,3]
    Explanation: After calling your function, the input array is modified to: [1,2,3]
 */

// this work if possible to write i indexed element to j iondexed element. j index should not be out of array length
const duplicateZeros = function (nums: number[]) {
  let zeroes: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroes++;
  }
  let i = nums.length - 1,
    j = nums.length - 1 + zeroes;
  while (i !== j) {
    if (j < nums.length) nums[j] = nums[i];
    j--;

    if (nums[i] === 0) {
      if (j < nums.length) nums[j] = nums[i];
      j--;
    }
    i--;
  }
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
