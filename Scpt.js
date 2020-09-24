function Check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct = 0;
   
if (question1 === "Alerts") {
    correct++;
}

if (question2 === "Parathesis") {
    correct++;

}

if (question3 === "All of the above") {
    correct++;

}

if (question4 === "Quotes") {
    correct++;

}


document.getElementById("after_submit").style.visibility= "visible";

document.getElementById("number_correct").innerHTML = "You've got " + correct  + " correct.";
};