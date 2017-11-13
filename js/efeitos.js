$(document).ready(function(){

				$("#logotipo").on("mouseover",function(){

				/*	console.log("Passou o mouse no logotipo!"); */
					$("#banner h1").addClass("efeito");

				}).on("mouseout",function(){

					$("#banner h1").removeClass("efeito");

				});

				$("#input-search").on("focus", function(){

					$("li.search").addClass("ativo");

				}).on("blur", function(){

					$("li.search").removeClass("ativo");

				});

				$(".owl-carousel").owlCarousel({
					loop:true,
					margin: 10,
					responsiveClass:true,
					responsive: {
						0:{
							margin: 0,
							items: 1,
							nav:false
						},
						600:{
							items: 2,
							nav:false
						},
						1000:{
							items: 4,
							nav:true,
							navText: ["Anterior","Próximo"],
							dots: false
						}
					}
				});

				var owl = $('.thumbnails');
				owl.owlCarousel();
				$('#btn-news-prev').click(function(){
				owl.trigger('prev.owl.carousel');
				});

				var owl = $('.thumbnails');
				$('#btn-news-next').click(function(){
				owl.trigger('next.owl.carousel');
				});

			});
