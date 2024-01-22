/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */

function removeElement2(nums: number[], val: number): number {
    //[3,2,2,3]
    let writer = 0;
    let reader = 0;
    while(reader < nums.length) {
        if(nums[reader] === val) reader++;
        else {
            nums[writer++] = nums[reader++];
        }
    }
    
    return writer;
};