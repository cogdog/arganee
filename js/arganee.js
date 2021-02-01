jQuery(document).ready(function(){

	function update_wisdom( koans ) {
		// update the message div with a random json result array from input
		// a posts get query from WP API
		
		//give us a random array item
		var wisdom = koans[Math.floor(Math.random()*koans.length)];

		jQuery('#mysterymsg').html(wisdom.content.rendered);
	}
	

	// Let's get some posts!
	jQuery.ajax({
	  url:'https://arganee.world/wp-json/wp/v2/posts/?per_page=25',
	  jsonp:"cb",
	  dataType:'json',
	  success: function(data) {

		// save the results in array we can use later
		quotes = data;
		
		// go to work!
		update_wisdom(quotes);
		
		// update every so often
		setInterval(update_wisdom, 16000, quotes);

				
		} //success
	  }); //ajax
	  
});//ready
