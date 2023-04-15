/**
 *  Given an array of integers arr, return true if and only if it is a valid mountain array.
 */

/**
 *  Input: arr = [2,1]
    Output: false
 */

/**
 *  Input: arr = [3,5,5]
    Output: false
 */

/**
 *  Input: arr = [0,3,2,1]
    Output: true
 */

function validMountainArray(nums: number[]) {
  const n = nums.length;
  let i = 0;

  while (nums[i] < nums[i + 1]) i++;

  if (i === 0 || n - 1 === i) return false;

  while (nums[i] > nums[i + 1]) i++;

  return i == n - 1;
}
