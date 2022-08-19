// game with if 

var player1 = "paper";

var player2 = "rock";

if (player1 === "paper" && player2 === "paper") {
    console.log("Tie");
}else if(player1 === "rock" && player2 === "rock") {
    console.log("Tie");
}else if(player1 === "scissors" && player2 === "scissors") {
    console.log("Tie");
}else if(player1 === "paper" && player2 === "rock") {
    console.log("player 1 wins");
}else if(player1 === "paper" && player2 === "scissors") {
    console.log("player 2 wins");
}else if(player1 === "rock" && player2 === "paper") {
    console.log("player 2 wins");
}else if(player1 === "rock" && player2 === "scissors") {
    console.log("player 1 wins");
}else if(player1 === "scissors" && player2 === "paper") {
    console.log("player 1 wins");
}else if(player1 === "scissors" && player2 === "rock") {
    console.log("player 2 wins");
}

// game with switch

var player1 = "paper";

var player2 = "rock";

function rps(player1, player2) {
    if (player1 === "paper" && player2 === "paper") {
        return "tie";
    }else if(player1 === "rock" && player2 === "rock") {
        return "tie";
    }else if(player1 === "scissors" && player2 === "scissors") {
        return "tie";
    }else if(player1 === "paper" && player2 === "rock") {
        return "player 1"
    }else if(player1 === "paper" && player2 === "scissors") {
        return "player2"
    }else if(player1 === "rock" && player2 === "paper") {
        return "player2"
    }else if(player1 === "rock" && player2 === "scissors") {
        return "player 1"
    }else if(player1 === "scissors" && player2 === "paper") {
        return "player 1"
    }else if(player1 === "scissors" && player2 === "rock") {
        return "player2"
    }
}

switch(rps("rock","paper")) {
    case "tie":
        console.log("tie xd");
        break;
    case "player 1":
        console.log("player 1 wins :D");
        break;
    case "player2":
        console.log("player 2 wins :D");
}