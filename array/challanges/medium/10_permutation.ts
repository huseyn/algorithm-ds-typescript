function permute(nums: number[]): number[][] {
  // inner array counts === array.length * (array.length -1)
  // each element position totally === array.length - 1

  const resultArr = [];
  const totalArrarCounts = nums.length * (nums.length - 1);
  for (let i = 0; i < totalArrarCounts; i++) {
    const innerArr = [];
    innerArr[i] = nums[i];
    resultArr.push(innerArr);
  }
  // resultArr[0][0] = 1
  // resultArr[1][0] = 1
  // resultArr[0][1] = 2
  // resultArr[1][1] = 2
  // resultArr[0][2] = 3
  // resultArr[1][2] = 3

  return resultArr;
}
console.log(permute([1, 2, 3, 4]));
