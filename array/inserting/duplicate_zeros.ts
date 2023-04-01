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

const duplicateZeros = function (nums: number[]) {
  let i: number = 0,
    sh: number = 0;
  for (i = 0; sh + i < nums.length; i++) {
    if (nums[i] === 0) {
      sh += 1;
    }
  }
  for (i = i - 1; sh > 0; --i) {
    if (i + sh < nums.length) nums[i + sh] = nums[i];
    if (nums[i] == 0) nums[i + --sh] = nums[i];
  }
};
