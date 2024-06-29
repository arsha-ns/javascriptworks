var number=1634

var original=number

var sum=0

var number_count=String(number).length

while(number !=0){
    digit=number%10

    sum=sum+digit**number_count

    number=Math.floor(number/10)
}

console.log(sum);

console.log(sum==original?"amstrong":"not amstrong");

//for,functions