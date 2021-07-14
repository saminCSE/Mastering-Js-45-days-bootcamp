// Problem - 1
//==============================================================
function profile(firstName, lastName, age, job, passion) {
    return `I am ${firstName} ${lastName} and ${age}. I'm a ${job}. I love ${passion}`;
}

const profile_1 = profile('Samin', 'Yeasar', 25, 'Software Engineer', 'Programming');
console.log(profile_1);



// Problem - 2
//==============================================================
const movie = [
    {
        id: 1,
        name: 'movie_1',
        rating: 8.4,
        catagory: 'Thriller'
    },
    {
        id: 2,
        name: 'movie_2',
        rating: 8.6,
        catagory: 'Sci - Fi'
    }
];

function mDetails(movie) {
    const mIndex = movie[0];
    return `${mIndex.name} got ${mIndex.rating} rating and under ${mIndex.catagory} catagory`;
}

const mInfo = mDetails(movie);
console.log(mInfo);