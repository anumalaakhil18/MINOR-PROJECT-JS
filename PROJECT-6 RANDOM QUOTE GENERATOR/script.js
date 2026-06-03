const quotes = [
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const saveBtn = document.getElementById("saveBtn");

const favoriteList = document.getElementById("favoriteList");

let currentQuote = {};

// Generate Random Quote
function generateQuote() {

  const randomIndex = Math.floor(Math.random() * quotes.length);

  currentQuote = quotes[randomIndex];

  quoteText.innerText = `"${currentQuote.text}"`;

  authorText.innerText = `- ${currentQuote.author}`;
}

// Copy Quote
copyBtn.addEventListener("click", () => {

  const textToCopy =
    `${currentQuote.text} - ${currentQuote.author}`;

  navigator.clipboard.writeText(textToCopy);

  alert("Quote Copied!");
});

// Save Favorite Quote
saveBtn.addEventListener("click", () => {

  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.push(currentQuote);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  displayFavorites();
});

// Display Favorite Quotes
function displayFavorites() {

  favoriteList.innerHTML = "";

  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.forEach((quote, index) => {

    const li = document.createElement("li");

    li.innerHTML = `
      "${quote.text}" - ${quote.author}
      <button class="remove-btn" onclick="removeFavorite(${index})">
        X
      </button>
    `;

    favoriteList.appendChild(li);
  });
}

// Remove Favorite
function removeFavorite(index) {

  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.splice(index, 1);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  displayFavorites();
}

// New Quote Button
newQuoteBtn.addEventListener("click", generateQuote);

// Initial Load
generateQuote();
displayFavorites();