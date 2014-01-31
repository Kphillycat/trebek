$(document).ready(function(){
	var $card = $(".card").not(".cat-card");
	var numClicksOnCard = 0;
	
	$card.on("click", function(){	
		$card.not(this).addClass("disabled");
		$(this).not(".disabled").addClass("chosen");
		$(".up, .down").removeClass("disabled");

		var $cardQuestion = $(".chosen"); //This is weird but it doesn't evaluate outside the function for the initial card click
		$cardQuestion.on("click", function(){	
			var $question = $(this).first().children().filter(".question");
			var $value = $(this).first().children().filter(".value");
			var $answer = $(this).first().children().filter(".answer");
			if(numClicksOnCard == 0){
				$value.text($question.text()); //set the value of value to the text in the question
				numClicksOnCard = 1; //I don't know how else to know when the card is activated with the question
			}else if(numClicksOnCard == 1){
				$value.text($answer.text()); 
				numClicksOnCard = 2;
			}else if(numClicksOnCard == 2){ 
				console.log(numClicksOnCard); //having trouble with this evaluating immediately after I click the card twice
				// $value.text("");
				// $(".chosen").addClass("played");
				numClicksOnCard = 3;
			}
		});
	});
	


});