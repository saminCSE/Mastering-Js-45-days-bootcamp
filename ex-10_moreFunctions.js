// 1. Count the truthy value
//==============================================================
const array = [0,null,undefined,'',2,3];
const countTruthy = (arr) => {
    let count = 0
    for (let i in arr){
        if(arr[i]){
            count ++;
            console.log(`${arr[i]} -> Truthy`);
        }
        else{
            console.log(`${arr[i]} -> Falsy`);
        }
    }
    console.log(`Total no. of truthy value -> ${count}`);
}
countTruthy(array);

// 2. Add those numbers
//==============================================================
const sum = (arr) => {
    let totalSum = 0;
    let arrSum = []
    for (let i in arr){
        if(Array.isArray(arr) && arr[i]){
            totalSum += arr[i];
            arrSum.push(arr[i]);
        }
        else{
            console.log(`Wrong input -> ${arr[i]}`)
        }
    }
    console.log(`${arrSum.join('+')}->${totalSum}`)
}
const arr1 = [1,2]
const arr2 = [5,6]
sum([...arr1,3,0,null,4,...arr2]); // using spread function