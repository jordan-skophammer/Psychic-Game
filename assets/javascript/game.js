var winCounter = 0;
var lossCounter = 0;
var guessCounter = 9;

var winningLetter = String.fromCharCode(
    Math.floor(Math.random() * 26) + 97
  );

console.log(winningLetter);

var guessArray = [];

document.onkeyup = function(event) {
	
	var playerinput = String.fromCharCode(event.which).toLowerCase();

	guessArray.push(playerinput);

	document.getElementById('Guesses').innerHTML = guessArray;

	if (guessArray.indexOf(winningLetter) > -1) {
		winCounter++;
		document.getElementById('Wins').innerHTML = winCounter;
		guessCounter = 9;
		guessArray.length = [];
		if (!alert('WINNER!!!')){
			document.getElementById('Outcome').innerHTML = '';
			document.getElementById('Guesses').innerHTML = '';
			winningLetter = String.fromCharCode(
			    Math.floor(Math.random() * 26) + 97
			);
			console.log(winningLetter);
		}
	} else {
		guessCounter--;
		document.getElementById('Left').innerHTML = guessCounter;
	}

	if (guessCounter < 1 ) {
		lossCounter++;
		document.getElementById('Losses').innerHTML = lossCounter;
		guessCounter = 9;
		guessArray.length = [];
		if (!alert('LOSER!!!')){
			document.getElementById('Outcome').innerHTML = '';
			document.getElementById('Guesses').innerHTML = '';
			winningLetter = String.fromCharCode(
			    Math.floor(Math.random() * 26) + 97
			);
			console.log(winningLetter);
		}
	}
}


	
