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


	if(hasGorilla == true) {
		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='audio/Gorilla.mp3' type='audio/mpeg'></audio>";
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
	  			animalNoise(text);
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
