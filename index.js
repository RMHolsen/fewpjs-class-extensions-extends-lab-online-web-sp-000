// Your code here
class Polygon {
    constructor(numArray) {
        this.sides = numArray;
        // the array length is the number of sides; each integer in the array is the side length
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let sum = 0;
        for (let i of this.sides) {
            sum += i
        }
        return sum;
    }
}

class Triangle extends Polygon {
// I cannot remember the necessary and relevant conditions for making a triangle my grandmother would be ashamed.
    get isValid() {
        if (this.sides.length !== 3) {
            return false;
            // okay THIS condition I remember
        } else {
            let sideA = this.sides[0];
            let sideB = this.sides[1];
            let sideC = this.sides[2];
            let AB = this.sides[0] + this.sides[1];
            let BC = this.sides[1] + this.sides[2];
            let AC = this.sides[0] + this.sides[2];
            // let's shorten this up a bit. and by this I mean the endless freaking if statement
            if ((sideA < BC) && (sideB < AC) && (sideC < AB)) {
                return true;
            } else { 
                return false;
            }
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.sides.length !== 4) {
            return false;
            // obviously if it doesn't have four sides it's not a square
        } else {
            if ((this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]) && (this.sides[2] === this.sides[3])) {
                return true;
            } else {
                return false;
            }
        }
    }

    get area() {
        let side = this.sides[0];
        return side * side
    }
}