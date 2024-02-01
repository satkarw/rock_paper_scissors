let userMove;
let computerMove;
let rock = 'rock';
let paper ='paper';
let scissors ='scissors';

let score=JSON.parse(localStorage.getItem('score') ) 

if (!score){

    score ={
    win:0,
    loose:0,
    tie:0
    }
}


let rockIcon = document.getElementById('rock_icon').src;

let paperIcon = document.getElementById('paper_icon').src;

let scissorsIcon = document.getElementById('scissors_icon').src;

let userMoveDisplay = document.querySelector('.your-move');
let computerMoveDisplay = document.querySelector('.computer-move');

//for result
let resultDisplay=document.querySelector('.result-display');

//for score

let wins = document.querySelector('.wins');
let ties = document.querySelector('.ties');
let looses = document.querySelector('.looses');

displayScore(score.win,score.loose,score.tie);  

function move(move){
    userMove = move;
   computerMove = computerMoveCalculator();
   
   play(userMove,computerMove);

}


function computerMoveCalculator(){
   let rand= Math.floor(Math.random() * 3) + 1;

    if (rand === 1)
    computerMove= rock;
    else if (rand === 2)
    computerMove= paper;
    else
    computerMove= scissors;

    return computerMove;
}


function play(u,c){
    if (u===c){

        tie(u,c);
    
    }

   else if ( u === rock){

        if (c === scissors){
            win(u,c);
        }

        else{
            loose(u,c);
        }
    }

    else if (u === paper){
        if (c === rock){
            win(u,c);
        }
        else{
            loose(u,c);
        }
    }
    else if (u === scissors){

        if (c === paper){
            win(u,c);
        }
        else{
            loose(u,c);
        }
    }
}


function win(u,c){
updateScore('win');    
resultDisplay.innerHTML='You Won';  
displayMove(u,c);




}

function loose(u,c){
    updateScore('loose');
    resultDisplay.innerHTML='You Lost';
    displayMove(u,c);
   
}

function tie(u,c){

    updateScore('tie');
    resultDisplay.innerHTML="It's a Tie";
    displayMove(u,c);
  
  
}
function displayMove(u,c){
    if ( u === rock){
        uIcon= rockIcon;
    }

    else if (u === paper){
        uIcon= paperIcon;
    }

    else if (u === scissors){
        uIcon= scissorsIcon;
    }

    if ( c === rock){
        cIcon= rockIcon;
    }
    else if (c === paper){
        cIcon= paperIcon;
    }
    else if (c === scissors){
        cIcon= scissorsIcon;
    }

    userMoveDisplay.innerHTML='You: '  +   `<image class="iconDisplay"  src='${uIcon}'> `;
    computerMoveDisplay.innerHTML='Computer: '+`<image class="iconDisplay"  src='${cIcon}'> `;
    
}

function updateScore(value){


    if (value==='win'){
        score.win +=1;
    }
    else if (value==='loose'){
        score.loose +=1;
    }
    else if (value==='tie'){
        score.tie +=1;
    }

    displayScore(score.win,score.loose,score.tie);
    localStorage.setItem('score',JSON.stringify(score));
}

function displayScore(win,loose,tie){
   
    wins.innerHTML= 'wins : ' + win;
    ties.innerHTML= 'ties : '+ tie;
    looses.innerHTML= 'looses : '+ loose;

}
function reset(){
    score={
        win:0,
        loose:0,
        tie:0
    }
    localStorage.setItem('score',JSON.stringify(score));
    displayScore(score.win,score.loose,score.tie);

    let btn = document.querySelector('.autoplay-button');
    btn.innerHTML ='auto play';
    clearInterval(myInterval);


    resultDisplay.innerHTML='';
    userMoveDisplay.innerHTML='';
    computerMoveDisplay.innerHTML='';

}

let myInterval;
function autoplay(){
    let btn = document.querySelector('.autoplay-button');


    if (btn.innerHTML ==='auto play'){

        btn.innerHTML ='Stop AutoPlay';

        myInterval= setInterval( function(){
      
    

            let rand= Math.floor(Math.random() * 3) + 1;
    
        if (rand === 1)
        userMove= rock;
        else if (rand === 2)
        userMove= paper;
        else
        userMove= scissors;
    
            rand = Math.floor(Math.random() * 3) + 1;
            
        if (rand === 1)
        computerMove = rock;
        else if (rand === 2)
        computerMove= paper;
        else
        computerMove= scissors;
    
        play(userMove,computerMove);
            } , 500);



    }
    
    else{

        btn.innerHTML ='auto play';
        clearInterval(myInterval);
    }

    
}

