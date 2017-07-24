$(document).ready(function() {
//1. defined a test_function to create div elements within a row class div container
	/*function test_function(){

		for(var i =0; i < 4;i++){

			var players = $("<div>");

			players.addClass("whtbx");

			players.text("Blox")

			$(".row").append(players);

		};

	};

	alert("This is working!")

	test_function();*/

//2. Attempt to create object to store all game variables.
	var star_wars = {
		playerArr : [["Player_One",1],["Player_Two",2],["Player_Three",3],["Player_Four",4]],
		test_var: 0,
		create_players: function() {
			//for loop to create div elements based on Activity 04-11-FridgeGame
        	for(var i =0; i < 4;i++){

				var players = $("<div>");

				//class to define player div containers
				players.addClass("whtbx");

				//logic to create players based on index from loop & this.playerArr[x][y]				
				var player = this.playerArr[i][0];
				var hp = this.playerArr[i][1];
				players.html(player + "<br><img src='' alt='img.test'/><p>" + hp + "</p>");
				//appending to generic row class, may need to change later as more row divs added
				$(".row").append(players);

			};//end of for loop

        },//end of create_players function

	};//end of star_wars object
	star_wars.create_players();
});//end of $(document).ready(function() { });

//Will attempt to complete subarray logic with images and create new function to determine hitpoints randomnly.