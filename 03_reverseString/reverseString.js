const reverseString = function(string) {
    let reversed = '';
    for(let i = 0; i < string.length; i++){
        reversed = reversed.concat('', string[string.length - 1 - i]);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
