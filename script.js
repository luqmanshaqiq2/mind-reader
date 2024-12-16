function startGame() {
    document.getElementById("start-container").classList.add("hidden");
    document.getElementById("input-container").classList.remove("hidden");
}

function exitGame() {
    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbXZk7gUZfgxxNwfPlteKVAvRNenDf0RAO1fuqlgcy-EhjeguAIAT_Ip8mfM83OeqcGhE&usqp=CAU')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("start-container").style.display = "none";
    
}

function processInput() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) {
        alert("Please enter a number!");
        return;
    }

    document.getElementById("input-container").classList.add("hidden");
    document.getElementById("loading-container").classList.remove("hidden");

    let loadingText = document.getElementById("loading-text");
    loadingText.textContent = "Hold on a second...";

    setTimeout(() => {
        loadingText.textContent = "Decoding your thoughts...";
    }, 1500);

    setTimeout(() => {
        document.getElementById("loading-container").classList.add("hidden");
        document.getElementById("result-container").classList.remove("hidden");
        document.getElementById("decoded-answer").textContent = `You were thinking of the number: ${userInput}`;
    }, 3000);
}

function cancelGame() {
    document.getElementById("input-container").classList.add("hidden");
    document.getElementById("start-container").classList.remove("hidden");
}

function resetGame() {
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("start-container").classList.remove("hidden");
    document.getElementById("user-input").value = "";
}
