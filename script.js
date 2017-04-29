// Custom JQuery Functions 
// Animation Adding a Class 
<script>
  $(document).ready(function() {
	// accessing the button element from jquery	
	$("button").addClass("animated shake")	// this is a custom animation from css class
	$("#target").addClass("animated fadeOut")	// this s custom animation funtion to fadeout an ID from a div or anyother tags	
  });
</script>

// Animation Removing a Class
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default")	// this is a special class to remove files from the elements
    
    
  });
</script>

