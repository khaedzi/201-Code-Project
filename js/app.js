'use strict'

var thescore=7;
var userNameVisetor=prompt("Hello can you give me usirname ?")
//console.log (userNameVietor);
alert("Hello "+ userNameVisetor + " Welcome in my cv wibsite" )
var randomNum=Math.floor(Math.random() * 1000);  
//console.log(randomNum);
var cheack=prompt("we must cheack you are report or not if you not please enter this number " + randomNum)
//console.log(cheack);
for(var i=0;randomNum!=cheack; i++){
if (randomNum==cheack){
    alert("welcome "+ userNameVisetor);
}
else{
    thescore--;
 cheack=prompt("we must cheack you are report or not if you not please enter this number " + randomNum)


}}


var firstQuestion=confirm("did we meet before ? if your answer yes click ok if no click cancel ?")
//console.log(firstquestion)

if (firstQuestion === true){

    alert("thats good "+ userNameVisetor + "  :) thats easy to guess after 5 question" )}
    else {
        thescore--;

alert ("i hope to meet you soon "+ userNameVisetor +" but try to guess this question")

    }

var secondQueston=prompt("Did I study BA? You can choose the answer from here?(yes,No)");

//console.log(secondqueston);
if(secondQueston.toLowerCase()==="yes"){

    alert ("yes thats right ")
}
else {
    thescore--;

    alert("thats wrong i actulle have BA ")
}

var thrQueston=prompt("did i work in programing when i graduated? (y,n)" );

//console.log(thrqueston);
if (thrQueston.toLowerCase()==="n"){


    alert ("yes thats right i was working in sales")
}else {
    thescore--;

    alert("that wrong but i wish");
}



var fiveQueston=prompt("is madried is the best football team for me ? (yes,no) ");
if (fiveQueston.toLowerCase()=== "yes"){

    alert ("yes thats right ")
}
else {
    thescore--;

    alert("no i love madried")

}

var sixQueston=prompt("am i working now ? (yes,no) ");
if (sixQueston.toLowerCase()=== "no"){

    alert ("yes thats right ")
}
else {

    thescore--;
    alert("No im not ")

}

alert("your score is " + thescore + " / 7");

var score=4;

for (var x =0 ; x < 4;){




var fourQueston=prompt("can you guess how old am i ! ? ");
if (fourQueston<24){

    alert ("too low can you guess again")
    x++;
score=score-1;    

}
else if (fourQueston==24){

    alert("yes im 24 years old")
break;

}
else if(fourQueston>=25)
{
alert ("to height can you guess again")
x++;
score=score-1;    


}


}
if(true){
alert("you got "  + score +" / 4" )}
/*
var firstArray=["17","15","10","18","13","7"];
for(var m=0;m<6;m++){

var userGuess=prompt("please guess number from 1 - 20");
if (userGuess=="17" || userGuess=="15" || userGuess=="10" || userGuess=="18" || userGuess=="13" || userGuess=="7" ){

    alert("thats corect you git ");
break;
}
else if (userGuess!="17" || userGuess!="15" || userGuess!="10" || userGuess!="18" || userGuess!="13" || userGuess!="7"){

    
    alert("thats wrong you can try again");

}
 if(m==6){
    alert("thats bad you got ");
}
}
*/


var firstArray=["17","15","10","18","13","7"];
// var userGuess=prompt("please guess number from 1 - 20");
// var ss=0;

// for(var m=0; ss<firstArray.lengt;){
//   if(userGuess==firstArray[m]){
//     alert("yes that one of thim");
// break;
// }
// else if(userGuess!=firstArray[m]) {

//     var userGuess=prompt("please guess number from 1 - 20");
//     ss++;
// }

// }
//  if(ss==6){
//     alert("this is the numbers " + firstArray.toString());

// }
for (var k =0  ;k <=6 ; k++){

    var userGuess=prompt("please guess number from 1 - 20");    
    for(var j =0 ; j< firstArray.length;j++ ){
        if(userGuess==firstArray[j]){
         alert("yes that one of thim");
            k=6;

            }
            
        

        }
        if (k==6){
            alert("this is the numbers " + firstArray.toString());
           break;
            }    
    }        
        



