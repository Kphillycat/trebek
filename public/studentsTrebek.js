$(document).ready(function(){
	var $card = $(".card").not(".cat-card");
	
	$card.on("click", function(){	
		$card.not(this).addClass("disabled");
		$(this).not(".disabled").addClass("chosen");
		$(".up, .down").removeClass("disabled");
	});

});