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
		playerArr : [["Player_One","'assets/images/obi.jpg'",1],["Player_Two","'assets/images/maul.jpg'",2],["Player_Three","'assets/images/luke.png'",3],["Player_Four","'assets/images/ewok.jpg'",4]],
		been_clicked: true,
		defender_clicked: true,
		create_players: function(skip,user_row,remainder_row) {
			//for loop to create div elements based on Activity 04-11-FridgeGame
        	for(var i =0; i < 4; i++){

        		var players = $("<div>");

				//class to define player div containers
				players.addClass("whtbx");
				players.addClass("clickable");

				players.attr("value",i);

				//logic to create players based on index from loop & this.playerArr[x][y]				
				var player = this.playerArr[i][0];
				var img_src = this.playerArr[i][1];
				var hp = this.playerArr[i][2];
				//
				//console.log(img_src);

				players.html(player + "<br><img src=" + img_src + " alt='img.test' height='150' width='150'/><p>" + hp + "</p>");

				if (i === skip){

					
					//appending to generic row class, may need to change later as more row divs added
					$(user_row).append(players);

				}
				else{

					//appending to generic row class, may need to change later as more row divs added
					$(remainder_row).append(players);

				};

			};//end of for loop

        },//end of create_players function

	};//end of star_wars object

	//Below is what needs to run at initiate
	star_wars.create_players("","","#players");

	//assigns button logic to images using class whtbx
	$(document).on('click','.whtbx',function(){

		if(star_wars.been_clicked){

			//clears first row
			$("#players").html("");

			//gets position of character selected
			var char_val = parseInt($(this).attr("value"));

			//runs create_players function to remake characters in new rows
			star_wars.create_players(char_val,"#user_char","#enemies");

			//boolean to stop this button click after user player has been chosen.
			star_wars.been_clicked = false;

		}//end of if statement

	});//end of first .on 'click' function

	//assigns button logic for elements in enemies row
	$(document).on('click','#enemies .whtbx',function(){

		if(star_wars.defender_clicked){

			var defender = $( this ).html();
			var char_val = parseInt($(this).attr("value"));
			var defend = $("<div>");

			//class to redefine player div container
			defend.addClass("whtbx");

			//re-add value to container
			defend.attr("value",char_val);

			//delete original element in enemies row
			$(this).remove();

			//re-add img and other html elements
			defend.html(defender)

			//appends chosen defender to defender row
			$("#defender").append(defend);

			star_wars.defender_clicked = false;
		}

	});//end of .on function

	$(document).on('click','#kill_kill',function(){

		console.log("I've been clicked!");

	});

});//end of $(document).ready(function() { });

//Will attempt to complete subarray logic with images and create new function to determine hitpoints randomnly.