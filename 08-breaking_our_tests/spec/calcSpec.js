describe("Calculator", function() {

    beforeEach(function() {
        calc = new Calculator();
    });

    describe("Add method", function() {
        it("should take two arguments and return the sum of those two arguments", function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });

        it("should not return 4 if the arguments given don't produce a sum of 4", function() {
            calc.add(7);
            calc.add(19)
            expect(calc.value).toBe(26);
        });

        it("should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            calc.add("Hello");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});
