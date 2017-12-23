
$(".hidden-tags").css("display", "none");

$( document ).ready( function() {
	
	/*
	var firstProductColumnHeight = $("#product-column").outerHeight();
	$("#nav-column").css("height", firstProductColumnHeight + "");
	*/

	
	$.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};
	
	$(".product").hover (
		function() {
			$(this).find("h6.hidden-tags").css("display", "inline");
		}, function() {
			$(this).find("h6.hidden-tags").css("display", "none");
		}
	);
	
	$("#all-btn").click (
	  function() {
		  $(this).removeClass("btn-link");
		  $(this).addClass("btn-primary");
		  $("#chokers-btn").removeClass("btn-primary");
		  $("#chokers-btn").addClass("btn-link");
		  $("#necklaces-btn").removeClass("btn-primary");
		  $("#necklaces-btn").addClass("btn-link");		
		  $("#bracelets-btn").removeClass("btn-primary");
		  $("#bracelets-btn").addClass("btn-link");		  
	  }
	);
	
	$("#chokers-btn").click (
	  function() {
		  $(this).removeClass("btn-link");
		  $(this).addClass("btn-primary");
		  $("#all-btn").removeClass("btn-primary");
		  $("#all-btn").addClass("btn-link");
		  $("#necklaces-btn").removeClass("btn-primary");
		  $("#necklaces-btn").addClass("btn-link");		
		  $("#bracelets-btn").removeClass("btn-primary");
		  $("#bracelets-btn").addClass("btn-link");		  
	  }
	);

	$("#necklaces-btn").click (
	  function() {
		  $(this).removeClass("btn-link");
		  $(this).addClass("btn-primary");
		  $("#chokers-btn").removeClass("btn-primary");
		  $("#chokers-btn").addClass("btn-link");
		  $("#all-btn").removeClass("btn-primary");
		  $("#all-btn").addClass("btn-link");		
		  $("#bracelets-btn").removeClass("btn-primary");
		  $("#bracelets-btn").addClass("btn-link");		  
	  }
	);

	
	$("#bracelets-btn").click (
	  function() {
  		  $(this).removeClass("btn-link");
		  $(this).addClass("btn-primary");
		  $("#chokers-btn").removeClass("btn-primary");
		  $("#chokers-btn").addClass("btn-link");
		  $("#necklaces-btn").removeClass("btn-primary");
		  $("#necklaces-btn").addClass("btn-link");		
		  $("#all-btn").removeClass("btn-primary");
		  $("#all-btn").addClass("btn-link");		  
	  }
	);	
	
	
	/*
	
	var offsetTopOfProductColumn = $("#product-column").offset().top;
	
	$("#nav-column").css("position", "sticky");
	$("#nav-column").css("top", offsetTopOfProductColumn + "");
	
	


	$(".dim-on-hover").hover(
		function() {
			$(this).css("background-color", "#000000");
			$(this).css("opacity", ".5");
		}, function() {
			$(this).css("background-color", "#FFFFFF");
			$(this).css("opacity", "1.0");
		}
	);
	
	
	
	$(".floating-nav").css("display", "none");
	
	
	$(window).on("resize scroll", function() {
	 if ( $("#product-container").isInViewport() ) {
	   $(".floating-nav").css("display", "inline");
	   $(".floating-nav").css("position", "fixed");
	   var firstRowBottom = $(window).height - $("#first-row").outerHeight();
	   $(".floating-nav").css("top", "200px");
	 } else {
		 $(".floating-nav").css("display", "none");
	 }
	});
	
	
	if (muted-text.visible()) {
		
		navbar.position = fixed
		nabvar.offset().top = productPhoto.offset().top until
		productPhoto.offset().top < minimunOffset()
		
	}
	
	$(window).on("resize scroll", function() {
		
		console.log($("#top-price").offset().top);
		console.log($("#top-price").position());

		
		if ( $("#top-price").isInViewport() ) {
			
			var topPriceTextTopOffset = $("#top-price").offset();
			var topPriceTextPosition = $("#top-price").position();
			$(".floating-nav").css("position", "fixed");
			$(".floating-nav").css("top", topPriceTextTopOffset + "");
			$(".floating-nav").css("display", "inline");
		} else {
			$(".floating-nav").css("display", "none");
		}
	}); */






});