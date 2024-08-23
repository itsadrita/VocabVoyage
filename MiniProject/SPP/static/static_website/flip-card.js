document.addEventListener('DOMContentLoaded', function () {
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(function (flipCard) {
        flipCard.addEventListener('click', function () {
            this.classList.toggle('flipped');
        });
    });
});

let currentIndex = 6; // Start index for next set of cards
function shuffleCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    const maxIndex = flipCards.length;

    // Hide all cards
    flipCards.forEach(function (flipCard) {
        flipCard.style.display = 'none';
    });

    // Show the next 6 cards or less if there are fewer than 6 left
    for (let i = currentIndex; i < Math.min(currentIndex + 6, maxIndex); i++) {
        flipCards[i].style.display = 'block';
    }

    // Update current index for the next shuffle
    currentIndex += 6;
    if (currentIndex >= maxIndex) {
        currentIndex = 0; // Restart from the beginning if all cards are shown
    }
}

function searchWord() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const flipCards = document.querySelectorAll('.flip-card');

    // Reset all cards to their original state
    flipCards.forEach(function (flipCard) {
        flipCard.style.display = 'block';
        flipCard.classList.remove('flipped');
    });

    // Filter and show only the cards matching the searched word, meaning, or synonyms
    flipCards.forEach(function (flipCard) {
        const word = flipCard.querySelector('.flip-card-front h1').textContent.trim().toLowerCase();
        const meaning = flipCard.querySelector('.flip-card-back p:nth-of-type(2)').textContent.trim().toLowerCase();
        const synonyms = flipCard.querySelector('.flip-card-back p:nth-of-type(3)').textContent.trim().toLowerCase();
        if (word.indexOf(searchInput) === -1 && meaning.indexOf(searchInput) === -1 && synonyms.indexOf(searchInput) === -1) {
            flipCard.style.display = 'none';
        }
    });
}


