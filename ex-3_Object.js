// Write your Bio (By grouping closely related data)
//==============================================================

const info = {
    name: 'Samin Yeasar',
    age: 25,
    profession: 'Software Engineer',
    passion: '"Programming"'
};

const personal_info = 'I am ' + info.name + ' and ' + info.age + '.' +
    'I\'m a ' + info.profession + '.' +
    'I love ' + info.passion + '.';

console.log(personal_info);

// Invalid Key
//==============================================================

var someObject = {};

someObject._name = 'Hadwing';//---> Valid
someObject.age = 6;//-------------> Valid

var prop = 'Color';//-------------> Valid
someObject[prop] = 'red';//-------> Valid

//someObject.123 = true;//----------> Invalid
/*
Explanation-->
Here, the key starts with integer(1),
That's why the key is invalid.
*/
console.log(someObject);