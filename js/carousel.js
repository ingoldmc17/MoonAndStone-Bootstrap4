$(document).ready( function() {


/*$('.carousel').bcSwipe({ threshold: 50 });*/

	$("#thumbnail1").click( 
	  function() {
		  $("#carousel-item-1").addClass("active");
		  $("#carousel-item-2").removeClass("active");
		  $("#carousel-item-3").removeClass("active");
		  $("#carousel-item-4").removeClass("active");
		  $("#carousel-item-5").removeClass("active");	  
	  }
	);

	$("#thumbnail2").click( 
	  function() {
		  $("#carousel-item-2").addClass("active");
		  $("#carousel-item-1").removeClass("active");
		  $("#carousel-item-3").removeClass("active");
		  $("#carousel-item-4").removeClass("active");
		  $("#carousel-item-5").removeClass("active");	  
	  }
	);	
	
	$("#thumbnail3").click( 
	  function() {
		  $("#carousel-item-3").addClass("active");
		  $("#carousel-item-1").removeClass("active");
		  $("#carousel-item-2").removeClass("active");
		  $("#carousel-item-4").removeClass("active");
		  $("#carousel-item-5").removeClass("active");	  
	  }
	);

	$("#thumbnail4").click( 
	  function() {
		  $("#carousel-item-4").addClass("active");
		  $("#carousel-item-1").removeClass("active");
		  $("#carousel-item-2").removeClass("active");
		  $("#carousel-item-3").removeClass("active");
		  $("#carousel-item-5").removeClass("active");	  
	  }
	);

	$("#thumbnail5").click( 
	  function() {
		  $("#carousel-item-5").addClass("active");
		  $("#carousel-item-1").removeClass("active");
		  $("#carousel-item-2").removeClass("active");
		  $("#carousel-item-3").removeClass("active");
		  $("#carousel-item-4").removeClass("active");	  
	  }
	);	
  
});