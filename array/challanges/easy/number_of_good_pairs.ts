/**
 * Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
 */

function numIdenticalPairs(nums: number[]): number {
    let result = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const value = map.get(nums[i]);
            map.set(nums[i], value + 1);
        } else map.set(nums[i], 1);
    }

    map.forEach((val, key, map)=> {
        result+= val * (val - 1)/2
    })

    return result;
};

function numIdenticalPairs2(nums: number[]): number {
   let goodPair = 0 
   let map = {}
   for(let num of nums) {
     if(map[num]) {
       goodPair += map[num]
       map[num]++
     } else {
       map[num] = 1
     }
   }
  return goodPair
};