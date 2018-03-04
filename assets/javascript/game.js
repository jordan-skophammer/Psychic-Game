//varibles defined
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 9;
var guessArray = [];

//random letter is created and displayed in the console.
var winningLetter = String.fromCharCode(
    Math.floor(Math.random() * 26) + 97
  );
console.log(winningLetter);

//function starts once key is pressed.
document.onkeyup = function(event) {
	
	var playerinput = String.fromCharCode(event.which).toLowerCase();//player's string coverted to lower case.

	//compare input to element in array, alerts if string is already in array
	if(guessArray.indexOf(playerinput) > -1) {
		alert('Letter already used, please pick another!');
		guessArray.pop();
		guessCounter++;
	}

	guessArray.push(playerinput);//player's string moved to array

	document.getElementById('Guesses').innerHTML = guessArray;//displays player's guesses

	
	//alerts winner, generates new random letter and clears array
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
		document.getElementById('Left').innerHTML = guessCounter;//subtracts guesses and displays
	}
	//alerts loser, generates new random letter and clears array
	if (guessCounter < 1 ) {
		lossCounter++;
		document.getElementById('Losses').innerHTML = lossCounter;
		guessCounter = 9;
		guessArray.length = [];
		if (!alert('LOSER!!! The correct answer is ' + winningLetter)){
			document.getElementById('Outcome').innerHTML = '';
			document.getElementById('Guesses').innerHTML = '';
			winningLetter = String.fromCharCode(
			    Math.floor(Math.random() * 26) + 97
			);
			console.log(winningLetter);
		}
	}
}


	
