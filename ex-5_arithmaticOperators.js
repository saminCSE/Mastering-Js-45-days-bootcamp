// Arithmetic Operators
//==============================================================
function arithmeticOperators(num1, num2) {
    console.log(`additon ---------> ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`subtraction -----> ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`multipliaction --> ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`exponentiation --> ${num1} ** ${num2} = ${num1 ** num2}`);
    console.log(`division --------> ${num1} / ${num2} = ${num1 / num2}`);
    console.log(`modulus ---------> ${num1} % ${num2} = ${num1 % num2}`);
    console.log(`post_increment --> ${num2}++ = ${num2++}`);
    console.log(`pre_increment ---> ++${num2} = ${++num2}`);
    console.log(`post_decrement --> ${num1}-- = ${num1--}`);
    console.log(`pre_decrement ---> --${num1} = ${--num1}`);
}

arithmeticOperators(6, 4);