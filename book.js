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
  				console.log("SUCCESS" + data);
  				var f = $(data).find('img.thr-pic').attr("src");
  				f = "http://tarheelreader.org/" + f;
  				document.getElementById('img').src=f;
  				console.log(f);
  			}
		})
	});
});