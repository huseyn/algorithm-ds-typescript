/**
 *  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

    You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

function singleNumber(nums: number[]): number {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const curr = map.get(nums[i]) ? map.get(nums[i]) : 0;
    map.set(nums[i], curr + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === 1) return nums[i];
  }

  return 0;
}
