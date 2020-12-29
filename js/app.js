'use strict'


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
 cheack=prompt("we must cheack you are report or not if you not please enter this number " + randomNum)


}}


var firstQuestion=confirm("did we meet before ? if your answer yes click ok if no click cancel ?")
//console.log(firstquestion)

if (firstQuestion === true){

    alert("thats good "+ userNameVisetor + "  :) thats easy to guess after 5 question" )}
    else {
alert ("i hope to meet you soon "+ userNameVisetor +" but try to guess this question")

    }

var secondQueston=prompt("Did I study BA? You can choose the answer from here?(yes,No)");

//console.log(secondqueston);
if(secondQueston.toLowerCase()==="yes"){

    alert ("yes thats right ")
}
else {

    alert("thats wrong i actulle have BA ")
}

var thrQueston=prompt("did i work in programing when i graduated? (y,n)" );

//console.log(thrqueston);
if (thrQueston.toLowerCase()==="n"){


    alert ("yes thats right i was working in sales")
}else {
alert("that wrong but i wish");
}


var fourQueston=prompt("am i 24 years old ? (yes,no) ");
if (fourQueston.toLowerCase()=== "yes"){

    alert ("yes thats right ")
}
else {

    alert("No im 24 years old ")


}

var fiveQueston=prompt("is madried is the best football team for me ? (yes,no) ");
if (fiveQueston.toLowerCase()=== "yes"){

    alert ("yes thats right ")
}
else {

    alert("no i love madried")

}

var sixQueston=prompt("am i working now ? (yes,no) ");
if (sixQueston.toLowerCase()=== "no"){

    alert ("yes thats right ")
}
else {

    alert("No im not ")

}
alert("welcome in my cv website you can see it now " + userNameVisetor)
