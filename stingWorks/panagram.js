var text="the quick brown fox jumps over the lazy dog"

var alphabets="abcdefghijklmnopqrstuvwxyz"

var isPanagram=true

for(let ch of alphabets){

    if(!text.includes(ch)){
        isPanagram=false

        break
    }
}
console.log(isPanagram);