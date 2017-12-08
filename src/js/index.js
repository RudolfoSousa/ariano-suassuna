var Index = {

	// Abre modal
	openModal: function(){
		$(".player-video").on("click", function(){
		$(".modal").addClass("active");
		$(".modal").animate({
			opacity: "1"
			})
		});	
	},

	// Fecha modal

	closeModal: function(){
		$(".close-modal").on("click", function(){
			$(".modal").animate({
				opacity: "0"
			}, 500, function(){
				$(".modal").removeClass("active");
			})
		});	
	},

	// abre menu

	openMenu:function(){
		$(".menu-open").on("click", function(){
			$('html').addClass('active');
		});
	},

	// fecha menu

	closeMenu:function(){
		$(".close-menu").on('click', function(){
			$('html').removeClass('active');
		})	
	},

	// Scroll da pagina

	scrollWindow: function(){
		$(".menu-item a").click(function(event){
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000, function(){
			$(this).removeClass('active');
		});
	});
	}, 

	init:function(){
		this.scrollWindow();
		this.closeModal();
		this.openModal();
		this.openMenu();
		this.closeMenu();
	}
}

// Fim objeto

$(document).ready(function(){
	Index.init();
})