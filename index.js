let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

// player object
let player = {
	name: "xamdp",
	chips: 145
}

let playerEl = document.getElementById('player-el') // player placeholder
playerEl.textContent = player.name + ": $" + player.chips

let message = "";
let hasBlackJack = false;
let isAlive = false;

let cards = []; // cards array
let sum = 0;

console.log(cards);

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	}
	return randomNumber;
}

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards.push(firstCard, secondCard);
	// sumEl.textContent += "Cards: " + cards[0] + " " + cards[1]
	sum = firstCard + secondCard;
	console.log(cards);

	renderGame();
}

function renderGame() {
	cardsEl.textContent = "Cards: ";
	for (let card = 0; card < cards.length; card++) {
		cardsEl.textContent += cards[card] + " ";
	}

	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}

	messageEl.textContent = message;
}

function newCard() {
	if (isAlive && hasBlackJack === false) {
		let card = getRandomCard();
		console.log(getRandomCard());
		sum += card;
		cards.push(card);
		renderGame();
	}
}
