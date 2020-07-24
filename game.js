var gamePattern=[],clickPattern=[],colors=["red","blue","green","yellow"],level=0,started=!1,toggler=$(".container"),checked=!1;function nextSequence(){clickPattern=[],level++,$("h1").text("Level "+level);var e=Math.floor(4*Math.random()),t=colors[e];gamePattern.push(t);var r="sounds/"+t+".mp3";$("#"+t).fadeOut(100).fadeIn(100),new Audio(r).play()}function checkAnswer(e,t){var r=!0;if(e.length==t.length){for(var o=0;o<e.length;o++)e[o]!=t[o]&&(r=!1);1==r&&setTimeout(function(){nextSequence()},1e3)}else for(var n=0;n<e.length;n++)e[n]!=t[n]&&(r=!1);0==r&&gameOver()}function gameOver(){$("h1").text("Game Over"),$("body").addClass("game-over"),setTimeout(function(){$("body").removeClass("game-over")},100),new Audio("sounds/wrong.mp3").play(),$("h1").text("Game Over"),$(".score").show(),checked||$(".score").click(function(){checkScore()}),$(".restart").show(),$(".restart").click(function(){startOver()})}function checkScore(){$(".container").detach(),$(".level").text("Level Completed: "+(level-1)),1==level?($(".remarks").text("No Memory Found. Insert Disk in your brain!!"),$(".scoreSheet").show()):2==level?($(".remarks").text("You CALL that Memory!!?"),$(".scoreSheet").show()):3==level?($(".remarks").text("Memory Requirements not fulfilled. Your brain runs at 10fps"),$(".scoreSheet").show()):4==level?($(".remarks").text("I see you are trying to kill your brain cells!!"),$(".scoreSheet").show()):4==level?($(".remarks").text("Okay I'm not gonna troll you anymore."),$(".scoreSheet").show()):5==level?($(".remarks").text("Memory too OP! Please Nerf!!"),$(".scoreSheet").show()):level>5&&($(".remarks").text("We've found Einstein! I repeat we've found Einstein!!"),$(".scoreSheet").show()),checked=!0}function startOver(){$(".score").before(toggler),$(".score").hide(),$(".restart").hide(),$("h1").text("Press A to Start"),$(".scoreSheet").hide(),gamePattern=[],level=0,started=!1,checked=!1}$(document).keydown(function(e){started||"a"!=e.key&&"A"!=e.key||(started=!0,nextSequence())}),$(".btn").click(function(){var e=$(this).attr("id");clickPattern.push(e),$(this).addClass("pressed"),setTimeout(function(){$("#"+e).removeClass("pressed")},100),new Audio("sounds/"+e+".mp3").play(),checkAnswer(clickPattern,gamePattern)});
