// List of animals
var animals = ["dog", "cat", "bird", "fish", "lion", "wolf", "snakes", "turtle", "fox", "lizard", "elephant", 
"chicken", "cow", "pig"];


// Delegated event
$(document).on('click', ".animal", giphy); 

creatingButtons();


// Giphy
 function giphy() {
    $("#animals").empty();

      // Grabbing and storing the data-animal property value from the button
      var species = $(this).attr("data-name");

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        species + "&api_key=WhkiKuWXUxXZ3GTPlYBDiyRjqFagaPpt&limit=10&offset=0&rating=G&lang=en";

      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })

        .done(function(response) {
          
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            var animalDiv = $("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var animalImage = $("<img>");
            
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalImage.addClass("aimage");

            //animalImage.attr("id", i);
           
            animalDiv.append(p);
            animalDiv.append(animalImage);

            $("#animals").prepend(animalDiv);

          }
        });
    };	



// Creating Buttons

function creatingButtons() {
	$(".animalButtons").empty();
	for (var i = 0; i < animals.length; i++) {

		var a = $("<button>");

		a.addClass("animal");

		a.attr("data-name", animals[i]);

		a.text(animals[i]);

		$(".animalButtons").append(a);
	}

}

$("#addAnimal").on("click", function(event) {
	event.preventDefault();

	var animal = $("#animal-input").val().trim();

	animals.push(animal);

	creatingButtons();
  $("#animals").empty();

});



// Pause and Play Giphy

$(document).on('mouseover', ".aimage", function (){
  $(".aimage").mouseover(function(){
    $(this).attr("src", "https://media2.giphy.com/media/jSqZDS0LhmHwk/200_s.gif");
  });
});
	creatingButtons();