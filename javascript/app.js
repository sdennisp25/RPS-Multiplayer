var startGame = false;
var user = false;
var enemy = false;

$(document).ready(function (){
	alert("Press START to play!")

	$("#start-game-button").on("click", function (){
		alert("ready");
		var startGame = true;

		
		$("#rock").on("click", function (){
			var rock = $("<h1 style='color: blue'>");
			rock.text("rock");
			$("#userBox").append(rock);
		})

		$("#paper").on("click", function (){
			var paper = $("<h1 style='color: blue'>");
			paper.text("paper");
			$("#userBox").append(paper);
			
		})
		$("#scissors").on("click", function (){
			var scissors = $("<h1 style='color: blue'>");
			scissors.text("scissors");
			$("#userBox").append(scissors);
		})

	})


});