var number = 2;
$(document).ready(function () {
	$("#openbook").click(function() {
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
	  				var imgurl = $(data).find('img.thr-pic').attr("src");
	  				imgurl = "http://tarheelreader.org/" + imgurl;
	  				document.getElementById('img').src=imgurl;
	  				var text = $(data).find('p.thr-caption').text();
	  				document.getElementById('text').innerHTML=text;
	  				$("#openbook").addClass("next");
	  				document.getElementById('openbook').innerHTML="next";
	  			}
	  			else {
	  				document.getElementById('container').innerHTML= "The End";

	  			}	

  			}
		})
	});
});