describe("Drink", function() {
    it("Sorry. I can’t tell what drink because that age is incorrect!", function() {
        expect(whatCanIDrink(-1)).toEqual("Sorry. I can’t tell what drink because that age is incorrect!");
    });
    it("Drink Toddy", function() {
        expect(whatCanIDrink(13)).toEqual("Drink Toddy");
    });
    it("Drink Coke", function() {
        expect(whatCanIDrink(17)).toEqual("Drink Coke");
    });
    it("Drink Beer", function() {
        expect(whatCanIDrink(20)).toEqual("Drink Beer");
    });
    it("Drink Whisky", function() {
       expect(whatCanIDrink(129)).toEqual("Drink Whisky");
    });
    it("Sorry. I can’t tell what drink because that age is incorrect!", function() {
        expect(whatCanIDrink()).toEqual("Sorry. I can’t tell what drink because that age is incorrect!");
    });
});
