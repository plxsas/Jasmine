calculator = function() {
    this.value = 0;
}

calculator.prototype.add = function(number){
    if(typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}

/*function addition(numOne, numTwo) {
    if (typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne + numTwo;
    } else {
        alert("Error!");
    }
}*/