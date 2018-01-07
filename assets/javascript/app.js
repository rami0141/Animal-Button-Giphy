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
            
            //you load the stil pictures first 
            animalImage.attr("src", results[i].images.fixed_height_still.url);
            animalImage.attr("data-state", "still");

            //assign a move and still attribute of the moving Giphy function
            animalImage.attr("move", results[i].images.fixed_height.url);
            animalImage.attr("still", results[i].images.fixed_height_still.url);
            animalImage.addClass("aimage");
            
            animalDiv.append(p);
            animalDiv.append(animalImage);

            $("#animals").prepend(animalDiv);

          }
        });
    };  

//Move and Still Giphy
  $(document).on("click", ".aimage", movingGiphy);
    function movingGiphy () {
      var state = $(this).attr("data-state");
     //this represents the object that is clicked
      if (state === "still") {
        //if the state of the image clicked is still, then the src attribute will change to the move attribute
        //.attr is a method to manipulate the value represented by each tag (manipulating or re-assign)
        $(this).attr("src", $(this).attr("move"));
        //The data-state has to be changed to "animate" so the state doesn't stay as "still" and the else part of the function works
        $(this). attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("still"));
        $(this).attr("data-state", "still");
      }
    }



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

})








