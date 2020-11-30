var pwins = 0;
var cwins = 0;
var round = 0;
$(document).ready(function() {

    $("#rock").click(function(e) {
        if(round < 3) {
            evaluate("rock");
            round++;
            if (round == 3) {
                //Decide who won
                if(cwins > pwins) {
                    $("#whowon").text("WINNER: COMPUTER");
                }
                else if(pwins > cwins) {
                    $("#whowon").text("WINNER: PLAYER");
                }
                else {
                    $("#whowon").text("TIE!");
                }
            }
        }
        $("#round").text("Round: " + round + "/3");
    });
    $("#paper").click(function(e) {
        if(round < 3) {
            evaluate("paper");
            round++;
            if (round == 3) {
                if(cwins > pwins) {
                    $("#whowon").text("WINNER: COMPUTER");
                }
                else if(pwins > cwins) {
                    $("#whowon").text("WINNER: PLAYER");
                }
                else {
                    $("#whowon").text("TIE!");
                }
            }
        }
        $("#round").text("Round: " + round + "/3");
    });
    $("#scissors").click(function(e) {
       if(round < 3) {
           evaluate("scissors");
           round++;
           if (round == 3) {
               if(cwins > pwins) {
                   $("#whowon").text("WINNER: COMPUTER");
               }
               else if(pwins > cwins) {
                   $("#whowon").text("WINNER: PLAYER");
               }
               else {
                   $("#whowon").text("TIE!");
               }
           }
       }
        $("#round").text("Round: " + round + "/3");
    });
    $("#lizard").click(function(e) {
        if(round < 3) {
            evaluate("lizard");
            round++;
            if (round == 3) {
                if(cwins > pwins) {
                    $("#whowon").text("WINNER: COMPUTER");
                }
                else if(pwins > cwins) {
                    $("#whowon").text("WINNER: PLAYER");
                }
                else {
                    $("#whowon").text("TIE!");
                }
            }
        }
        $("#round").text("Round: " + round + "/3");
    });
    $("#spock").click(function(e) {
        if(round < 3) {
            evaluate("spock");
            round++;
            if (round == 3) {
                if(cwins > pwins) {
                    $("#whowon").text("WINNER: COMPUTER");
                }
                else if(pwins > cwins) {
                    $("#whowon").text("WINNER: PLAYER");
                }
                else {
                    $("#whowon").text("TIE!");
                }
            }
        }
        $("#round").text("Round: " + round + "/3");
    });



});
function evaluate(choice) {
    //should get a number between 0 and 4, add 1 to get 1 to 5
    var cpu = Math.floor(Math.random() * 5) + 1;
    var cpuchoice = "";
    switch(cpu) {
        //Convert the number to a text option
        case 1:
            cpuchoice = "rock";
            $("#cpuselect").text("Computer chose Rock!");
            break
        case 2:
            cpuchoice = "paper";
            $("#cpuselect").text("Computer chose Paper!");
            break
        case 3:
            cpuchoice = "scissors";
            $("#cpuselect").text("Computer chose Scissors!");
            break
        case 4:
            cpuchoice = "lizard";
            $("#cpuselect").text("Computer chose Lizard!");
            break
        case 5:
            cpuchoice = "spock";
            $("#cpuselect").text("Computer chose Spock!");
            break
    }
    switch(choice) {
        //Check player's choice against computer's choice, declare round winner
        case "rock":
            $("#selection").text("You chose Rock!");
            switch(cpuchoice) {
                case "rock":
                    $("#winner").text("Tie!");
                    break
                case "paper":
                    $("#winner").text("Computer wins!");
                    cwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break

                case "scissors":
                    $("#winner").text("Player wins!");
                    pwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "lizard":
                    $("#winner").text("Player wins!");
                    pwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "spock":
                    $("#winner").text("Computer wins!");
                    cwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
            }
            break
        case "paper":
            $("#selection").text("You chose Paper!");
            switch(cpuchoice) {
                case "rock":
                    $("#winner").text("Player wins!");
                    pwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "paper":
                    $("#winner").text("Tie!");
                    break
                case "scissors":
                    $("#winner").text("Computer wins!");
                    cwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "lizard":
                    $("#winner").text("Computer wins!");
                    cwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "spock":
                    $("#winner").text("Player wins!");
                    pwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
            }
            break
        case "scissors":
            $("#selection").text("You chose Scissors!");
            switch(cpuchoice) {
                case "rock":
                    $("#winner").text("Computer wins!");
                    cwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "paper":
                    $("#winner").text("Player wins!");
                    pwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "scissors":
                    $("#winner").text("Tie!");
                    break
                case "lizard":
                    $("#winner").text("Player wins!");
                    pwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "spock":
                    $("#winner").text("Computer wins!");
                    cwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
            }
            break
        case "lizard":
            $("#selection").text("You chose Lizard!");
            switch(cpuchoice) {
                case "rock":
                    $("#winner").text("Computer wins!");
                    cwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "paper":
                    $("#winner").text("Player wins!");
                    pwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "scissors":
                    $("#winner").text("Computer wins!");
                    cwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "lizard":
                    $("#winner").text("Tie!");
                    break
                case "spock":
                    $("#winner").text("Player wins!");
                    pwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
            }
            break
        case "spock":
            $("#selection").text("You chose Spock!");
            switch(cpuchoice) {
                case "rock":
                    $("#winner").text("Player wins!");
                    pwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "paper":
                    $("#winner").text("Computer wins!");
                    cwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "scissors":
                    $("#winner").text("Player wins!");
                    pwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "lizard":
                    $("#winner").text("Computer wins!");
                    cwins++;
                    $("#cwins").text("Computer wins: " + cwins);
                    $("#pwins").text("Player wins: " + pwins);
                    break
                case "spock":
                    $("#winner").text("Tie!");
                    break
            }
            break

    }
}