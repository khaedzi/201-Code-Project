'use strict'

var thescore = 0;
// var userNameVisetor=prompt("Hello can you give me usirname ?")
// //console.log (userNameVietor);
// alert("Hello "+ userNameVisetor + " Welcome in my cv wibsite" )

// var randomNum=Math.floor(Math.random() * 1000);  
// //console.log(randomNum);
// var cheack=prompt("we must cheack you are report or not if you not please enter this number " + randomNum)
// //console.log(cheack);
// for(var i=0;randomNum!=cheack; i++){
// if (randomNum==cheack){
//     alert("welcome "+ userNameVisetor);
//     thescore++;
// }
// else{
// //thescore--;
//  cheack=prompt("we must cheack you are report or not if you not please enter this number " + randomNum)


//}}
var userNameVisetor=prompt("Hello can you give me usirname ?")
function check(){
   // var userNameVisetor=prompt("Hello can you give me usirname ?")
//console.log (userNameVietor);
alert("Hello "+ userNameVisetor + " Welcome in my cv wibsite" )

var randomNum=Math.floor(Math.random() * 1000);  
//console.log(randomNum);
var cheack=prompt("we must cheack you are report or not if you not please enter this number " + randomNum)
//console.log(cheack);
for(var i=0;randomNum!=cheack; i++){
if (randomNum==cheack){
    alert("welcome "+ userNameVisetor);
    thescore++;
}
else{
//thescore--;
 cheack=prompt("we must cheack you are report or not if you not please enter this number " + randomNum)


}}
}
 check(); 
 q1(); 
 q2(); 
 q3(); 
 q5(); 
 q6(); 
 q7(); 
numbArray(); 


function q1 (){ 
    var firstQuestion=confirm("did we meet before ? if your answer yes click ok if no click cancel ?")
//console.log(firstquestion)

if (firstQuestion === true){

    alert("thats good "+ userNameVisetor + "  :) thats easy to guess after 5 question" )
    thescore++;
}
    else {
       // thescore--;

alert ("i hope to meet you soon "+ userNameVisetor +" but try to guess this question")

    }


}
// var firstQuestion=confirm("did we meet before ? if your answer yes click ok if no click cancel ?")
// //console.log(firstquestion)

// if (firstQuestion === true){

//     alert("thats good "+ userNameVisetor + "  :) thats easy to guess after 5 question" )
//     thescore++;
// }
//     else {
//        // thescore--;

// alert ("i hope to meet you soon "+ userNameVisetor +" but try to guess this question")

//     }

function q2(){
    var secondQueston=prompt("Did I study BA? You can choose the answer from here?(yes,No)");

//console.log(secondqueston);
if(secondQueston.toLowerCase()==="yes" || secondQueston.toLowerCase()==='y'){

    alert ("yes thats right ")
    thescore++; 
}
else {
    //thescore--;

    alert("thats wrong i actulle have BA ")
}

}
// var secondQueston=prompt("Did I study BA? You can choose the answer from here?(yes,No)");

// //console.log(secondqueston);
// if(secondQueston.toLowerCase()==="yes" || secondQueston.toLowerCase()==='y'){

//     alert ("yes thats right ")
//     thescore++; 
// }
// else {
//     //thescore--;

//     alert("thats wrong i actulle have BA ")
// }

function q3(){
    var thrQueston=prompt("did i work in programing when i graduated?" );

    //console.log(thrqueston);
    if (thrQueston.toLowerCase()==="n" || thrQueston.toLowerCase()==='no' ){
    
    
        alert ("yes thats right i was working in sales")
        thescore++;
    }else {
        //thescore--;
    
        alert("that wrong but i wish");
    }
    
}

// var thrQueston=prompt("did i work in programing when i graduated?" );

// //console.log(thrqueston);
// if (thrQueston.toLowerCase()==="n" || thrQueston.toLowerCase()==='no' ){


//     alert ("yes thats right i was working in sales")
//     thescore++;
// }else {
//     //thescore--;

//     alert("that wrong but i wish");
// }


function q5(){
    var fiveQueston=prompt("is madried is the best football team for me ? ");
    if (fiveQueston.toLowerCase()=== "yes" || fiveQueston.toLowerCase()==='y'){
    
        alert ("yes thats right ")
        thescore++;
    }
    else {
        //thescore--;
    
        alert("no i love madried")
    
    }
    
}


// var fiveQueston=prompt("is madried is the best football team for me ? ");
// if (fiveQueston.toLowerCase()=== "yes" || fiveQueston.toLowerCase()==='y'){

//     alert ("yes thats right ")
//     thescore++;
// }
// else {
//     //thescore--;

//     alert("no i love madried")

// }

function q6(){
    var sixQueston=prompt("am i working now ? (yes,no) ");
if (sixQueston.toLowerCase()=== "no" || sixQueston.toLowerCase()==='n' ){

    alert ("yes thats right ")
    thescore++;
}
else {

   // thescore--;
    alert("No im not ")

}

alert("your score is " + thescore + " / 7");
}


// var sixQueston=prompt("am i working now ? (yes,no) ");
// if (sixQueston.toLowerCase()=== "no" || sixQueston.toLowerCase()==='n' ){

//     alert ("yes thats right ")
//     thescore++;
// }
// else {

//    // thescore--;
//     alert("No im not ")

// }

// alert("your score is " + thescore + " / 7");


var score = 0;

function q7(){
    var score = 0;
    for (var x =0 ; x < 4;){




        var fourQueston=prompt("can you guess how old am i ! ? ");
        if (fourQueston<24){
        
            alert ("too low can you guess again")
            x++;
           
        
        }
        else if (fourQueston==24){
        
            alert("yes im 24 years old")
            score++; 
        break;
        
        }
        else if(fourQueston>=25)
        {
        alert ("to height can you guess again")
        x++;
           
        
        
        }
        
        
        }
        if(true){
        alert("you got "  + score +" / 4" )}
}


// for (var x =0 ; x < 4;){




// var fourQueston=prompt("can you guess how old am i ! ? ");
// if (fourQueston<24){

//     alert ("too low can you guess again")
//     x++;
   

// }
// else if (fourQueston==24){

//     alert("yes im 24 years old")
//     score++; 
// break;

// }
// else if(fourQueston>=25)
// {
// alert ("to height can you guess again")
// x++;
   


// }


// }
// if(true){
// alert("you got "  + score +" / 4" )}
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
<<<<<<< HEAD
for (var k =0  ;k <=6 ; k++){
=======
 
function numbArray(){
    var firstArray=["17","15","10","18","13","7"];
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
}

// for (var k =0  ;k <=6 ; k++){
>>>>>>> 77df275615f6e22636c086540bc9f9ecfd580b6e

//     var userGuess=prompt("please guess number from 1 - 20");    
//     for(var j =0 ; j< firstArray.length;j++ ){
//         if(userGuess==firstArray[j]){
//          alert("yes that one of thim");
//             k=6;

//             }
            
        

//         }
//         if (k==6){
//             alert("this is the numbers " + firstArray.toString());
//            break;
//             }    
//     }        
        



