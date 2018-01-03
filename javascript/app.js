// List of animals
var animals = ["dog", "cat", "bird", "fish", "lion", "wolf", "snakes", "turtle", "fox", "lizard", "elephant", 
"chicken", "cow", "pig"];


//Giphy

 $("#animalButtons").on("click", function() {
 	$("#animals").empty();
      // Grabbing and storing the data-animal property value from the button
      var species = $(this).attr("data-name");
 
      // Constructing a queryURL using the animal name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        species + "&api_key=WhkiKuWXUxXZ3GTPlYBDiyRjqFagaPpt&q=animals&limit=10&offset=0&rating=G&lang=en";

      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var animalDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var animalImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(animalImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#animals").prepend(animalDiv);
          }
        });
    });	





// Creating Buttons

function creatingButtons() {
	$("#animalButtons").empty();
	for (var i = 0; i < animals.length; i++) {

		var a = $("<button>");

		a.addClass("animal");

		a.attr("data-name", animals[i]);

		a.text(animals[i]);

		$("#animalButtons").append(a);
	}
}


$("#addAnimal").on("click", function(event) {
	event.preventDefault();

	var animal = $("#animal-input").val().trim();

	animals.push(animal);

	creatingButtons();

});

	creatingButtons();