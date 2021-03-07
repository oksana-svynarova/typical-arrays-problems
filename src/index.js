
exports.min = function min (array) {
    if (!array || array.length === 0) {
            return 0;
        }   
    return Math.min.apply(null, array);
}

exports.max = function max (array) {
if (!array || array.length === 0) {
        return 0;
    }
     return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
 let average = 0;
    if (!array || array.length === 0) {
        return 0;
    }
    for (var i = 0; i < array.length; i++) {
        average += array[i];
        }

    return average / array.length;
}
