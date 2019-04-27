describe("Calculator", function() {
    
    beforeEach(function(){
       calc = new calculator; 
    });
    
    
    describe("Addition test", function(){
        it("Should return 42", function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("Should return 26", function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("it should return error if we do not supply two numbers", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});
