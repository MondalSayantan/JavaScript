/*

PROBLEM STATEMENT

A school has following rules for grading system:
[0, 25) - F
[25, 45) - E
[45, 50) - D
[50, 60) - C
[60, 80) - B
[80, 100] - A
If the input is less than 0 or greater than 100 then it is considered invalid. 

*/

function getGrade(score){
    if(score>100){
        return "Invalid";
    }
    else if(score>=80){
        return "A";
    }
    else if(score>=60){
        return "B";
    }
    else if(score>=50){
        return "C";
    }
    else if(score>=45){
        return "D";
    }
    else if(score>=25){
        return "E";
    }
    else if(score>=0){
        return "F";
    }
    else {
        return "Invalid";
    }
}

console.log(getGrade(110));
console.log(getGrade(55));
console.log(getGrade(-10));
console.log(getGrade(99));
console.log(getGrade(15));