var arr = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'M', 'P', 'R', 'S', 'T'];
var answers = [['ambulance', 'airplne'],['bike', 'bus', 'boat'],['car', 'crash'],['drive'],['firetruck', 'fly'],['garage'],['helicopter'],['motorbike'],['plane', 'policecar', 'petrolstation'],['ride', 'rocket', 'road'],['station', 'ship', 'siren'],['train', 'tram', 'truck', 'taxi', 'tractor', 'trafficlight', 'transport']];
document.onkeydown = checkKey;
var type;
var randnumber;
var back = false; 
var backnum = 0; 

var unused = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var used = [];

$(document).ready(function () {
	randnumber = pickLetter();
	if(unused.length != 0) {
		var page = pickPage();
		getData(page);
	}
});

function pickLetter() {
	var rand = Math.round(Math.random()*12);
	document.getElementById('letter').innerHTML = arr[rand] + " is for ...?";
	return(rand);
}
function pickPage() {
	var index = Math.floor(Math.random()*unused.length);
	var number = unused[index];
	used.push(number);
	unused.splice(index, 1);
	return(number);
}

function getTRContent(data) {
	var imgurl = $(data).find('img.thr-pic').attr("src");
	imgurl = "http://tarheelreader.org/" + imgurl;
	document.getElementById('img').src=imgurl;
	var text = $(data).find('p.thr-caption').text();
	return(text);
}

function getData(page) {

	$.ajax({
		dataType: "html",
		url: "http://tarheelreader.org/2014/10/13/t-is-for-transport/" + page,
		crossDomain: true,
		error: function(xhr, textStatus, error){
      		console.log(xhr.statusText);
      		console.log(textStatus);
      		console.log(error);
  		},
  		success: function(data) {
  			console.log("SUCCESS");

  			//Reset audio
  			document.getElementById('audio').innerHTML = "";

  			//Get and set tarheel reader content
  			var text = getTRContent(data);

  			//Add animal noises
  			type = TransportNoise(text);
		}
	})
}

function getTRContent(data) {
	var imgurl = $(data).find('img.thr-pic').attr("src");
	imgurl = "http://tarheelreader.org/" + imgurl;
	document.getElementById('img').src=imgurl;
	var text = $(data).find('p.thr-caption').text();
	//document.getElementById('imgcaption').innerHTML=text;
	return(text);
}

function TransportNoise(text) {
	var name;
	var hasAmbulance = text.includes("ambulance");
	var hasAirport = text.includes("airport");
	var hasBike = text.includes("bike");
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
		name= "ambulance";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Ambulance.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasAirport == true) {
		name = "airplane";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Airplane.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasBike == true) {
		name = "bike";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Bike.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasBus == true) {
		name = "bus";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Bus.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasBoat == true) {
		name = "boat";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Boat.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasCar == true) {
		name = "car";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Car.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasCrash == true) {
		name = "crash";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Crash.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasDrive == true) {
		name = "drive";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Drive.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasFireTruck == true) {
		name = "firetruck";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/FireTruck.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasFly == true) {
		name = "fly";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Fly.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasGarage == true) {
		name = "garage";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Garage.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasHelicopter == true) {
		name = "helicopter";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Helicopter.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasMotorbike == true) {
		name = "motorbike"
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Motorbike.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasPlane == true) {
		name = "plane";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Plane.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasPoliceCar == true) {
		name = "policecar";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/PoliceCar.mp3' type='audio/mpeg'></audio>";
		return(name);
	}
	if(hasPetrolStation == true) {
		name = "petrolstation";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/PetrolStation.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasRide == true) {
		name = "ride";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Ride.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasRocket == true) {
		name = "rocket";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Rocket.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasRoad== true) {
		name = "road";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Road.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasStation == true) {
		name = "station";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Station.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasShip == true) {
		name = "ship";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Ship.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasSiren == true) {
		name = "siren";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Siren.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTrain == true) {
		name = "train";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Train.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTram == true) {
		name = "tram";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Tram.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTruck == true) {
		name = "truck";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Truck.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTaxi == true) {
		name = "taxi";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Taxi.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTractor == true) {
		name = "tractor";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Tractor.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTrafficLight == true) {
		name = "trafficlight";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/TrafficLight.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTransport == true) {
		name = "transport";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Transport.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        checkAnswer();

    }
    else if (e.keyCode == '40') {
        // down arrow
        if(document.getElementById('big').innerHTML == 'CONGRATS!') { 
			location.reload();
        }
        

    }
    else if (e.keyCode == '37') {
       // left arrow
       if(used.length > 0 && back == true && backnum != 0) {
       	backnum--;
       	getData(used[backnum]);	
       } if(back == false) {
       	back = true;
       	backnum = used.length- 2;
       	getData(used[backnum]);	
       }
       
    }
    else if (e.keyCode == '39') {
       // right arrow
       if(unused.length != 0 && back == false) {
		var page = pickPage();
		getData(page);
	} if(back == true) {
		backnum++;
		if(backnum == used.length) {
			back = false;
		}
       	getData(used[backnum]);
	}
       
    }
}

function checkAnswer() {
	for(i=0; i< answers[randnumber].length; i++) {
		if(answers[randnumber][i] == type) {
			document.getElementById('container').innerHTML = "<p id='big'>CONGRATS!</p><h1>Press down to play again</h1>";
			return;
		}
	}
	alert("sorry");

}