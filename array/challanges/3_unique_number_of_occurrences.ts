/**
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 */

/**
 *  Input: arr = [1,2,2,1,1,3]
    Output: true
    Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 */

/**
 *  Input: arr = [1,2]
    Output: false
 */

/**
 *  Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 *  Output: true
 */

function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    let curr = map.get(arr[i]) ? map.get(arr[i]) : 0;
    map.set(arr[i], curr + 1);
  }

  const set = new Set<number>(Array.from(map.values()));

  return map.size === set.size;
}
