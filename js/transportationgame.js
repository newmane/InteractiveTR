var arr = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'M', 'P', 'R', 'S', 'T'];
var answers = [['Ambulance', 'Airplne'],['Bike', 'Bus', 'Boat'],['Car', 'Crash'],['Drive'],['Fire Truck', 'Fly'],['Garage'],['Helicopter'],['Motorbike'],['Plane', 'Police Car', 'Petrol Station'],['Ride', 'Rocket', 'Road'],['Station', 'Ship', 'Siren'],['Train', 'Tram', 'Truck', 'Taxi', 'Tractor', 'Traffic Light', 'Transport']];
document.onkeydown = checkKey;
var type;
var randnumber;
var back = false; 
var backnum = 0; 

var unused = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var used = [];

$(document).ready(function () {
	randnumber = pickLetter();
	if(unused.length != 0) {
		var page = pickPage();
		getData(page);
	}
});

function pickLetter() {
	var rand = Math.floor(Math.random()*arr.length);
	document.getElementById('letter').innerHTML = '<h1>' + arr[rand] + " is for ...?</p>";
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
		name= "Ambulance";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Ambulance.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasAirport == true) {
		name = "Airplane";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Airplane.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasBike == true) {
		name = "Bike";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Bike.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasBus == true) {
		name = "Bus";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Bus.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasBoat == true) {
		name = "Boat";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Boat.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasCar == true) {
		name = "Car";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Car.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasCrash == true) {
		name = "Crash";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Crash.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasDrive == true) {
		name = "Drive";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Drive.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasFireTruck == true) {
		name = "Fire Truck";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/FireTruck.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasFly == true) {
		name = "Fly";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Fly.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasGarage == true) {
		name = "Garage";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Garage.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasHelicopter == true) {
		name = "Helicopter";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Helicopter.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasMotorbike == true) {
		name = "Motorbike"
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Motorbike.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasPlane == true) {
		name = "Plane";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Plane.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasPoliceCar == true) {
		name = "Police Car";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/PoliceCar.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasPetrolStation == true) {
		name = "Petrol Station";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/PetrolStation.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasRide == true) {
		name = "Ride";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Ride.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasRocket == true) {
		name = "Rocket";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Rocket.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasRoad== true) {
		name = "Road";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Road.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasStation == true) {
		name = "Station";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Station.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasShip == true) {
		name = "Ship";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Ship.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasSiren == true) {
		name = "Siren";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Siren.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTrain == true) {
		name = "Train";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Train.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTram == true) {
		name = "Tram";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Tram.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTruck == true) {
		name = "Truck";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Truck.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTaxi == true) {
		name = "Taxi";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Taxi.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTractor == true) {
		name = "Tractor";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/Tractor.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTrafficLight == true) {
		name = "Traffic Light";
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/TrafficLight.mp3' type='audio/mpeg'></audio>";
		document.getElementById('imgcaption').innerHTML=name;
		return(name);
	}
	if(hasTransport == true) {
		name = "Transport";
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

function left() {
	if(used.length > 0 && back == true && backnum != 0) {
       	backnum--;
       	getData(used[backnum]);	
       } if(back == false) {
       	back = true;
       	backnum = used.length- 2;
       	getData(used[backnum]);	
       }
}

function right() {
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

function checkAnswer() {
	for(i=0; i< answers[randnumber].length; i++) {
		if(answers[randnumber][i] == type) {
			window.location.replace("../html/congrats.html");
			return;
		}
	}
	alert("sorry");

}