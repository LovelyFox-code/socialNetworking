'use strict';
var removeDuplicates = function(nums) {
    for(let i = 0; i<nums.length; i++){
        if(i !== nums.length-1  && nums[i] === nums[i + 1]){
            nums.splice(i, 1)
            console.log(nums);
        }
    }
    return nums
};
 console.log(removeDuplicates([1,1,1,2]));