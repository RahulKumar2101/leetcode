// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]

// let getConcatenation = function(nums) {
//   let ans =[...nums , ...nums];
//   return ans;
//   // console.log(ans);
// };   
// getConcatenation([1,2,1]);

let getConcatenation= function(nums){
  let ans=[];
  for(let i= 0; i<nums.length;i++){
    ans.push(nums[i]);
  }
  for(let i= 0; i<nums.length;i++){
    ans.push(nums[i]);
  }
  return ans;
}
  console.log(getConcatenation([1,2,3]));

 

