/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let num1 in nums){
        for(let num2 in nums){
            if(num1 != num2){
                if(nums[num1] + nums[num2] === target){
                    return [num1-0, num2-0]
                }
            }
        }
    }
};