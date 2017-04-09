var number = 2;
$(document).ready(function () {
	$("#openbook").click( function() {
		getData();
	});
	$('#back').click(function() {
		number = number - 2;
		getData();
	});
});
function animalNoise(text) {
	var hasGorilla = text.includes("Gorilla");
	var hasTiger = text.includes("Tiger");
	var hasPeacock = text.includes("Peacock");
	var hasFlamingo	= text.includes("Flamingo");

	if(hasGorilla == true) {
		document.getElementById('audio').innerHTML = "<audio controls autoplay><source src='audio/Gorilla.mp3' type='audio/mpeg'></audio>";
	} else if(hasTiger == true) {
		document.getElementById('audio').innerHTML = "<audio controls autoplay><source src='audio/Tiger.mp3' type='audio/mpeg'></audio>";
	} else if(hasPeacock == true) {
		document.getElementById('audio').innerHTML = "<audio controls autoplay><source src='audio/Peacock.mp3' type='audio/mpeg'></audio>";
	} else if(hasFlamingo == true) {
		document.getElementById('audio').innerHTML = "<audio controls autoplay><source src='http://www.wildlifelands.com/wxs/flamingo.mp3' type='audio/mpeg'></audio>";
	}
}
function getData() {
	$.ajax({
		dataType: "html",
		url: "http://tarheelreader.org/2015/03/30/at-the-zoo-10/" + number,
		crossDomain: true,
		error: function(xhr, textStatus, error){
      		console.log(xhr.statusText);
      		console.log(textStatus);
      		console.log(error);
  		},
  		success: function(data) {
  			if(number <= 12) {
	  			number++;
	  			console.log("SUCCESS");
	  			if(number == 3) {
	  				$("#back").removeClass("hidden");
	  			}
	  			document.getElementById('audio').innerHTML = "";
	  			var imgurl = $(data).find('img.thr-pic').attr("src");
	  			imgurl = "http://tarheelreader.org/" + imgurl;
	  			document.getElementById('img').src=imgurl;
	  			var text = $(data).find('p.thr-caption').text();
	  			document.getElementById('text').innerHTML=text;
	  			animalNoise(text);
	  			$("#openbook").addClass("next");
	  			document.getElementById('openbook').innerHTML="next";
	  		}
	  		else {
	  			document.getElementById('container').innerHTML= "The End";

	  		}	

		}
	})
}
