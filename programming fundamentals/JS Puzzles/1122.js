// //Given a non-empty array of integers nums, every element appears twice except for one.
// //Find that single one. 

// // //Example 1:
// // Input: nums=[2,2,1]
// // Output: 1

// // Example 2: 
// // Input nums = [4,1,2,1,2]
// // Output: 4



// const array = [1,2,1,5,3,4,5]

// function findDuplicate(array){
//     const singleElements = new Set(array);
//     console.log(singleElements)//test:  output: Set(5) { 1, 2, 5, 3, 4 }
//     const filteredElements = array.filter(item=> {
//         if (singleElements.has(item)){
//             singleElements.delete(item)
//         } else {
//             return item
//         } 
// // return[...new Set(singleElements)] 
//     })}
        
//         // const duplicateElements = findDuplicate(array)

//         // console.log(duplicateElements);
        
// console.log(findDuplicate(array))

var singleNumber = function(nums) {
    const nMap = new Map();
    for(let i in nums){
        const n = nums[i];
        if(nMap.has(n)){
            nMap.delete(n);
        }else{
            nMap.set(n,n);
        }
    }
    const [singleNumber] = nMap.keys();
    return singleNumber;
};

const returnedValue = singleNumber([4,4,1,2,9,1,2])