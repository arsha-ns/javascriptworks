var colors=["red","blue","green","yellow"]

var colorscopy=[...colors]

colorscopy.pop()

console.log(colors);

console.log(colorscopy);



var user={name:"ammu",email:"ammu@gmail.com",isactive:"true"}


var copyuser={...user}

copyuser.isactive="false"

console.log(copyuser);


console.log(user);


var product={id:1,name:"djfkh",isavailable:"false"}

console.table(product)

var productcopy={...product,isavailable:true}

console.log(productcopy);