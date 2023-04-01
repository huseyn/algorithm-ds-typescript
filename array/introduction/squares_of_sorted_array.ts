//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/**
 *  Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].
 */

/**
 *  Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
 */

const sortedSquares = function (nums: number[]): number[] {
  const n: number = nums.length;
  let left: number = 0;
  let right: number = n - 1;
  const result: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    let square = 0;
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      square = nums[right];
      right--;
    } else {
      square = nums[left];
      left++;
    }
    result[i] = square * square;
  }
  return result;
};
