var text="hello hai hello hai hello"
var wc={}

// var s=text.split(" ")

// for (let ch of s){

//     if( ch in wc){

//         wc[ch]+=1
//     }
//     else{
//         wc[ch]=1
//     }

     
// }


text.split(" ").map(w=>wc[w]?wc[w]+=1:wc[w]=1)
console.log(wc);