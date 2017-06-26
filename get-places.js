$(document).ready(function() {
   		var vacIMG = ["https://s-media-cache-ak0.pinimg.com/736x/10/0e/97/100e971e56e3c3e69dd909edc2cadfc1.jpg", "http://media.cntraveler.com/photos/53da97276dec627b149f4ea4/master/pass/round-hill-hotel-and-villas-montego-bay-montego-jamaica-102002-1.jpg", "https://www.getawaytoday.com/image/3759/11683/hawaii-2.jpg", "https://mw2.google.com/mw-panoramio/photos/medium/104398672.jpg"];
  		var vacNames = ["Cozumel", "Round Hill, Jamaica", "Hawaii", "Fort Benning, Georgia"];

    // $('#see-places').submit(function(e) {
    // e.preventDefault();
    // $(this).hide(1000);
    // };

 		$('#see-places').click(populatePlaces);
 		function populatePlaces() {
    var vNames = "";
    for(var i = 0; i <vacIMG.length; i++) {
      vNames += '<div class="output-places"><div class="row"><div class="col-md-4"><h2>' + vacNames[i] + "</h2><img src=" + vacIMG[i] + '/></div></div></div>';
    }
       $("#output-places").html(vNames);
}


});


//  <div class="row">
//         <div class="col-md-4"></div>
 
