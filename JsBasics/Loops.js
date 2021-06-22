/* 

PROBLEM DESCRIPTION

Given an input N, complete the function evenNumbers() to return all even numbers in the range [0, N] in the form of an Array.

*/

function evenNumbers(n) {
    let index;
    let evenNumbersArray = [];
    for(index = 0; index<=n; index++){
        if(index%2 == 0){
            evenNumbersArray.push(index);
        }
        else{
            continue;
        }
    }
    return evenNumbersArray;
}

console.log(evenNumbers(10));