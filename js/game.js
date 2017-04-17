var number = 3;
var selectednumber = 0;
document.onkeydown = checkKey;

$(document).ready(function () {
	while(number <= 7) {
		getData(number);
		number++;
	}
	rightAnswer();
});

function getData(number) {
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
  			var tdnumber = number - 2;
  			var imgurl = $(data).find('img.thr-pic').attr("src");
			imgurl = "http://tarheelreader.org/" + imgurl;
			var imgnum = 'img' + tdnumber;
			document.getElementById(imgnum).src=imgurl;

			var text = $(data).find('p.thr-caption').text();
			var animal = text.substr(0,text.indexOf(' ')-1);
			var captionnum = 'imgcaption' + tdnumber;
			document.getElementById(captionnum).innerHTML=animal;


			var audionum = 'audio' + tdnumber;
			var audiotag = "";
			if(tdnumber == 5) {
				audiotag = "<audio id='audiotag5' controls><source src='http://www.wildlifelands.com/wxs/flamingo.mp3' type='audio/mpeg'></audio>";
			} else {
				audiotag = "<audio id='audiotag" + tdnumber + "' controls><source src='../audio/" + animal + ".mp3' type='audio/mpeg'></audio>";
			}
			console.log(audiotag);
			document.getElementById(audionum).innerHTML = audiotag;
		}
	})
}
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        check();
    }
    else if (e.keyCode == '40') {
        // down arrow

    }
    else if (e.keyCode == '37') {
       // left arrow
       previous();

    }
    else if (e.keyCode == '39') {
       // right arrow
        next();
    }
}

function next() {
	var curselected = '#' + selectednumber;
	$(curselected).removeClass("selected");
	if(selectednumber == 6) {
		selectednumber = 1;

	} else {
		selectednumber++;

	}

	var prev = 0;
	if(selectednumber == 1 || selectednumber == 0) {
		prev = 6;
	} else {
		prev = selectednumber - 1;
	}
	pausePrevious(prev);

	var newselected = '#' + selectednumber;
	$(newselected).addClass("selected");

	var audiotagnum = 'audiotag' + selectednumber;
	var audio = document.getElementById(audiotagnum);
	audio.play();
}

function previous() {
	var curselected = '#' + selectednumber;
	$(curselected).removeClass("selected");
	if(selectednumber == 1 || selectednumber == 0) {
		selectednumber = 6;

	} else {
		selectednumber--;

	}
	var newselected = '#' + selectednumber;
	$(newselected).addClass("selected");

	var prev = 0;
	if(selectednumber == 6) {
		prev = 1;
	} else {
		prev = selectednumber + 1;
	}
	pausePrevious(prev);

	var audiotagnum = 'audiotag' + selectednumber;
	var audio = document.getElementById(audiotagnum);
	audio.play();
}
function rightAnswer() {
	document.getElementById('img6').src= "../Dog.jpg";
	document.getElementById('imgcaption6').innerHTML="Dog";
	document.getElementById('audio6').innerHTML = "<audio id='audiotag6' controls><source src='../audio/Dog.mp3' type='audio/mpeg'></audio>";
}

function check() {
	var captionnum = 'imgcaption' + selectednumber;
	var curAnimal = document.getElementById(captionnum).innerHTML;
	if(curAnimal == "Dog") {
		document.getElementById('container').innerHTML = "CONGRATS!";
	} else {
		alert("Try Again")
	}
}
function pausePrevious(prev) {
	var prevSelected = 'audiotag' + prev;
	document.getElementById(prevSelected).pause();
}