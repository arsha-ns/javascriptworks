var text="abbccbb"

// var long_string=""





// var sorted_text=text.split("").reverse().join("")


// if (text==sorted_text){

//     console.log(sorted_text);
// }

// else{


//     for(i=0;i<text.length;i=i+1){

//         for(j=i+1;sorted_text.length;)
//     }


// }

// console.log(sorted_text);

var palindrome_list=[]

var palindrome_text=[]

for (let i  in text.length){

  var p=i

  var n=i

while((p>0 && n<text.length)&& (text[p]==text[n])){

    palindrome_text=text[p,n+1]

    palindrome_list.push(palindrome_text)

    p-=1
    n+=1

}


p=i
n=i+1

while((p>0 && n<text.length)&& text[p]==text[n]){

    palindrome_text=text[p,n+1]

    palindrome_list.push(palindrome_text)

    p-=1

    n+=1
}

function getlength(w){
  return length(w)
}

console.log(palindrome_list,key=getlength);

}















// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// function longest_palindrome(str) {
//     let maxLength = 0;
//     let longestPalindrome = '';

//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j <= str.length; j++) {
//             const substring = str.slice(i, j);
//             if (isPalindrome(substring) && substring.length > maxLength) {
//                 maxLength = substring.length;
//                 longestPalindrome = substring;
//             }
//         }
//     }

//     return longestPalindrome;
// }

// // Example usage:
// console.log(longest_palindrome("abracadabra")); // Output: "aca"
// console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));
// // Output: "12345678987654321"
