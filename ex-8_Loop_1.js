// Exercise-1
//==============================================================
let num1 = 1;
while (num1 <= 10) {
    console.log(num1);
    num1 += 2;
}

// Exercise-2
//==============================================================
let num2 = 1;
while (num2 <= 20) {
    if (num2 % 4 === 0) { //divisible by 4
        console.log(num2);
    }
    num2++
}

// Exercise-3
//==============================================================
// let num3 = 100;
// while (num3 < 150) {//----------->> [Infinite Loop]
//     console.log(num3 + 1);
//     num3--;
// }

// Exercise-4 (Even numbers between 1 and 100)
//==============================================================
let num4 = 1;
while (num4 <= 100) {
    if (num4 % 2 === 0) {
        console.log(num4);
    }
    num4++
}
let i;
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Exercise-5
//==============================================================
let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "$";
    }
    string += "\n";
}
console.log(string);