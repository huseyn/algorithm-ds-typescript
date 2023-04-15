/**
 *  Given an array arr of integers, check if there exist two indices i and j such that :

    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]
 */

/**
 *  Input: arr = [10,2,5,3]
    Output: true
    Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
 */

/**
 *  Input: arr = [3,1,7,11]
    Output: false
    Explanation: There is no i and j that satisfy the conditions.
 */

function checkIfExist(nums: number[]) {
  const set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    else {
      if (nums[i] % 2 === 0) {
        if (nums[i] === 0) set.add(nums[i]);
        else {
          set.add(nums[i] * 2);
          set.add(nums[i] / 2);
        }
      } else {
        set.add(nums[i] * 2);
      }
    }
  }

  return false;
}
