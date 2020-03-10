var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
    var result = largerThanTen([4, 10, 32, 9, 21]);

    var expected = [32, 21];

    expect(result).toEqual(expected);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
