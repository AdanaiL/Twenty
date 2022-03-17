alert(`Welcome to the game Twenty! Let's see who can get the closest to 20. You are going to be playing against the computer.

You will draw numbers from 1 to 10 and the computer will stop at 16.

Your total will be given so pay attention, to select another number press 'y'`);



alert("Now... it's computer's turn.");

var play = 0;

var round = 1;

var userwins = 0;
var pcwins = 0;

do {
  var pcnum = 0;
  var usernum = 0;
  
  do {
    var number = Math.floor(Math.random() * 10) + 1;
    pcnum = Math.floor(pcnum + number);
    alert(`The new number is ${number}
  
The computer total is ${pcnum}`);
  } while (pcnum < 16);
  
  if (pcnum < 21) {
    alert(`The computer has finished and his final number was ${pcnum}. Now it's your turn to draw.`);
    var number = Math.floor(Math.random() * 10) + 1;
    usernum = Math.floor(usernum + number);
    alert(`Your new number is ${number}`);

    var userrequest = confirm("Draw another number?");

  do {
    if (usernum < 21) {
      do {
        var number = Math.floor(Math.random() * 10) + 1;
        usernum = Math.floor(usernum + number);
        alert(`You rolled a ${number} 
Your new total is ${usernum}`);
      

        if (usernum < 21) {
          userrequest = confirm("Draw another number?");
        } else if (usernum > 20) {
          break;
        }
    } while (userrequest == true)
      
      if (usernum > 20) {
        alert("Oops, you went over 20. The round is forfeit. Computer Wins!")
        pcwins++
        break;
      }
      
      alert(`Your final number was ${usernum}`);

      if (usernum == pcnum) {
        alert(`Both you and the computer both ended with ${usernum}. Its a tie!`)
      } else if (usernum > pcnum) {
        alert(`You got ${usernum} and Matt got ${pcnum}. Congratulations, You Win!`)
        userwins++
      } else if (pcnum > usernum) {
        alert(`You got ${usernum} and Matt got ${pcnum}. Computer Wins!`)
        pcwins++
      } 
    
    } else if (usernum > 20) {
      alert("Oops, you went over 20. The round is forfeit. Computer Wins!")
      pcwins++
    }
      
  } while (play == 0)
    
  } else if (pcnum > 20) {
    alert("Oops, Computer went over 20. The round is forfeit. You Win!")
    userwins++
    } 
  
  var playagain = confirm("Would you like to play again?");
    if (playagain == false) {
      break;
    } else if (playagain == true) {
      round++
      alert(`Round ${round}!`);
    }

} while (play == 0);
alert(`Thank you for playing, you played ${round} rounds and your final score was: 
        Computer: ${pcwins}
        You: ${userwins}`);
