var loanAmount=200000

var tenure=20

var interest_rate=9

var n=240

 var r=interest_rate/12

 var i=r/100

emi=loanAmount*i*((1+i)**n)/((1+i)**n-1)

total_interest=loanAmount*i*n

total_payment=loanAmount+total_interest

console.log(`monthly emi: ${emi}`);
console.log(`total interest: ${total_interest}`);

console.log(`total payment: ${total_payment}`);


