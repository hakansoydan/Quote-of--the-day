const API_URL = 'https://api.quotable.io/random';
const author = document.getElementById('author');
const qoute = document.getElementById('quote');
const newPost = document.querySelector('.newpost');

async function getQuote(API_URL){
   const response = await fetch(API_URL);
   let data = await response.json();
   
   qoute.innerHTML =data.content;
   author.innerHTML = data.author;
}
getQuote(API_URL);

function tweet(){
   window.open("https://twitter.com/intent/tweet?text="+ qoute.innerHTML + "..." +  author.innerHTML ,"Tweet Window","width=600px, height=300");
}
