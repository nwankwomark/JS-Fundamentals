// ===== OBJECTS & METHODS PRACTICE =====
// A "method" is just a function that lives INSIDE an object as one of its properties.
// Called like: objectName.methodName(arguments)

// 1. SQUARE
let square = {
  area: function (side) {
    return side * side;
  },
  perimeter: function (side) {
    return side * 4;
  }
};

console.log(square.area(10));       // 100
console.log(square.perimeter(10));  // 40
// Got both right — straightforward once the object/method syntax clicked for me
// .

// 2. RECTANGLE
let rectangle = {
  area: function (length, width) {
    return length * width;
  },
  perimeter: function (length, width) {
    return (length + width) * 2;
  }
};

console.log(rectangle.area(5, 3));       // 15
console.log(rectangle.perimeter(5, 3));  // 16
// NOTES: First tried "length + width * 2" — WRONG. JS does multiplication
// before addition (same as normal math rules), so without parentheses it
// calculates length + (width * 2), not (length + width) * 2.
// Rule to remember: wrap addition/subtraction in parentheses whenever it
// needs to happen BEFORE a multiplication/division in the same line.

// 3. TRAPEZOID
let trapezoid = {
  perimeter: function (a, b, c, d) {
    return a + b + c + d;
  }
};

console.log(trapezoid.perimeter(5, 6, 7, 8)); // 26
// NOTES: Got confused and tried writing "function" again INSIDE the
// function body — don't need to. The function keyword + parameters are
// already declared once, in the header. Inside the {} you just write
// what the function DOES with those parameters.

// 4. FAHRENHEIT TO CELSIUS CONVERTER
let converter = {
  toCelsius: function (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
};

console.log(converter.toCelsius(212)); // 100
console.log(converter.toCelsius(32));  // 0
// NOTES: Same parentheses trap as the rectangle. Without wrapping
// (fahrenheit - 32), JS would multiply 32 * 5 / 9 FIRST, then subtract
// that from fahrenheit — totally wrong result. The subtraction needs to
// fully finish before anything gets multiplied.

// 5. AVERAGE OF THREE NUMBERS
let stats = {
  average: function (a, b, c) {
    return (a + b + c) / 3;
  }
};

console.log(stats.average(4, 8, 12)); // 8
// Got this one right on the first try — parentheses trap fully sunk in
// by this point (add first, THEN divide).

// 6. RECTANGLE INFO (STRING-BUILDING)
let rectangleInfo = {
  describe: function (length, width) {
    return "Area: " + (length * width) + ", Perimeter: " + ((length + width) * 2);
  }
};

console.log(rectangleInfo.describe(5, 3)); // "Area: 15, Perimeter: 16"
// NOTES: New concept here — joining text and numbers together using +.
// Two mistakes caught along the way:
// 1. Wrote "return :" with a colon after return — invalid syntax. return
//    is followed directly by the value, no colon.
// 2. Forgot the colon+space INSIDE the string itself ("Area" instead of
//    "Area: "), which would've squished the label and number together
//    with no separation in the output.
// Also had to use parameter names exactly as declared (length, width,
// lowercase) — not "Length"/"Width", or JS won't recognize them.
