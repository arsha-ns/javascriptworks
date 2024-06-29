var text="Pneumonoultramicroscopicsilicovolcanoconiosis"

var vowels="aeiou"

var v_count=0

var  c_count=0

for(let ch of text){

    if(vowels.includes(ch)){

        v_count+=1


    }

    else{
        c_count+=1
    }
}

console.log("total length",text.length);

console.log("vowels",c_count);

console.log("consanante",v_count);

//anagram


