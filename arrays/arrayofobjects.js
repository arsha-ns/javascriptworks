var products=[

    {id:1,title:"samasungs23ultra",price:130000,brand:"samsung"},
    {id:2,title:"m32",price:35000,brand:"samsung"},
    {id:3,title:"opporeno",price:27000,brand:"oppo"},
    {id:4,title:"mi21note",price:23000,brand:"mi"},
    {id:5,title:"moto edge 40",price:230000,brand:"moto"},
    {id:6,title:"moto ede40 neo",price:250000,brand:"moto"},
    {id:7,title:"iphone13",price:140000,brand:"apple"},
    {id:8,title:"iphone13pro",price:150000,brand:"apple"},
  
]



// console.log(products.length);


var productname=products.map(p=>p.title)

// console.log(productname);


var mobilepricesfilter=products.filter(p=>p.price<35000).map(p=>p.title)

// console.log(prices);


var  samsungfilter=products.filter(p=>p.brand=="samsung"  && p.price<50000).map(p=>p.title)

// console.log(samsungfilter);


var costlyproduct=products.reduce((p1,p2)=>p1.price>p2.price?p1.title:p2.title)

// console.log(costlyproduct);

var costlyproduct=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2)


// console.log(costlyproduct.title);


// products.sort((p1,p2)=>p2.price-p1.price)

// console.log(products);

// var range=products.filter(p=>p.price>=25000 && p.price<=35000).map(p=>p.title)

// console.log(range);


products.sort((p1,p2)=>p2.price-p1.price)

console.log(products);