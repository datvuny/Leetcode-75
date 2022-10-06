// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const runningSum = function(nums) {
    let result = [];
  
  for(let i=0; i<nums.length; i++){      
      let j = i;
      let sum = 0;
      while(j >= 0){
          sum += nums[j];
          j--;
      }

      result.push(sum);
  }

  return result;
};
