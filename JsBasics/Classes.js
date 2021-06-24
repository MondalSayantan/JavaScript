/*

Problem Description

Create a Rectangle class that has the following properties:

A constructor that takes two values a and b describing the length and breadth of the Rectangle respectively.

A perimeter() method that returns the Rectangle's perimeter.

A area() method that returns the Rectangle's area.

*/

class Rectangle{

    constructor(a, b){
        this.length = a;
        this.breadth = b;
    }

    perimeter(){
        return 2*(this.length + this.breadth);
    }

    area(){
        return this.length * this.breadth;
    }

}

let rectangle = new Rectangle(10,8);
console.log(rectangle.area());
console.log(rectangle.perimeter());