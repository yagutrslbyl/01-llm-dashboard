
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
console.log("Simvol sayı (boşluqsuz):", characterCount("  Hello  ")); 


function analyzeText(text) {
  const cleaned = cleanText(text);
  const words = splitIntoWords(cleaned);
  const filtered = removeEmptyWords(words);

  return {
    characters: cleaned.length,
    words: filtered.length,
    tokens: estimateTokens(filtered)
  };
}

const textarea = document.querySelector('#inputText');
const statChars = document.querySelector('#stat-chars');
const statWords = document.querySelector('#stat-words');
const statTokens = document.querySelector('#stat-tokens');
const saveBtn = document.querySelector('#save-btn');
const historyList = document.querySelector('#history-list');

const history = [];

textarea.addEventListener('input', function() {
  const analysis = analyzeText(textarea.value);
  statChars.textContent  = 'Characters: ' + analysis.characters;
  statWords.textContent  = 'Words: '      + analysis.words;
  statTokens.textContent = 'Estimated tokens: ' + analysis.tokens;
});

saveBtn.addEventListener('click', function() {
  if (textarea.value.trim() === '') {
    alert("Please type some text first!");
    return;
  }

  const analysis = analyzeText(textarea.value);
  analysis.label = 'Snapshot ' + (history.length + 1); 
  
  history.push(analysis); 
  renderHistory();        
});



function renderHistory() {
  historyList.innerHTML = '';

  history.forEach(function(entry) {
    const li = document.createElement('li');
    li.textContent = entry.label + ': ' + entry.tokens + ' tokens, ' + entry.words + ' words, ' + entry.characters + ' characters';
    historyList.appendChild(li);
  });
}

const clearBtn = document.querySelector('#clear-btn');

clearBtn.addEventListener('click', function() {
  history.length = 0; 
    renderHistory();    
  });