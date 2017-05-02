var number = 0;
document.onkeydown = checkKey;
var images = ['america', 'france', 'portugal', 'spain', 'china', 'italian', 'russian'];
var text = ['Hello', 'Bonjour', 'Olá', 'Hola', '你好', 'Ciao', 'Здравствуйте'];
var audiosounds =['USA','France','Portugal','Spain','China','Italy','Russia'];

//Buttons
$(document).ready(function () {
	if(number == 0) {
		getData();
	}
});

function getData() {
  	if(number <= 6) {
		var i = document.getElementById('img');
		i.src='../images/' + images[number]  + '.jpg';
		i.alt= "flag from " + images[number]; 
		document.getElementById('imgcaption').innerHTML=text[number];
 		document.getElementById('audio').innerHTML = "<audio id='audiotag' controls autoplay><source src='../audio/" + audiosounds[number]+ ".mp3' type='audio/mpeg'></audio>";

		if(number == 0 || number == 6) {
			$("#image").removeClass("hidden");
			document.getElementById('enddiv').innerHTML= "";
		}

		if(number == 0) {
			$("#imgcaption").addClass("bold");
		} else {
			$("#imgcaption").removeClass("bold");
		}

	}
	else {
		//If last page then get rid of content and replace with the end
		clearPage();
		document.getElementById('enddiv').innerHTML= "The End";
	 }
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
       if(number > 0) {
       	number--;
		getData();
	   }
    }
    else if (e.keyCode == '39' || e.keyCode == '32') {
       // right arrow
       if(number <= 6) {
       	number++;
       	getData();
       }
    }
}
function left() {
	if(number > 0) {
       	number--;
		getData();
	   }

}
function right() {
	if(number <= 6) {
       	number++;
       	getData();
       }
}
