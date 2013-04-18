function disableDraggingFor(element) {
  element.draggable = false;
  element.onmousedown = function(event) {
                event.preventDefault();
                return false;
              };
}
$(document).ready(function() {
	disableDraggingFor(document.getElementById("email"));
	$('.tab').hover(function(){
	  	$(this).stop().animate({
			width: '76px',
			right: '-4px',
			opacity: '1'
		  }, 200, function() {

		  });
	}, function(){
	  	$(this).stop().animate({
			width: '55px',
			right: '-2px',
			opacity: '0.97'
		  }, 200, function() {
		  });
	});
	$('#email').hover(function(){
	  	$(this).stop().animate({
			top: '0px'
		  }, 200, function() {
		    // Animation complete.
		  });
	}, function(){
	  	$(this).stop().animate({
			top: '-10px'
		  }, 200, function() {
		    // Animation complete.
		  });
	});
});


 
