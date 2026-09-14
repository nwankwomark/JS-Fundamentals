// ===== LEXICAL SCOPING PRACTICE =====

// 1. THE BASICS
function outer() {
  let name = "Zenith";
  function inner() {
    console.log(name);
  }
  inner();
}
outer();
// Predicted: Zenith ✅ Got it right inner() is written INSIDE outer(), so it can see outer()'s variables automatically.

// 2. SHADOWING
let x = "outer";
function show() {
  let x = "inner";
  console.log(x);
}
show();
console.log(x);
// Predicted: different values ✅ Got it right
// Logs: "inner" then "outer" The inner x and outer x are two separate variables that just share a name. The inner one temporarily hides the outer one, but only while inside that function.

// 3. WHERE IT'S WRITTEN, NOT WHERE IT'S CALLED
let y = "global";
function a() {
  console.log(y);
}
function b() {
  let y = "local";
  a();
}
b();
// Predicted global and Got it right
// a() was written in the global scope, not inside b() — so even though b() is the one calling a(), a() has zero access to b()'s local y. Scope is about WHERE a function lives in the code, never who calls it.

// 4. NESTED CHAIN
function grandparent() {
  let level = "grandparent";
  function parent() {
    function child() {
      console.log(level);
    }
    child();
  }
  parent();
}
grandparent();
// Predicted: grandparent, Got it right
// child() doesn't have "level" itself, so JS walks over through parent() and finds it sitting on grandparent()'s shelf. Each nested function can see everything above it, no matter how many layers deep.

// 5. CLOSURES (the one that got me)
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let c1 = counter();
c1();
c1();
c1();
// Predicted: 1, 1, 1  that was WRONG the actual output came out as : 1, 2, 3

// NOTES ON WHAT I MISSED:
// I assumed that once counter() finished running, its variables would be gone,
// so I figured every call to c1() would start fresh from count = 0.
// That's not what happens. The inner function (the one returned and stored in c1)
// was BORN inside counter(), so it keeps a permanent link back to that exact
// count variable — even after counter() itself has finished running.
// It's not a new count each time. It's the SAME one, remembered, every single call.
// This "function that remembers variables from where it was created" is called
// a CLOSURE. It's the part of lexical scope I need to go deeper on next. got the explanation from claude using eli9 prompt(explain like i'm 9 lol)