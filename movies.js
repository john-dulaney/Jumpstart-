$(document).ready(function() {
//step 1-4 various housekeeping
//step 5 create array
var myFavMovies = ["Casino", "American Psycho", "Inglorious Basterds", "Step Brothers", "Animal House"];
});

//step 6 function + loop of array
function movieLoop() {
for(var i = 0; i < movies.length; i++);}
//$('body').append('<div class="output-movies">' + myFavMovies[i] + '</div>');

function getMovieData() {
  getMovieData(myFavMovies[i]);}

//step 7 function for AJAX call
function ayyJax() {
	var movieVariable = "Casino"  ;
  $.ajax("https://api.themoviedb.org/3/search/movie?api_key=ec2f1e210a4d2150e069b9b93b4a4c12=en-US&query=" + movieVariable);
}
//step 8 .done of AJAX
   $.done(function(movies) {
   var oneMovieBack = movies.results[0];
   console.log(oneMovieBack);
   });

 //step 9  results of .done
 function printMovieData() {
    printMovieData(ayyJax);
 }
 //step 10 Print cards - where the mess happens [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅] (implying everything above wasnt a complete mess)
var htmlMovie = "";
for(var x =0; x < oneMovieBack.length; x++) {
      htmlMovie += "<div class='output-movies'><h2>" + oneMovieBack[x].original_title + "</h2><img src='https://image.tmdb.org/t/p/original" + oneMovieBack[x].poster_path + "' /></div>";
    }
    $("#output-movies").html(htmlMovie);
		$.fail(function(error) {
    $("#output-movies").html(error.responseText);


});
