const words = ["javascript", "function", "variable", "object", "array"];
let currentWord = words[Math.floor(Math.random() * words.length)];
let scrambledWord = scrambleWord(currentWord);

document.getElementById("scrambled-word").textContent = scrambledWord;
document.getElementById("next-btn").disabled = true;

document.getElementById("submit-btn").addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value;
    const feedback = document.getElementById("feedback");
    if (userInput.toLowerCase() === currentWord) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        document.getElementById("next-btn").disabled = false;
    } else {
        feedback.textContent = "Try again!";
        feedback.style.color = "red";
    }
});

document.getElementById("next-btn").addEventListener("click", function () {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    document.getElementById("scrambled-word").textContent = scrambledWord;
    document.getElementById("user-input").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").disabled = true;
});

function scrambleWord(word) {
    const arr = word.split("");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});