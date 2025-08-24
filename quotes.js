const quotes = [
    {
        quote: "Life is how you stands.",
        author: "Chan Park",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "When you stop to walk, you begin to look around.",
        author: "Chan Park",
    },
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "This too shall pass.",
        author: "Et hoc transibit",
    },
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "Time is on your side, when you're favorable about time.",
        author: "Chan Park",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;