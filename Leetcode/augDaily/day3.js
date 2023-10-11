


var letterCombinations = function(digits) {
    let numToChar = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz",
    }
    let combinations = [];

    function backTrack(num,comb){
        if(comb.length == digits.length){
            combinations.push(comb.join(""));
            return;
        }
        for(let i=0;i<numToChar[digits[num]].length;i++){
            comb.push(numToChar[digits[num]][i]);
            backTrack(num+1,comb);
            comb.splice(comb.length-1,1);
        }
    }

    backTrack(0,[]);
    return combinations;
};


console.log(letterCombinations("23"));