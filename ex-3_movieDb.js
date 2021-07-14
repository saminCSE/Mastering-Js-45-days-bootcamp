// Structuring a movie database (10 movies)
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
    },
    {
        id: 3,
        name: 'movie_3',
        rating: 8.1,
        catagory: 'Suspense'
    },
    {
        id: 4,
        name: 'movie_4',
        rating: 7.6,
        catagory: 'Romance'
    },
    {
        id: 5,
        name: 'movie_5',
        rating: 7.2,
        catagory: 'Fighting'
    },
    {
        id: 6,
        name: 'movie_6',
        rating: 6.7,
        catagory: 'Comedy'
    },
    {
        id: 7,
        name: 'movie_7',
        rating: 7.4,
        catagory: 'Horror'
    },
    {
        id: 8,
        name: 'movie_8',
        rating: 8.5,
        catagory: 'Mystery'
    },
    {
        id: 9,
        name: 'movie_9',
        rating: 6.1,
        catagory: 'Drama'
    },
    {
        id: 10,
        name: 'movie_10',
        rating: 7.5,
        catagory: 'Action'
    },
];

const mIndex = movie[0];
const mDetails = mIndex.name + ' got ' + mIndex.rating + ' rating and under ' + mIndex.catagory + ' catagory.';
console.log(mDetails);