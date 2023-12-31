// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].



// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// Example 2:

// Input: nums = [1,2,3,4,
//                4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
// Example 3:

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

let shuffle = function (nums, n) {
    let y = [];
    let x = [];
    let z=[];
    for (let i = 0; i < nums.length / 2; i++) {
        // console.log(nums[i]);
        x[i] = nums[i];
    }
    for(let i=nums.length/2;i<nums.length;i++){
        // console.log(nums[i]);
        // console.log(y);
        // y[i] =nums[i]; // wierd 
        y.push(nums[i])
    }
    for(let i=0;i<x.length;i++){
        z.push(x[i],y[i])
    }
    return z;
}

// console.log(shuffle([1,2,3,4,4,3,2,1], 4));

function shuffle2(nums, n){
    let ans = [];
    for (let i = 0; i < n; i++){
        ans.push(nums[i]); // xi
        ans.push(nums[i + n]) // yi
    }
    return ans;
}

console.log(shuffle2([1,2,3,4,4,3,2,1], 4));
