'use strict'


var usernamevisetor=prompt("Hello can you give me usirname ?")
//console.log (usernamevisetor);
alert("Hello "+ usernamevisetor + " Welcome in my cv wibsite" )
var randomnum=Math.floor(Math.random() * 1000);  
//console.log(randomnum);
var cheack=prompt("we must cheack you are report or not if you not please enter this number " + randomnum)
//console.log(cheack);
for(var i=0;randomnum!=cheack; i++){
if (randomnum==cheack){
    alert("welcome "+ usernamevisetor);
}
else{
 cheack=prompt("we must cheack you are report or not if you not please enter this number " + randomnum)


}}


var firstquestion=confirm("did we meet before ? if your answer yes click ok if no click cancel ?")
//console.log(firstquestion)

if (firstquestion === true){

    alert("thats good "+ usernamevisetor + "  :) thats easy to guess after 5 question" )}
    else {
alert ("i hope to meet you soon "+ usernamevisetor +" but try to guess this question")

    }

var secondqueston=prompt("Did I study BA? You can choose the answer from here?(yes,No)");

//console.log(secondqueston);
if(secondqueston.toLowerCase()==="yes"){

    alert ("yes thats right ")
}
else {

    alert("thats wrong i actulle have BA ")
}

var thrqueston=prompt("did i work in programing when i graduated? (y,n)" );

//console.log(thrqueston);
if (thrqueston.toLowerCase()==="n"){


    alert ("yes thats right i was working in sales")
}else {
alert("that wrong but i wish");
}


var fourqueston=prompt("am i 24 years old ? (yes,no) ");
if (fourqueston.toLowerCase()=== "yes"){

    alert ("yes thats right ")
}
else {

    alert("No im 24 years old ")


}

var fivequeston=prompt("is madried is the best football team for me ? (yes,no) ");
if (fivequeston.toLowerCase()=== "yes"){

    alert ("yes thats right ")
}
else {

    alert("no i love madried")

}

var sixqueston=prompt("am i working now ? (yes,no) ");
if (sixqueston.toLowerCase()=== "no"){

    alert ("yes thats right ")
}
else {

    alert("No im not ")

}
alert("welcome in my cv website you can see it now " + usernamevisetor)
