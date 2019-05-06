 /*
  Class:    4A7B
  Name:     Romy Huzen
  Purpose:  Rolling random dices periode 03 exercise 03
            working with: Math object (random function)

  dd-mm-yyyy  Description
  ==========  ==========================================
  06-03-2018  Initial
*/

	function randomInteger(min, max) { //min and max are included
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
	
	//min=1, max=6
	//Math.floor(0.98765 * (6-1+1)) + 1
	//Math.floor(0.98765 * 6)) + 1
	//Math.floor(5,9259) + 1
	//5+1

	//min=16, max=64
	//Math.floor(0.3765 * (64-16+1)) + 1
	//Math.floor(0.3765 * 48)) + 1
	//Math.floor(18,072) + 1
	//18+1
	
    var dice_01;
    var dice_02;
    var dice_03;
    var dice_04;
    var dice_05;

    var dice_01_hold = false;
    var dice_02_hold = false;
    var dice_03_hold = false;
    var dice_04_hold = false;
    var dice_05_hold = false;
	
	var amountThrown = 0;
	
	function rollDice(isThrow) {
	  /*
	    Probeer in maximaal 3 gooien zoveel mogelijk dobbelstenen met dezelfde waarde te krijgen
	    Je mag drie keer gooien
		Na elke beurt mag je dobbelstenen vastleggen (deze worden niet opnieuw gegooid)
		Toon na de derde beurt de score in de result div
	   */
	   
	  if (!isThrow) {
        dice_01_hold = false;
        dice_02_hold = false;
        dice_03_hold = false;
        dice_04_hold = false;
        dice_05_hold = false;
	  
	    amountThrown = 0;
		
		document.getElementById("dice_01").style.background = "black";
		document.getElementById("dice_01").style.color      = "white";
		
		document.getElementById("dice_02").style.background = "black";
		document.getElementById("dice_02").style.color      = "white";
		
		document.getElementById("dice_03").style.background = "black";
		document.getElementById("dice_03").style.color      = "white";
		
		document.getElementById("dice_04").style.background = "black";
		document.getElementById("dice_04").style.color      = "white";
		
		document.getElementById("dice_05").style.background = "black";
		document.getElementById("dice_05").style.color      = "white";
		
		//result
        document.getElementById("result").innerHTML = "Yatzee! 50 points";
	    document.getElementById("result").style.display = "block";
		//show score with green dices
		
		return false;
	  }
	  
	  if (amountThrown >= 3) {

		return false;
      }	 
	  

	  
	  if (!dice_01_hold) { //roll the dice again
		document.getElementById("dice_01").innerHTML = randomInteger(1, 6);
	  }

	  if (!dice_02_hold) { //roll the dice again
		document.getElementById("dice_02").innerHTML = randomInteger(1, 6);
	  }

	  if (!dice_03_hold) { //roll the dice again
		document.getElementById("dice_03").innerHTML = randomInteger(1, 6);
	  }

	  if (!dice_04_hold) { //roll the dice again
		document.getElementById("dice_04").innerHTML = randomInteger(1, 6);
	  }

	  if (!dice_05_hold) { //roll the dice again
		document.getElementById("dice_05").innerHTML = randomInteger(1, 6);
	  }
	  
	  
	  //amountThrown++;
	  if (++amountThrown >= 3) {
	    rollDice(false);
		return false;
	  }
	  
      document.getElementById("result").innerHTML = "Dit was de " + amountThrown + "e beurt";
	  document.getElementById("result").style.display = "block";

	  
	}
	
	function setOnHold(myDice) {

	  if (amountThrown == 0 || amountThrown >= 3) {

		return false;
      }	  
	
	  switch(myDice) {
	  
	    case "dice_01":
		dice_01_hold = !dice_01_hold;
		
  	    if (dice_01_hold) { //stop rolling the dice
		  document.getElementById("dice_01").style.background = "red";
	    } else { //roll the dice again
		  document.getElementById("dice_01").style.background = "black";
		  document.getElementById("dice_01").style.color      = "white";
	    }
		break;
		
	    case "dice_02":
		dice_02_hold = !dice_02_hold;
		
  	    if (dice_02_hold) { //stop rolling the dice
		  document.getElementById("dice_02").style.background = "red";
	    } else { //roll the dice again
		  document.getElementById("dice_02").style.background = "black";
		  document.getElementById("dice_02").style.color      = "white";
	    }
		break;
		
	    case "dice_03":
		dice_03_hold = !dice_03_hold;
		
  	    if (dice_03_hold) { //stop rolling the dice
		  document.getElementById("dice_03").style.background = "red";
	    } else { //roll the dice again
		  document.getElementById("dice_03").style.background = "black";
		  document.getElementById("dice_03").style.color      = "white";
	    }
		break;

	    case "dice_04":
		dice_04_hold = !dice_04_hold;
		
  	    if (dice_04_hold) { //stop rolling the dice
		  document.getElementById("dice_04").style.background = "red";
	    } else { //roll the dice again
		  document.getElementById("dice_04").style.background = "black";
		  document.getElementById("dice_04").style.color      = "white";
	    }
		break;

	    case "dice_05":
		dice_05_hold = !dice_05_hold;
		
  	    if (dice_05_hold) { //stop rolling the dice
		  document.getElementById("dice_05").style.background = "red";
	    } else { //roll the dice again
		  document.getElementById("dice_05").style.background = "black";
		  document.getElementById("dice_05").style.color      = "white";
	    }
		break;
		
	  }
	}
