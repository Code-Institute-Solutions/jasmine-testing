describe("Calculator", function() {
    describe("Addition function", function() {
        it("should take two arguments and return the sum of those two arguments", function() {
            expect(addition(2, 2)).toBe(4);
        });

        it("should not return 4 if the arguments given don't produce a sum of 4", function() {
            expect(addition(7, 19)).toBe(26);
        });

        it("should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            addition("Hello");
            expect(window.alert).toHaveBeenCalledWith("Both arguments must be numbers");
        });
    });
});