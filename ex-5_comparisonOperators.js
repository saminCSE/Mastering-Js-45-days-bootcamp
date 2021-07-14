// Comparison Operators
//==============================================================
function comparisonOperators(num1, num2, other) {
    console.log(`equal to --> ${num1} ==  '${other}' = ${num1 == other}`);
    console.log(`equal value and equal type --> ${num1} === '${other}' = ${num1 === other}`);
    console.log(`not equal --> ${num1} != ${num2} = ${num1 != num2}`);
    console.log(`greater than --> ${num1} > ${num2} = ${num1 > num2}`);
    console.log(`less than --> ${num1} < ${num2} = ${num1 < num2}`);
}

comparisonOperators(6, 4, '6');