const fibonacci = function(position) {
    if(position > 0){
        let fib = [1, 1];
        for(let i = 2; i < position; i++){
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib[position - 1];
    }
    else    return 'OOPS';
};


// Do not edit below this line
module.exports = fibonacci;
