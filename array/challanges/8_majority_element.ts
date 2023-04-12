/**
 *  Given an array nums of size n, return the majority element.
    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

/**
 *  Input: nums = [3,2,3]
    Output: 3
 */

/**
 *  Input: nums = [2,2,1,1,1,2,2]
 *  Output: 2
 */

function majorityElement(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    const curr = map.get(nums[i]) ? map.get(nums[i]) : 0;
    map.set(nums[i], curr + 1);
  }

  const result: number[] = [];
  const iterator = map[Symbol.iterator]();
  for (const item of iterator) {
    if (item[1] > n / 2) return item[0];
  }
}
