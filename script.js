// Object
const profile = {
    name: 'samin',
    age: 26,
    job: 'none'
};

console.log(profile);

//To update age
profile["age"] += 1;

//To add object
profile.city = 'Dhaka';

console.log(profile);

hello = () => {
    return "Hello World!";
  }
 
//Font  
//Consolas, 'Source Code Pro', monospace

function equalityCheck(num1,num2){
  if(num1 === num2){
    return true;
  }
  else{
    return false;
  }
}
console.log(equalityCheck(4,'4'));


//git init
//git add . or "file name"
//git commit -m "some lines to commit"
//git push https://git.... --force

const arr1 = [1,2,3];
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];

console.log(nestedArray[2][1][0][0][0]);
console.log(nestedArray[2][0][1][0])

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

function largestOfFour(arr) {
  return arr.map(subArr => Math.max.apply(null, subArr));
}

const lN = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(lN)

function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

const anT = confirmEnding("Bastian", "n");
console.log(anT);

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  return str.slice(0, num) + '...';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//slice splice reduce map split substring apply 