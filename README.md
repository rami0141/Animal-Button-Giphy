# Animal-Button-Giphy

When the user clicks on a button, 10 static, non-animated gif images from the GIPHY will show on the page

When the user clicks one of the still GIPHY images, the gif will animate. If the user clicks the gif again, it should stop playing.

Under every gif, its rating (PG, G, so on).

The user can also create new buttons with their animal of choice.


$(document).on('click', ".aimage", movingGifs);

       
            animalImage.attr("src", results[i].images.fixed_height_still.url);
            animalImage.attr("data", results[i].images.fixed_height.url);
            animalImage.addClass("aimage");
            animalImage.attr("data-state", results[i]);


            //animalImage.attr("id", i);
           
            animalDiv.append(p);
            animalDiv.append(animalImage);

            $("#animals").prepend(animalDiv);

          }
        });
    };  

// Pause and Play Giphy

$(document).on('click', ".aimage", movingGifs);

function movingGifs () {
   $(".aimage").on("click", function() {
    if (state = "animate") {
   
      $(this).attr("src", $(this).attr("data"));
      $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("src"));
    $(this).attr("data-state", "still");
    }
  });