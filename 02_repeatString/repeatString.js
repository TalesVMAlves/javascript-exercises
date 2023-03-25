const repeatString = function(phrase, n_repeats) {
    if(n_repeats < 0)   return 'ERROR';
    let blank = '';
    for(let i = 0; i < n_repeats; i++){
        blank += phrase;
    }
    return blank;
};

// Do not edit below this line
module.exports = repeatString;
