var items={tomatto:100,garlic:30,ginger:20}

var nestedArray=Object.entries(items)

var costly=nestedArray.reduce((p1,p2)=>p1[1]>p2[1]?p1:p2)

var lowest=nestedArray.reduce((p1,p2)=>p1[1]<p2[1]?p1:p2)

console.log(costly);

console.log(lowest);