// 1. Max of Define a function that outputs max of two function
//==============================================================
function max(a, b) {
    return (a > b ? `${a} is max` : `${b} is max`);
}
console.log(max(20, 25));

// 2. Show numbers in between with the types 
//==============================================================
function showNumber(num) {
    for (let i = 1; i < num; i++) {
        console.log(i)
    }
}
showNumber(15);

// 3. Sum of all numbers upto passed limit
//==============================================================
function sum(num) {
    sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum(5))

// 4. Calculate avg. num. Grade
//==============================================================
function calcAvg(arr) {
    let AvgMarks = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        AvgMarks += arr[i];
        count += 1;
    }
    let avg = (AvgMarks / arr.length);
    console.log(`Total Marks:-> ${AvgMarks}`)
    console.log(`Total Sub:-> ${count}`)
    console.log(`Average grade:->${avg}`)

    if (avg < 60) {
        console.log("Grade : F");
    }
    else if (avg < 70) {
        console.log("Grade : D");
    }
    else if (avg < 80) {
        console.log("Grade : C");
    }
    else if (avg < 90) {
        console.log("Grade : B");
    }
    else if (avg < 100) {
        console.log("Grade : A");
    }
}
calcAvg([96, 97, 85, 84, 99]);

// 5. Show properties of only value of stringType
//==============================================================
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
function showProperties(movieData) {
    for (const n in movieData) {
        if (typeof movieData[n] === typeof 'string') {
            console.log(movieData[n]);
        }
    }
}
showProperties(movie)