var input = "racecar";


//Output results
if (palChk(input)){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome")
}


function palChk (word){
var letters = [];
var rWord = [];


//add word to letters stack
for (var i=0; i < word.length; i++){
letters.push(word[i]);
}

//add word to reverse letters stack
for(var i=0; i < word.length; i++){
rWord.push(letters.pop())
}

//Check if palindrome
if (rWord.join("") == word){
    return true
}

}