var number = 1;
document.onkeydown = checkKey;

//Buttons
$(document).ready(function () {
	if(number == 1) {
		number++;
		getData();
	}
});

function TransportNoise(text) {
	var hasAmbulance = text.includes("ambulance");
	var hasAirport = text.includes("airport");
	var hasBike = text.includes(" bike");
	var hasBus = text.includes("bus");
	var hasBoat = text.includes("boat");
	var hasCar = text.includes("r car");
	var hasCrash = text.includes("crash");
	var hasDrive = text.includes("drive");
	var hasFireTruck = text.includes("fire truck");
	var hasFly = text.includes("fly");

	if(hasAmbulance == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Ambulance.mp3' type='audio/mpeg'></audio>";
	}
	if(hasAirport == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Airplane.mp3' type='audio/mpeg'></audio>";
	}
	if(hasBike == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Bike.mp3' type='audio/mpeg'></audio>";
	}
	if(hasBus == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Bus.mp3' type='audio/mpeg'></audio>";
	}
	if(hasBoat == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Boat.mp3' type='audio/mpeg'></audio>";
	}
	if(hasCar == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Car.mp3' type='audio/mpeg'></audio>";
	}
		if(hasCrash == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Crash.mp3' type='audio/mpeg'></audio>";
	}
	if(hasDrive == true) {
	document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Drive.mp3' type='audio/mpeg'></audio>";
}
if(hasFireTruck == true) {
document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/FireTruck.mp3' type='audio/mpeg'></audio>";
}
if(hasFly == true) {
document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Fly.mp3' type='audio/mpeg'></audio>";
}
}


function getData() {
	$.ajax({
		dataType: "html",
		url: "http://tarheelreader.org/2014/10/13/t-is-for-transport/" + number,
		crossDomain: true,
		error: function(xhr, textStatus, error){
      		console.log(xhr.statusText);
      		console.log(textStatus);
      		console.log(error);
  		},
  		success: function(data) {
  			if(number <= 31) {
	  			console.log("SUCCESS");

	  			if(number == 2 || number == 31) {
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
	  			TransportNoise(text);
	  		}
	  		else {
	  			//If last page then get rid of content and replace with the end
	  			clearPage();
	  			$("#openbook").addClass("hidden");
	  			document.getElementById('enddiv').innerHTML= "The End <button type=button><a href='game.html'>Play Game</a</button>";
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
    else if (e.keyCode == '39') {
       // right arrow
       if(number <= 31) {
       	number++;
       	getData();
       }
    }

}
