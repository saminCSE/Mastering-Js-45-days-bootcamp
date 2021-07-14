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
  if(num1===num2){
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