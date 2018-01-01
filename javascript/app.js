// List of animals
var animals = ["dog", "cat", "bird", "fish", "lion", "wolf", "snakes", "turtle", "fox", "lizard", "elephant", 
"chicken", "cow", "pig"];

//Display Giphy
function showGiphy() {
	var animal = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=WhkiKuWXUxXZ3GTPlYBDiyRjqFagaPpt&tag=&rating=G";

	$.ajax({
		url: queryURL,
		method: "GET"
	}) 
}



// Creating Buttons

function creatingButtons() {
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