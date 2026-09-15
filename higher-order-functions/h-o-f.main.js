// ===== HIGHER ORDER FUNCTIONS PRACTICE =====
// A higher order function either:
// 1. Takes another function as an input ("here's a tool, use it")
// 2. Returns a function as output ("here's a custom-built tool for later")

// 1. PASSING A FUNCTION IN
function transform(word, fn) {
  console.log(fn(word));
}

function shorten(word) {
  return word.slice(0, 3);
}

transform("JavaScript", shorten);
// Predicted: "Script" WRONG — actual: "Jav"
// NOTES: I mixed up slice(0, 3) with grabbing the LAST 3 letters.
// slice(0, 3) means "start at index 0, stop right before index 3" —
// so it grabs the FIRST 3 characters (J-a-v), not the last ones.
// slice(-3) is the one that grabs from the end instead.

// 2. RETURNING A FUNCTION (closures again)
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5));
console.log(triple(5));
// Predicted: 10, 15  Got it right
// NOTES: multiplyBy is like a factory that builds custom "multiplier tools."
// Each tool permanently remembers the factor it was built with (closure),
// so double always multiplies by 2 and triple always multiplies by 3 —
// even though they both came from the same function.

// 3. PASSING FUNCTIONS IN — MORE PRACTICE
function operate(a, b, fn) {
  return fn(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(operate(5, 3, add));
// Predicted: 5, 3, 8 (all three) got all WRONG — actual: 8
// NOTES: Only ONE console.log exists here. The 5 and 3 are just the
// ingredients fed INTO the function — they don't get printed on their own.
// Only whatever operate() returns gets logged, which is add(5,3) = 8.

console.log(operate(5, 3, multiply));
// Predicted: 15 Got it right

// 4. USING A FUNCTION INSIDE A LOOP (inline/anonymous function)
function repeatAction(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

repeatAction(3, function (num) {
  console.log("Run number " + num);
});
// Predicted: "Run number 0", "Run number 1", "Run number 2"  Got it right
// (after breaking it down step by step with a named version first)
// NOTES: The function passed in with no name is called an "anonymous
// function." It does the exact same job as writing a named function
// separately (like shout()) — it's just written inline. `action` is just
// the parameter name catching whatever function gets passed in, same
// as `fn` did in the earlier examples.

// 5.
function processNumbers(limit, action) {
  for (let i = 1; i <= limit; i++) {
    action(i);
  }
}

processNumbers(4, function (num) {
  console.log(num * num);
});
// Predicted: 1, 4, 9, 16 ✅ Got it right
// NOTES: Because it's <= (not <), the loop runs i = 1,2,3,4 (4 rounds,
// starting from 1 instead of 0). Each round squares the number.
