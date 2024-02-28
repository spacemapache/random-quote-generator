const quotes = [
  "There is a saying: yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
  "To the stars who listen, and the dreams that are answered",
  "It is what it is",
  "I am your father",
  "You sit on a throne of lies",
  "Keep the change, ya filthy animal",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  while (true) {
    if (usedIndexes.size >= quotes.length) {
      usedIndexes.clear();
    }

    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
