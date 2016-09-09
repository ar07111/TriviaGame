
$('#startButton').on('click',function(){
    for (var i = 0;i<questions.lentgh; i++) {
        questions[i]
    }
})


var questions =[{
    question: "Where is Dwayne Wade place of birth",
    answers: ["Miami","Chicago","New York","Minnesota"],
    correctAnswer: "Chicago"
}, {
    question: "Where is Lebron James place of birth",
    answers: ["Miami","Chicago","New York","Cleveand"],
    correctAnswer: "Cleveand"
}, {
    question: " Where is Michael Jordan place of birth",
    answers: ["Chicago", "New York", "Charlotte", "Texas"],
    correctAnswer: "New York"
},
}]


// <var audio = new Audio('https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90');



// setTimeout(fiveSeconds, 1000 * 5);
// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(timeUp, 1000 * 15);


// function fiveSeconds() {
//     // Once five seconds pass, send an alert and state the time remaining in the "time-left" div.
//     $('#time-left').html('<h2>About 10 Seconds Left!</h2>');
//     alert('10 seconds left');
// }

// function tenSeconds() {
//     // Once ten seconds pass, send an alert and state the time remaining in the "time-left" div.
//     $('#time-left').html('<h2>About 5 Seconds Left!</h2>');
//     alert('5 seconds left');
// }

// function timeUp(){
//     // Once Fifteen seconds pass, time is up! 
//     // Send an alert and have the "time-left" div let the user know.
//     console.log('done');
//     $('#time-left').html('<h2>Time\'s Up!</h2>');
//     alert('time is up');

   
}