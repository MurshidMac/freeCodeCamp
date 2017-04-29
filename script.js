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

// Adding CSS Custom Colour Using the JQuery
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
    $("#target1").css("color", "red");			// CSS function in the document to add custom colour red
  });
</script>

// Disabling an element by jQuery
// there can 
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red").prop("disabled",true);	// This one way to do so
    //$("target1").prop("disabled", true);		// Properties function to disable an element in the button
  });
</script>
