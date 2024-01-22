/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

 */

var moveZeroes = function(nums) {
    let writer = 0, reader = 0;
    
    while(reader < nums.length) {
        if(nums[reader] !== 0) {
            nums[writer++] = nums[reader];
        }
        
        reader++;
    }
    
    while(writer < nums.length) {
        nums[writer++] = 0;
    }
};