// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

 

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

let findWordsContaining = function(words, x) {
    // let words=["leet","code"]
    let result=[];
    for(let i=0;i<words.length;i++){
        let found=false;
        for(let j=0;j<words[i].length;j++){
            if(words[i][j]==x) {
                found=true;
                break;
            }   
        }
        if (found){
        result.push(i)
        }
    }  
    return result;
};
 console.log(findWordsContaining(["leet","code","rahul","shekahr"],"e"));