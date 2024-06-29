var words="pythonprogramming"

var wc={}

// for(let ch of words){
    // ch in wc?wc[ch]+=1:wc[ch]=1

    
// }

// console.log(wc);




words.split("").map(ch=>ch in wc?wc[ch]+=1:wc[ch]=1)

console.log(wc);




