const removeFromArray = function(arr, ...element) {
    let new_arr = [];
    for(let i = 0; i < arr.length; i++){
        if(!element.includes(arr[i])){
            console.log('i: '+i);
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
