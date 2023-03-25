const palindromes = function (phrase) {
    no_punctuation = phrase.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toUpperCase();
    for(let i = 0; i < (no_punctuation.length)/2; i++){
        if(no_punctuation[i] !== no_punctuation[no_punctuation.length - 1 - i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
