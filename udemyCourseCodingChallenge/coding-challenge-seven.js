function Question(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer
}

var mathQuestion = new Question("what is 5 * 5?", [20, 25, 30, 35], 2);

var sciQuesstion = new Question("what is the sun made of?", ["hydrogen", "oxygen", "phosphorus", "potassium"], 0);

var musicQuestion = new Question("how many albums do QOTSA have?", [3, 5, 6, 7], 3);

var questionList = [mathQuestion, sciQuesstion, musicQuestion];

Question.prototype.writeQuestion = function(){
    console.log(this.question);

    console.log("write the index of the correct answer");
    for(item of this.answers){
        console.log(item);
    }

}

Question.prototype.checkAnswer = function(answer){
    if(answer === this.answer){console.log(true);}
    else{console.log(false);}
}


var randomIndex = Math.floor(Math.random() * questionList.length);
questionList[randomIndex].writeQuestion();
// var userAnswer = prompt("enter an index");