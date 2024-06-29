var arr=[5,4,1000,400,2,6,8]

// arr.sort()
// console.log(arr);


arr.sort((o1,o2)=>o1-o2)

console.log(arr)



arr.sort((o1,o2)=>o1<o2?-1:1)

console.log(arr);