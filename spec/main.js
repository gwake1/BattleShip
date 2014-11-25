/* jshint jquery: true, browser: true */
/*var myDataRef = new Firebase('https://battleshipnss.firebaseio.com/');
$('#messageInput').keypress(function (e) {
if (e.keyCode == 13) {
var name = $('#nameInput').val();
var text = $('#messageInput').val();
myDataRef.set('User ' + name + ' says ' + text);
$('#messageInput').val('');
}
});*/
var player = {
  player1: {
    name: "Jessica",
    turn: true,
    show: true,
  },
  player2: {
    name: "Jackie",
    turn: false,
    show: false,
  }
};
var game = {
  turn: true,
}
var aircraftCarrier = {
  name: "aircraftcarrier",
  rotate: false,
};
var battleship = {
  name: "battleship",
  rotate: false,
};
var submarine = {
  name: "submarine",
  rotate: false,
};
var destroyer = {
  name: "destroyer",
  rotate:false,
};
var patrolBoat = {
  name: "patrolBoat",
  rotate: false,
};


function playerName() {
  if (game.turn === true) {
    return player.player1.name;
    gameIndicator();
  } else {
    return player.player2.name;
  }
}

function gameIndicator() {
  if (game.turn === true) {
    game.turn = false;
    player.player1.show = false;
    return game.turn;
    return player.player1.show;
  } else {
    game.turn = true;
    player.player2.show = true;
    return game.turn;
    return player.player2.show;
  }
}

function playerTurn() {
  if (game.turn === true) {
    playerName();
    game.turn = false;
    player.player1.turn = false;
    player.player2.turn = true;
  } else {
    return player2;
    game.turn = true;
  }
}

function hidePlayer1() {
  var player1 = document.getElementsByClassName("player1");
  var player2 = document.getElementsByClassName("player2");
  for (var i = 0; i < player1.length; i += 1) {
    player1[i].style.display = 'none'
  }
  console.log("player1 hidden");
  for (var i = 0; i < player1.length; i += 1) {
    player2[i].style.display = 'inline-block'
  }
  console.log("player2 shown")
  return "display none"
}

function hidePlayer2() {
  var player1 = document.getElementsByClassName("player1");
  var player2 = document.getElementsByClassName("player2");
  for (var i = 0; i < player1.length; i += 1) {
    player2[i].style.display = 'none'
  }
  console.log("player1 hidden");
  for (var i = 0; i < player1.length; i += 1) {
    player1[i].style.display = 'inline-block'
  }
  console.log("player2 shown")
}

$(".draggable").draggable({
  snap: ".piecesGrid",
  grid: [50, 50],
  revert: "invalid",
  snapMode: "inner",
  containment: "document"
});
$(".piecesGrid").droppable();

$(".ship").click(function(){
  $(".ship").removeClass("selected");
  $(this).addClass("selected");
});

$('#button').on('click', function() {
  $(".selected").toggleClass("rotate2");
});
