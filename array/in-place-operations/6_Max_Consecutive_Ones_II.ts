/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

Input: nums = [1,0,1,1,0,1]
Output: 4
Explanation: 
- If we flip the first zero, nums becomes [1,1,1,1,0,1] and we have 4 consecutive ones.
- If we flip the second zero, nums becomes [1,0,1,1,1,1] and we have 4 consecutive ones.
The max number of consecutive ones is 4

 */

function findMaxConsecutiveOnes2(nums: number[]): number {
    //[1,0,1,1,0,1]
    let max = 0;
    let curr = 0, prev = 0, seenZero = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            seenZero = 1;
            prev = curr;
            curr = 0;
        } else {
            curr++;
        }
        
        max = Math.max(max, curr + prev + seenZero);
    }
    return max;
}

findMaxConsecutiveOnes2([1,0,1,1,0,1]);