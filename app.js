let quote = document.getElementById("quote")
let author = document.getElementById("author")
let btn = document.getElementById("btn")

const api = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(api)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
        })
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);