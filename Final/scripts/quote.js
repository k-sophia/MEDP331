/*************************  Header Quote *************************/

let quoteText = document.querySelector('#header-quote');

let arr = [
    "there are always flowers for those who want to see them",
    "what a lonely place it would be to have a world without a wildflower",
    "i’d rather wear flowers in my hair, than diamonds around my neck",
    "all the flowers of the tomorrows are in the seeds of today",
    "spring: a lovely reminder of how beautiful change can truly be",
    "love is like wildflowers; it’s often found in the most unlikely places",
    "if you enjoy the fragrance of a rose, you must accept the thorns"
];

function changeQuote() {
    let num = Math.floor(Math.random() * arr.length);
    quoteText.innerHTML = arr[num];
};

changeQuote();