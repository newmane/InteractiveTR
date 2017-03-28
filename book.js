$(document).ready(function () {
	$("#getbook").click(function() {
		$.ajax({
			dataType: "html",
			url: "http://tarheelreader.org/2015/03/30/at-the-zoo-10/4",
			crossDomain: true,
			error: function(xhr, textStatus, error){
      			console.log(xhr.statusText);
      			console.log(textStatus);
      			console.log(error);
  			},
  			success: function(data) {
  				console.log("SUCCESS");
  				var imgurl = $(data).find('img.thr-pic').attr("src");
  				imgurl = "http://tarheelreader.org/" + imgurl;
  				document.getElementById('img').src=imgurl;
  			}
		})
	});
});