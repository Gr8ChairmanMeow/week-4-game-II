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
		obi_img: "'../images/obi.jpg'",
		maul_img: "'../images/maul.jpg'",
		luke_img: "'../images/luke_img.jpg'",
		ewok_img: "'../images/ewok.jpg'",
		playerArr : [["Player_One","'assets/images/obi.jpg'",1],["Player_Two","'assets/images/maul.jpg'",2],["Player_Three","'assets/images/luke.png'",3],["Player_Four","'assets/images/ewok.jpg'",4]],
		test_var: 0,
		create_players: function(skip,user_row,remainder_row) {
			//for loop to create div elements based on Activity 04-11-FridgeGame
        	for(var i =0; i < 4; i++){

				if (i === skip){

					var players = $("<div>");

					//class to define player div containers
					players.addClass("whtbx");

					players.attr("value",i);

					//logic to create players based on index from loop & this.playerArr[x][y]				
					var player = this.playerArr[i][0];
					var img_src = this.playerArr[i][1];
					var hp = this.playerArr[i][2];
					//
					//console.log(img_src);

					players.html(player + "<br><img src=" + img_src + " alt='img.test' height='150' width='150'/><p>" + hp + "</p>");
					//appending to generic row class, may need to change later as more row divs added
					$(user_row).append(players);

				}
				else{

					var players = $("<div>");

					//class to define player div containers
					players.addClass("whtbx");

					players.attr("value",i);

					//logic to create players based on index from loop & this.playerArr[x][y]				
					var player = this.playerArr[i][0];
					var img_src = this.playerArr[i][1];
					var hp = this.playerArr[i][2];
					//
					console.log(img_src);

					players.html(player + "<br><img src=" + img_src + " alt='img.test' height='150' width='150'/><p>" + hp + "</p>");
					//appending to generic row class, may need to change later as more row divs added
					$(remainder_row).append(players);

				};

			};//end of for loop

        },//end of create_players function

	};//end of star_wars object

	//Below is what needs to run at initiate
	star_wars.create_players("","","#players");

	//Below is what needs to run when a user clicks a player
	//star_wars.create_players(2,"#user_char","#enemies");

	$(".whtbx").on("click", function() {

		var char_val = $(this).attr("value");
		console.log(char_val)

	});
});//end of $(document).ready(function() { });

//Will attempt to complete subarray logic with images and create new function to determine hitpoints randomnly.