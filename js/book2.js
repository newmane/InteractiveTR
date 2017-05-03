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
	var hasFireTruck = text.includes("fire");
	var hasFly = text.includes("fly");
	var hasGarage = text.includes("garage");
	var hasHelicopter = text.includes("helicopter");
	var hasMotorbike = text.includes("motorbike");
	var hasPlane = text.includes("plane");
	var hasPoliceCar = text.includes("police car");
	var hasPetrolStation = text.includes("petrol station");
	var hasRide = text.includes("ride");
	var hasRocket = text.includes("rocket");
	var hasRoad = text.includes("road");
	var hasStation = text.includes("r station");
	var hasShip = text.includes("ship");
	var hasSiren = text.includes("siren");
	var hasTrain = text.includes("train");
	var hasTram = text.includes("tram");
	var hasTruck = text.includes("for truck");
	var hasTaxi = text.includes("taxi");
	var hasTractor= text.includes("tractor");
	var hasTrafficLight = text.includes("traffic light");
	var hasTransport = text.includes("transport");


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
	if(hasGarage == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Garage.mp3' type='audio/mpeg'></audio>";
	}
	if(hasHelicopter == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Helicopter.mp3' type='audio/mpeg'></audio>";
	}
	if(hasMotorbike == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Motorbike.mp3' type='audio/mpeg'></audio>";
	}
	if(hasPlane == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Plane.mp3' type='audio/mpeg'></audio>";
	}
	if(hasPoliceCar == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/PoliceCar.mp3' type='audio/mpeg'></audio>";
	}
	if(hasPetrolStation == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/PetrolStation.mp3' type='audio/mpeg'></audio>";
	}
	if(hasRide == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Ride.mp3' type='audio/mpeg'></audio>";
	}
	if(hasRocket == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Rocket.mp3' type='audio/mpeg'></audio>";
	}
	if(hasRoad== true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Road.mp3' type='audio/mpeg'></audio>";
	}
	if(hasStation == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Station.mp3' type='audio/mpeg'></audio>";
	}
	if(hasShip == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Ship.mp3' type='audio/mpeg'></audio>";
	}
	if(hasSiren == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Siren.mp3' type='audio/mpeg'></audio>";
	}
	if(hasTrain == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Train.mp3' type='audio/mpeg'></audio>";
	}
	if(hasTram == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Tram.mp3' type='audio/mpeg'></audio>";
	}
	if(hasTruck == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Truck.mp3' type='audio/mpeg'></audio>";
	}
	if(hasTaxi == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Taxi.mp3' type='audio/mpeg'></audio>";
	}
	if(hasTractor == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Tractor.mp3' type='audio/mpeg'></audio>";
	}
	if(hasTrafficLight == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/TrafficLight.mp3' type='audio/mpeg'></audio>";
	}
	if(hasTransport == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Transport.mp3' type='audio/mpeg'></audio>";
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
	  			document.getElementById('enddiv').innerHTML= "The End";
	  		}
		}
	})
}

function initial() {
	//Get rid of open book button and add back and next
	$("#openbook").addClass("hidden");
	$("#image").removeClass("hidden");
	$("#enddiv").addClass("hidden");
}

function getTRContent(data) {
	var imgurl = $(data).find('img.thr-pic').attr("src");
	imgurl = "http://tarheelreader.org/" + imgurl;
	var i = document.getElementById('img'); 
	i.src=imgurl;
	i.alt="Picture of Transportation"
	var text = $(data).find('p.thr-caption').text();
	document.getElementById('imgcaption').innerHTML=text;
	return(text);
}

function clearPage() {
	//Add open button and hide next and back
	$("#enddiv").removeClass("hidden");
	$("#image").addClass("hidden");
}
function movePage(){
	if(number <= 31) {
	 number++;
	 getData();
	}
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
       left();
    }
    else if (e.keyCode == '39') {
       // right arrow
       if(number <= 31) {
       	number++;
       	getData();
       } else {
       	window.location.replace("../html/game2.html");
       }
    }


}

function right() {
	if(number <= 31) {
       	number++;
       	getData();
       } else {
       	window.location.replace("../html/game2.html");
       }

}
function left() {
	console.log(number);
	if(number > 2) {
       	number--;
		getData();
	}
}
