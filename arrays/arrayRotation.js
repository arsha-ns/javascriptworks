var arr=[10,20,30,40]

var k=2


for (let i=1;i<=k;i++){
     let popped_element=arr.pop()

    arr.unshift(popped_element)
}
console.log(arr);

