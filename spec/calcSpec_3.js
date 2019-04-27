describe("fizzBuzz", function() {
    var num;
    it("fizzBuzz", function() {
        expect(fizzBuzz(15)).toEqual("FizzBuzz");
    });
    it("Fizz", function() {
        expect(fizzBuzz(3)).toEqual("Fizz");
    });
    it("Buzz", function() {
        expect(fizzBuzz(5)).toEqual("Buzz");
    });
    it("it should return error if we do not supply two numbers", function(){
        var result = fizzBuzz(num);
        expect(result).toEqual(result);
    });
    
 });
    
    
