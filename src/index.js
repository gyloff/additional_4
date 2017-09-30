module.exports = function multiply(first, second) {
    var arrayFirst = [];
    var arraySecond = [];
    var array = [];
    var arraySum = [];
    var rememberAboutMe = 0;
    var OmegaLUL = 0;
    var shift = 0;
    var d;

    if (Math.max(first.length, second.length) == first.length){
        arrayFirst = first.split('');
        arraySecond = second.split('');
    }else{
        arrayFirst = second.split('');
        arraySecond = first.split('');    
    }
    array.length = arrayFirst.length;
    array.fill(0);
    
    for (var i = arraySecond.length - 1, g = -1; i >= 0; i--){
        g++;
        d = g;    
        for (var j = arrayFirst.length - 1; j >= 0; j--){
            array[d] += Number(arrayFirst[j]) * Number(arraySecond[i]);
            d++;
        }  
        if (i != 0) array.push(0);
    }
    for (var k = 0; k < array.length; k++){
       if (k == array.length - 1 && array[k] > 9) array.push(0);
        array[k] += rememberAboutMe;
        rememberAboutMe = Math.floor(array[k] / 10);
        array[k] = array[k] % 10;
    }

    return array.reverse().join('');
}
