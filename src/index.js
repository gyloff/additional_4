module.exports = function multiply(first, second) {
    var arrayFirst = [];
    var arraySecond = [];
    var array = [];
    var rememberAboutMe = 0;
    var OmegaLUL = 0;
    var shift = 0;

    arrayFirst = first.split('');
    arraySecond = second.split('');
  
    for (var i = 0; i < first.length; i++){
        var array = [];      
        for (var j = second.length - 1; j >= 0; j--){
            array.push((arrayFirst[i] * arraySecond[j] + rememberAboutMe) % 10);
            rememberAboutMe = Math.floor((arrayFirst[i] * arraySecond[j] + rememberAboutMe) / 10);
        }
        if (rememberAboutMe > 0){
            array.push(rememberAboutMe);
            rememberAboutMe = 0;
        }
        array.reverse();
        for (var e = 0; e < first.length - i - 1; e++){
            array.push(0);
        }
        if (i == 0){
            arraySum = array;
        } else {
            for (var b = 0; b < array.length; b++){
                arraySum[b + shift] = arraySum[b + shift] + array[b];
            }
        }
        shift++;
        for (var c = arraySum.length - 1; c >= 0; c--){
            if (arraySum[c] > 9){
                arraySum[c] = arraySum[c] - 10;
                arraySum[c - 1] = arraySum[c - 1] + 1;
            }
        }
    }
    for (var d = 0; d < arraySum.length; d++){
        OmegaLUL = OmegaLUL + arraySum[d] + '';
    }
    return OmegaLUL;
}
  
