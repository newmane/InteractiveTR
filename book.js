var number = 1;

//Buttons
$(document).ready(function () {
	$("#openbook").click( function() {
		number++;
		getData();
	});
	$('#back').click(function() {
		number--;
		getData();
	});
	$('#next').click(function() {
		number++;
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
	  			console.log("SUCCESS");

	  			if(number == 2) {
	  				initial();
	  			} else if(number < 3) {
	  				clearPage();
	  			}

	  			//Reset audio 
	  			document.getElementById('audio').innerHTML = "";

	  			//Get and set tarheel reader content
	  			var text = getTRContent(data);

	  			//Add animal noises
	  			animalNoise(text);
	  		}
	  		else {
	  			//If last page then get rid of content and replace with the end
	  			document.getElementById('container').innerHTML= "The End";
	  		}
		}
	})
}

function initial() {
	//Get rid of open book button and add back and next
	$("#back").removeClass("hidden");
	$("#next").removeClass("hidden");
	$("#openbook").addClass("hidden");
	$("#image").removeClass("hidden");
}

function getTRContent(data) {
	var imgurl = $(data).find('img.thr-pic').attr("src");
	imgurl = "http://tarheelreader.org/" + imgurl;
	document.getElementById('img').src=imgurl;
	var text = $(data).find('p.thr-caption').text();
	document.getElementById('imgcaption').innerHTML=text;
	return(text);
}

function clearPage() {
	//Add open button and hide next and back
	$("#back").addClass("hidden");
	$("#next").addClass("hidden");
	$("#openbook").removeClass("hidden");
	$("#image").addClass("hidden");
}
