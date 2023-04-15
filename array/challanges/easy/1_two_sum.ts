/**
 *  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
 */

/**
 *  Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

/**
 *  Input: nums = [3,2,4], target = 6
    Output: [1,2]
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const x = target - curr;
    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(curr, i);
  }
}
