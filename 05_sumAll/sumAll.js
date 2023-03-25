const sumAll = function(n1, n2) {
    if(bothPositive(n1, n2) && bothInteger(n1, n2)){
        if(n1>n2){
            let aux = n2;
            n2 = n1;
            n1 = aux;
            return sumFunction(n1, n2);
        }
        else    return sumFunction(n1, n2);
    }
    else    return 'ERROR';
};

const sumFunction = function(n1, n2){
    let sum = 0;
    for(let i = n1; i <= n2; i++){
        sum += i;
    }
    return sum;
}

const bothInteger = function(n1, n2){
    if(Number.isInteger(n1) && Number.isInteger(n2))    return true;
    else                                                return false;
}

const bothPositive = function(n1, n2){
    if(n1 >= 0 && n2 >= 0)                              return true;
    else                                                return false;
}
// Do not edit below this line
module.exports = sumAll;
