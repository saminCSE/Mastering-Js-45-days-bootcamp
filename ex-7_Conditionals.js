// Using If statement
//==============================================================
function if_statement(age) {
    if (age < 10) {
        return 'Stay Home under your mom\'s supervision';
    }
    else if (age >= 10 && age < 15) {
        return 'Try to gain knowledge from outside of home';
    }
    else if (age >= 15 && age < 18) {
        return 'Prepare to cast vote';
    }
    else if (age >= 18) {
        return 'Cast your vote';
    }
    else {
        return 'You are out of range';
    }
}
console.log(if_statement(8));
console.log(if_statement(11));
console.log(if_statement(16));
console.log(if_statement(18));
console.log(if_statement(NaN));


// Using switch statement
//==============================================================
function switch_statement(age) {
    switch (true) {
        case (age < 10):
            return 'Stay Home under your mom\'s supervision';
            break;
        case (age >= 10 && age < 15):
            return 'Try to gain knowledge from outside of home';
            break;
        case (age >= 15 && age < 18):
            return 'Prepare to cast vote';
            break;
        case (age >= 18):
            return 'Cast your vote';
            break;
        default:
            return 'You are out of range';
            break;
    }
}
console.log(switch_statement(9));
console.log(switch_statement(11));
console.log(switch_statement(16));
console.log(switch_statement(19));
console.log(switch_statement(NaN));

console.log(false || true || 'samin')
console.log(false || 'samin' || true)

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(99));