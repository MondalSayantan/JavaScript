/*

PROBLEM DESCRIPTION

Write a method which returns an array without the listed values

Sample input 1 -
arr: [1, 2, 2, 3, 1, 2]
without: [2, 3]

Sample output 1 -
[1, 1]

*/

function removeListedValues(arr, without){

    let newArray = [];

    for(let i = 0; i<arr.length; i++){
        let arrElement = arr[i];

        let isMatching  = false;

        for(let j = 0; j<without.length; j++){

            let withoutElement = without[j];

            if(arrElement == withoutElement){
                isMatching = true;
            }
        }

        if(isMatching == false){
            newArray.push(arrElement);
        }

    }
    return newArray;
}

let arr = [1, 2, 2, 3, 1, 2];
let without = [2,3];
console.log(removeListedValues(arr, without)); 