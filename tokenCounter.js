
function cleanText(text) {
  return text.trim();
}


function splitIntoWords(text) {
  return text.split(" ");
}


function removeEmptyWords(words) {
  return words.filter(function(word) {
    return word !== "";
  });
}


function estimateTokens(words) {
  return Math.ceil(words.length * 0.75);
}


function countTokens(text) {
  const cleaned = cleanText(text);
  const words = splitIntoWords(cleaned);
  const filtered = removeEmptyWords(words);
  return estimateTokens(filtered);
}


console.log("Test 1 (Clean):", cleanText("  Hello world  "));
console.log("Test 2 (Split):", splitIntoWords("The quick brown fox"));

const messy = splitIntoWords("Hello   world");
console.log("Test 3 (Messy Split):", messy);
console.log("Test 3 (Filtered):", removeEmptyWords(messy));


console.log("Token 'Hello':", countTokens("Hello"));
console.log("Token 'Hello, world!':", countTokens("Hello, world!"));
console.log("Token (Messy spaces):", countTokens("  I am learning JavaScript   today  "));




function estimateCost(tokenCount, pricePerMillion) {
  return (tokenCount / 1000000) * pricePerMillion;
}
console.log("500 word email cost ($2.5 per 1M):", estimateCost(countTokens("Buraya 500 sözlük mətn gələ bilər..."), 2.50));


function characterCount(text) {
  return cleanText(text).length;
}
console.log("Simvol sayı (boşluqsuz):", characterCount("  Hello  ")); // 5 verməlidir