var num = 0;
  function flipit() { 
    $("#card").flip({axis: 'x', trigger: 'manual'});
    num++;
    console.log(num);

  }
  var one = true;
  function help() {
    num++;
    console.log(num);
    if(num >=2) {
      console.log(num%2);
      if(num%2 == 1) {
        var audio = document.getElementById('audiotag');
        audio.play();
      }
    }
    $("#card").flip('toggle');
  }
  window.onload = function() {
    flipit();
    flipit();
  }