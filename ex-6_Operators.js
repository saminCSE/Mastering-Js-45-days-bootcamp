// Exercise-1 (What will be the result and explain why?)
//==============================================================
const x = 10;
const y = "a";
console.log(y === "b" || x >= 10);
/*
Explanation-->
In case of Logical OR (||) operator, if only one part is true,
Then it will return true. Here, (x >= 10) is true. So, the result
is true.
*/

// Exercise-2
//==============================================================
const p = 3;
const q = 8;
const logic1 = !(p == "3" || p === q);
const logic2 = !(q != 8 && p <= q);
console.log(logic1);
console.log(logic2);
console.log(logic1 && logic2);

// Exercise-3 (Get the boolean Value)
//==============================================================
console.log(!"Hello World");
console.log(!"");
console.log(!null);
console.log(!0);
console.log(!-1);
console.log(!NaN);

// Exercise-4
//==============================================================
const str = "";
const msg = "haha";
const isFunny = "false";
console.log(!(str || msg) && isFunny);