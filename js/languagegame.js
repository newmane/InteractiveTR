var num = 0;
  function flipit() { 
    $("#card").flip({axis: 'x', trigger: 'manual'});
    num++;
    console.log(num);

  }
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
    flipit2();
    flipit2();
    flipit3();
    flipit3();
    flipit4();
    flipit4();
    flipit5();
    flipit5();
    flipit6();
    flipit6();
  }

var num2 = 0;
function flipit2() { 
  $("#card2").flip({axis: 'x', trigger: 'manual'});
  num2++;

}
function help2() {
  num2++;
  if(num2 >=2) {
    if(num2%2 == 1) {
      var audio = document.getElementById('audiotag2');
      audio.play();
    }
  }
  $("#card2").flip('toggle');
}
var num3 = 0;
function flipit3() { 
  $("#card3").flip({axis: 'x', trigger: 'manual'});
  num3++;

}
function help3() {
  num3++;
  if(num3 >=2) {
    if(num3%2 == 1) {
      var audio = document.getElementById('audiotag3');
      audio.play();
    }
  }
  $("#card3").flip('toggle');
}
var num4 = 0;
function flipit4() { 
  $("#card4").flip({axis: 'x', trigger: 'manual'});
  num4++;

}
function help4() {
  num4++;
  if(num4 >=2) {
    if(num4%2 == 1) {
      var audio = document.getElementById('audiotag4');
      audio.play();
    }
  }
  $("#card4").flip('toggle');
}
var num5 = 0;
function flipit5() { 
  $("#card5").flip({axis: 'x', trigger: 'manual'});
  num5++;

}
function help5() {
  num5++;
  if(num5 >=2) {
    if(num5%2 == 1) {
      var audio = document.getElementById('audiotag5');
      audio.play();
    }
  }
  $("#card5").flip('toggle');
}
var num6 = 0;
function flipit6() { 
  $("#card6").flip({axis: 'x', trigger: 'manual'});
  num6++;

}
function help6() {
  num6++;
  if(num6 >=2) {
    if(num6%2 == 1) {
      var audio = document.getElementById('audiotag6');
      audio.play();
    }
  }
  $("#card6").flip('toggle');
}