"use strict";

function randomDamage(){
    return Math.floor(Math.random()*10)+1;
}

function chooseOption(opt1,opt2){
    const randNum = Math.round(Math.random(0,1));
    console.log(randNum);
    return randNum ? opt2 : opt2;
}

function attackPlayer(health){
    return health - randomDamage;
}

function logHealth(player,health){
    console.log(`${player} health: ${health}`);
}

function logDeath(winner, loser){
    console.log(`${winner} deeafeted ${loser}`);
}
const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health){
    while(true){
        let attacker = chooserOption(player1,player2);

        if (attacker === Player1){
            player2Health = attackerPlayer(player2Health);
            logHealth(player2,player2Health);
            if(isDead(player2Health)){
                logDeath(player1, player2);
                break;
            }else{
                player1Health = attackPlayer(player1Health);
                logHealth(player1,player1Health);
                if(isDead(player1Health)){
                    logDeath(player2,player1);
                    break;
                }
            }
        }
    }
}