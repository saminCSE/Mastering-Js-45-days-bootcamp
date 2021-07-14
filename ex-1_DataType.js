const data_1 = "Karim is a bad boy";
const data_2 = 'Karim is a "bad" boy';
console.log(data_1);
console.log(data_2);

const a = 45;
const b = "45";
/*Explanation-->
  Here in case of a, 45 is a number 
  but, in case of b, 45 is declared in double quotation " ",
  so "45" becomes a string.  
*/
console.log(typeof (a));
console.log(typeof (b));

// Bio
const str_1 = "I am Samin Yeasar.";
const str_2 = "I am 25.";
const str_3 = "I'm a Software Engineer.";
const str_4 = "I love \"programming\". ";

const str_all = str_1 + str_2 + str_3 + str_4;
console.log(str_all);