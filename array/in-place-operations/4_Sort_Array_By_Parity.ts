/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

 */

const sortArrayByParity = (nums: number[]): number[] => {
    let writer = 0;
    for (let reader = 0; reader < nums.length; reader++) {
        if (nums[reader] % 2 === 0) {
            const current = nums[writer];
            nums[writer] = nums[reader];
            nums[reader] = current;
            writer++;
        }
    }
    return nums;
};