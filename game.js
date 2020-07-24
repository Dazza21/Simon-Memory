var gamePattern = [];
var clickPattern = [];
var colors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
var toggler=$(".container");
var checked=false;

$(document).keydown(function(event) {
  if (!started) {

    if (event.key == 'a' || event.key == 'A') {
      started = true;
      nextSequence();
    }
  }
});

$(".btn").click(function() {
  var clickColor = $(this).attr('id');
  clickPattern.push(clickColor);
  $(this).addClass("pressed");
  setTimeout(function() {
    $('#' + clickColor).removeClass("pressed");
  }, 100);
  var clickSoundID = "sounds/" + clickColor + ".mp3";
  var audio = new Audio(clickSoundID);
  audio.play();
  checkAnswer(clickPattern, gamePattern);
});

function nextSequence() {
  clickPattern = [];
  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = colors[randomNumber];
  gamePattern.push(randomColor);
  var colorID = "#" + randomColor;
  var soundID = "sounds/" + randomColor + ".mp3";
  $(colorID).fadeOut(100).fadeIn(100);
  var audio = new Audio(soundID);
  audio.play();

}

function checkAnswer(clickPattern, gamePattern) {

  var answer = true;

  if (clickPattern.length == gamePattern.length) {
    for (var i = 0; i < clickPattern.length; i++) {
      if (clickPattern[i] != gamePattern[i]) {
        answer = false;
      }
    }
    if (answer == true) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    for (var j = 0; j < clickPattern.length; j++) {
      if (clickPattern[j] != gamePattern[j]) {
        answer = false;
      }
    }
  }


  if (answer == false) {
    gameOver();
  }
}

function gameOver()
{
  $("h1").text("Game Over");
  $("body").addClass("game-over");
  setTimeout(function()
  {
    $("body").removeClass("game-over");
  }, 100);

  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("h1").text("Game Over");
  $(".score").show();
  if(!checked)
  {
    $(".score").click(function()
    {
      checkScore();
    });
  }

  $(".restart").show();
  $(".restart").click(function()
{
  startOver();
});
}

function checkScore()
{

  $(".container").detach();
  $(".level").text("Level Completed: "+(level-1));
  if(level==1)
  {
    $(".remarks").text("No Memory Found. Insert Disk in your brain!!");
    $(".scoreSheet").show();
  }
  else if(level==2)
 {
    $(".remarks").text("You CALL that Memory!!?");
    $(".scoreSheet").show();
  }
  else if(level==3)
 {
    $(".remarks").text("Memory Requirements not fulfilled. Your brain runs at 10fps");
    $(".scoreSheet").show();
  }
  else if(level==4)
 {
    $(".remarks").text("I see you are trying to kill your brain cells!!");
    $(".scoreSheet").show();
  }
  else if(level==4)
 {
    $(".remarks").text("Okay I'm not gonna troll you anymore.");
    $(".scoreSheet").show();
  }
  else if(level==5)
 {
    $(".remarks").text("Memory too OP! Please Nerf!!");
    $(".scoreSheet").show();
  }
  else if(level>5)
 {
    $(".remarks").text("We've found Einstein! I repeat we've found Einstein!!");
    $(".scoreSheet").show();
  }
  checked=true;
}


function startOver()
{
  $(".score").before(toggler);
  $(".score").hide();
  $(".restart").hide();
  $("h1").text("Press A to Start");
  $(".scoreSheet").hide();
  gamePattern = [];
  level = 0;
  started = false;
  checked=false;
}
