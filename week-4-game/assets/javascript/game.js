
// var declaration
	var yourWins= 0;
 	var yourLosses= 0;
 	var addition=0;
 	var total= Math.floor((Math.random() * 100) + 19);
 	var ega = Math.floor((Math.random() * 12) + 1);
 	var bu = Math.floor((Math.random() * 12) + 1);
 	var asu = Math.floor((Math.random() * 12) + 1);
 	var mtg = Math.floor((Math.random() * 12) + 1);


// updates and empties vars
 	var updateAddition = function () {
 		$('.addition').empty();
 		$('.addition').append(addition);

 		$('#yourWins').empty();
 		$('#yourWins').append(yourWins);

 		$('#yourLosses').empty();
 		$('#yourLosses').append(yourLosses);
 	}


 // restart game
 		var restart = function (){
 			addition = 0;
 			total = Math.floor((Math.random() * 100) + 19);

 			$('.total').empty();
 			$('.total').append(total);

 			var ega = Math.floor((Math.random() * 12) + 1);
 			var bu = Math.floor((Math.random() * 12) + 1);
 			var asu = Math.floor((Math.random() * 12) + 1);
 			var mtg = Math.floor((Math.random() * 12) + 1);
 			updateAddition();
 		}	

// determines where wins/losses are assigned
 	var game = function (){
 		if (addition == total) {
 			yourWins = yourWins + 1;
 			alert("You win");
 			restart();
 		} else if (addition > total) {
 			yourLosses = yourLosses + 1;
 			alert("You lost");
 			restart();
 		} else {
 			updateAddition();
 		}
 	}

//adds the assigned number to Your score
 	$('.total').append(total);
 	$('.addition').append(addition);

 	$( document ).ready(function() {
 		$('#ega').click(function(){
 			addition = addition + ega;
 		game();
 		})

 		$('#bu').click(function(){
 			addition = addition + bu;
 			game();
 		})

 		$('#asu').click(function(){
 			addition = addition + asu;
 			game();
 		})

 		$('#mtg').click(function(){
 			addition = addition + mtg;
 			game();
 		})
 	});

