/*Exercise-1
==============================================
must result a array including all elements 
in the defined range
results will be [1,2, 3, 4, 5, 6, 7, 8, 9, 10]*/

const arrayFromRange = (min, max) =>{
    let array = []
    for (let i=min; i<=max; i++) array.push(i);
    return array;
}
console.log(arrayFromRange(1,10));

/*Exercise-2
==============================================
custom includes methods that is defined by you
result true or false based on searchElement
*/
const includes = (array, searchElement) => {
    return array.includes(searchElement);
}
const numbers = [1,2,3,4];
console.log(includes(numbers,-1));
console.log(includes(numbers,+3));

/*Exercise-3
==============================================
Exclude the numbers you passed to the function  from numbers array
result will be [3, 4]
*/

function except(array, excluded) {
    //Easy Solution
    // const exceptArr = []
    // for(let i of array){
    //     if(!excluded.includes(i)){
    //         exceptArr.push(i)
    //     }
    // }
    // return exceptArr

    //Another Solution
    return (array.filter((item) => !excluded.includes(item)));
}
const num = [1,2,3,4];
const out = except(num,[1,2]);
console.log(out);

/*Exercise-4
==============================================
count the occurrence of numbers 
result will be number of occurrence.
Example case: result will be 2  
*/
//At first use procedural way
const countOccurrence = (array, searchElement) => {
    let count = 0;
    for (let i in array) {
        if(array[i] === searchElement){
            count++;
        }
    }
    return count;
}
const numbers3 = [1,2,3,1,4,4,4];
const count_element = countOccurrence(numbers3, 1); 
console.log(count_element);

//Then use reduce method
const countOccurrence2 = (array, searchElement) => {
    let count = 0;
    array.reduce(count)
    return count++;
}
console.log(countOccurrence(numbers3, 4));

/*Exercise-5
==============================================
Get the maximum number from the array
*/
//At first use procedural way
const numbers4 = [1, 2, 3, 4];
console.log(Math.max(...numbers4));

//THen use reduce method 
const getMax = numbers4.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(getMax);

const getMax2 = (array) => {  
    const maxNumber = array.reduce((m,n)=>{
        return m>n? m : n;
    })
    console.log(maxNumber) }
getMax2(numbers4);