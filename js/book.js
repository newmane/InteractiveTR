var number = 1;
document.onkeydown = checkKey;

//Buttons
$(document).ready(function () {
	if(number == 1) {
		number++;
		getData();
	}
});

function animalNoise(text) {
	var hasGorilla = text.includes("Gorilla");
	var hasTiger = text.includes("Tiger");
	var hasPeacock = text.includes("Peacock");
	var hasFlamingo	= text.includes("Flamingo");
	var hasGiraffe = text.includes("Giraffe");
	var hasPolarBear = text.includes("Polar");
	var hasBird = text.includes("Birds");
	var hasElephant=text.includes("Elephants");
	var hasCamel=text.includes("Camels");
	var hasAnimals=text.includes("animals");

	if(hasGorilla == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Gorilla.mp3' type='audio/mpeg'></audio>";
	} else if(hasTiger == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Tiger.mp3' type='audio/mpeg'></audio>";
	} else if(hasPeacock == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Peacock.mp3' type='audio/mpeg'></audio>";
	} else if(hasFlamingo == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='http://www.wildlifelands.com/wxs/flamingo.mp3' type='audio/mpeg'></audio>";
	} else if(hasGiraffe == true) {
		document.getElementById('audio').innerHTML = "<audio id ='audiotag' controls autoplay><source src='../audio/Giraffe.mp3' type='audio/mpeg'></audio>";
	} else if(hasPolarBear == true) {
		document.getElementById('audio').innerHTML = "<audio id ='audiotag' controls autoplay><source src='../audio/PolarBear.mp3' type='audio/mpeg'></audio>";
	} else if(hasBird == true) {
		document.getElementById('audio').innerHTML = "<audio id ='audiotag' controls autoplay><source src='../audio/Parrot.mp3' type='audio/mpeg'></audio>";
	} else if(hasElephant == true) {
		document.getElementById('audio').innerHTML = "<audio id ='audiotag' controls autoplay><source src='../audio/Elephant.mp3' type='audio/mpeg'></audio>";
	} else if(hasCamel == true) {
		document.getElementById('audio').innerHTML = "<audio id ='audiotag' controls autoplay><source src='../audio/Camel.mp3' type='audio/mpeg'></audio>";
	} else if(hasAnimals == true) {
		document.getElementById('audio').innerHTML = "<audio id ='audiotag' controls autoplay><source src='../audio/Zoo.mp3' type='audio/mpeg'></audio>";
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

	  			if(number == 2 || number == 12) {
	  				initial();
	  				document.getElementById('enddiv').innerHTML= "";
	  			}

	  			if(number == 2) {
	  				$("#imgcaption").addClass("bold");
	  			} else {
	  				$("#imgcaption").removeClass("bold");
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
	  			clearPage();
	  			$("#openbook").addClass("hidden");
	  			document.getElementById('enddiv').innerHTML= "The End";
	  		}
		}
	})
}

function initial() {
	//Get rid of open book button and add back and next
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
	$("#openbook").removeClass("hidden");
	$("#image").addClass("hidden");
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        document.getElementById('audiotag').currentTime=0;
        document.getElementById('audiotag').play();

    }
    else if (e.keyCode == '40') {
        // down arrow
        var audio = document.getElementById('audiotag');
        if(audio.paused) {
        	audio.play();
        } else {
        	audio.pause();
        }

    }
    else if (e.keyCode == '37') {
       // left arrow
       if(number > 2) {
       	number--;
		getData();
	   }
    }
    else if (e.keyCode == '39' || e.keyCode == '32') {
       // right arrow
       if(number <= 12) {
       	number++;
       	getData();
       } else {
       	window.location.replace("../html/game.html");
       }
    }

}

function right() {
	if(number <= 12) {
       	number++;
       	getData();
       } else {
       	window.location.replace("../html/game.html");
       }
}
function left() {
	if(number > 2) {
       	number--;
		getData();
	   }
}
