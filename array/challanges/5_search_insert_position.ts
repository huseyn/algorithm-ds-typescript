/**
 *  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.
 */

/**
 *  Input: nums = [1,3,5,6], target = 5
    Output: 2
 */

/**
 *  Input: nums = [1,3,5,6], target = 2
    Output: 1
 */

/**
 *  Input: nums = [1,3,5,6], target = 7
    Output: 4
 */

function searchInsert(nums: number[], target: number): number {
  if (nums.length === 0) return nums.length;

  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.trunc((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return start;
}
