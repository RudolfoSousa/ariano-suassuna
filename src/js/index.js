function openModal(){
	$(".player-video").on("click", function(){
		$(".modal").addClass("active");
		$(".modal").animate({
			opacity: "1"
		})
	});
}

function closeModal(){
	$(".close-modal").on("click", function(){
		$(".modal").animate({
			opacity: "0"
		}, 500, function(){
			$(".modal").removeClass("active");
		});
	})
}
$(document).ready(function(){
	openModal();
	closeModal();
})