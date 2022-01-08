'use strict';

let id=(id)=>document.getElementById(id);
let winner=id('winner'),
btnClear=id('reset');

 let [computer_score,user_score]=[0,0];

let result=id('result'); 



 let gameRules={
 'rock':{
'rock':'draw',
'paper':'win',
'scissor':'lose',
'lizard':'win',
'spock':'lose'
},

'paper':{
  'rock':'lose',
  'paper':'draw',
  'scissor':'win',
  'lizard':'lose',
'spock':'win'
  },

  'scissor':{
    'rock':'win',
    'paper':'lose',
    'scissor':'draw',
    'lizard':'win',
   'spock':'lose'
    },

    'spock':{
      'rock':'win',
      'paper':'lose',
      'scissor':'lose',
      'lizard':'win',
      'spock':'draw'
      },

      'lizard':{
        'rock':'lose',
        'paper':'lose',
        'scissor':'win',
        'lizard':'draw',
        'spock':'win'
        },
  }

const gameChecker=function(input){
  
let choices=["rock","paper","scissor"];
let randomNumber=Math.floor(Math.random()*3);

userChoice.innerHTML=`user choice is ${input}`;
compChoice.innerHTML=`computer choice is ${choices[randomNumber]}`;

let ComputerChoice=choices[randomNumber];

switch(gameRules[input][ComputerChoice]){
case 'win':
  result.innerHTML="you win";
  user_score++;
  break;

  case 'lose':
    result.innerHTML="you lose";
    computer_score++;
    break;

    default:
      result.innerHTML="draw";
      break;




}

document.getElementById('computer_score').innerHTML=computer_score;
document.getElementById('user_score').innerHTML=user_score;

  if(user_score===10){
  winner.innerHTML='user wins';
 user_score=0;
 computer_score=0;

  }
else if(computer_score===10){
winner.innerHTML='computer wins';
user_score='';
 computer_score='';

}else{
  winner.innerHTML='';
}


}


let ClrBtn=document.getElementById('click');
ClrBtn.addEventListener('click',()=>{
location.reload();


})



