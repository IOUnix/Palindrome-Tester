var word = "racecar";

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


//compare stacks
if (rWord.join("") == word){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome")
}