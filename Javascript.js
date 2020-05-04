/*
2020-05-04 --> andrade@mail.uk

Codility Training
*/
function solution(N) {
    var binary = N.toString(2);
    
    var length = binary.length;
    
    var ones = [];
    for(var i=0; i<length; i++) {
        if (binary[i]=='1') ones.push(i);
    }
    
    var zeros = binary.split('1');
    
    var returnVar = 0;
    
    for(var i=1; i<ones.length; i++) {
        if (zeros[i] && returnVar<zeros[i].length) returnVar = zeros[i].length;
    }
    
    return returnVar;
}