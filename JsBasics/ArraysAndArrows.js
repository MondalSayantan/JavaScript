/*

Problem Description

Create an arrow function named modify() which takes an integer array as input and modify the array as follows -

If an element of the array is prime, then add one to the element

If an element of the array is not prime, then multiply the element by 2.

Return the modified array.

*/


function isPrime(n) {
    if(n == 0 || n == 1) {
        return false;
    }
    for(let i = 2 ; i*i <= n ; i++) {
        if(n%i == 0) {
            return false;
        }
    }
    return true;}

let modify = arr => {
    for(let i = 0; i<arr.length; i++){
        if(isPrime == true){
            arr[i]*=2;
        }
        else{
            arr[i]+=1;
        }
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(modify(arr));
