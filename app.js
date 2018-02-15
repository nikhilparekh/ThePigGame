/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
	//Getting  the Names of player
	var p0 = prompt("Enter The Name Of Player 1: ");

	var p1 = prompt("Enter The Name Of Player 2:");
	
	//Variables for Global
var score,roundScore, activePlayer;
	
	//Changing The names with the current players name
	document.querySelector("#name-0").textContent = p0;
	
	document.querySelector("#name-1").textContent = p1;
	
//initializing the game
	init();

	


document.querySelector(".btn-roll").addEventListener('click',function()
	{
		//getting random number and displaying it on dice
		var dice=Math.ceil((Math.random()*6));
	
		var DiceDom = document.querySelector('.dice');
	
		DiceDom.style.display = 'block';
	
		DiceDom.src = 'dice-'+dice+'.png';
		
	//if the number is not equal to 1 adding it to the game score
		if(dice!=1)
		{
			roundScore+=dice;
			
			document.querySelector('#current-'+activePlayer).textContent = roundScore;
			

		}
	//if dice is equal to zero changing the current player and the round score to zero
		else
			
		{
			roundScore = 0;
			
			document.querySelector('#current-'+activePlayer).textContent = roundScore;
			
			changePlayer();
			
		}

	});

document.querySelector('.btn-hold').addEventListener('click', function()

	{

		score[activePlayer] += roundScore;
	
		document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
			
		won();
	
		
		roundScore=0;
	
		document.querySelector('#current-'+activePlayer).textContent = 0;
	
		changePlayer();
	
		
	});
	

	//NEW GAME
	document.querySelector('.btn-new').addEventListener('click',init);


	//function to change player
	function changePlayer()
	{
		activePlayer === 0 ?activePlayer =  1: activePlayer=0;
		
		document.querySelector('.player-0-panel').classList.toggle('active');	
		
			document.querySelector('.player-1-panel').classList.toggle('active');
	}



	//function to check if a player has won

		function won()
		{
				if(score[activePlayer]>= 20)
		{
			if(activePlayer==0)
			{
				
			alert(p0+" Has Won Hurray");
				
				init();
			}
			else
			{
				alert(p1+" Has Won Hurray");
				
				init();
			}

		}

		}



//function to initialize the game
		function init()
	{
		score = [0,0];
		
		roundScore = 0;
		
		activePlayer = 0;
		
		document.querySelector('#score-0').textContent = 0;
		
		document.querySelector('#score-1').textContent = 0;
		
		document.querySelector('.dice').style.display = 'none';
		
	document.querySelector('#current-1').textContent = '0';
		
	document.querySelector('#current-0').textContent = '0';
		
	}
