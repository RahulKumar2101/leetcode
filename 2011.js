// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Example 2:

// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.
// Example 3:

// Input: operations = ["X++","++X","--X","X--"]
// Output: 0
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// X++: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// --X: X is decremented by 1, X = 2 - 1 = 1.
// X--: X is decremented by 1, X = 1 - 1 = 0.
 
 let finalValueAfterOperations = function(operations) {
    let x=0;
    for(let i=0;i<operations.length;i++){
        if(operations[i]=="++X"){
            ++x;
        }
        else if(operations[i]=="X++"){
            x++;
        }
        else if(operations[i]=="--X"){
            --x;
        }
        else if (operations[i]=="X--"){
            x--;
        }
    }
    return x;
};
console.log(finalValueAfterOperations(["++X","++X","X++"]));