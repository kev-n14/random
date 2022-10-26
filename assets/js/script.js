const nextBtn = document.getElementById('next');
const answers = document.getElementsByClassName("answers");

// const answerHistory = [];
var pos = 0,
    buttons, questionArea, content, question, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [{ //1
    question: "How many Infinity Stones are there?",
    a: "3",
    b: "6",
    c: "4",
    d: "9",
    answer: "B",

    img: "assets/images/question1.jpg"
},
{ //1
    question: "Where is Captain America from?",
    a: "Brooklyn",
    b: "Limerick",
    c: "Clare",
    d: "New York",
    answer: "A",

    img: "assets/images/question2.jpg"
},
{ //1
    question: "Who is Tony Stark's father?",
    a: "Edward Stark",
    b: "Howard Shark",
    c: "Tom Ryan",
    d: "Howard Stark",
    answer: "D",

    img: "assets/images/question3.jpg"
}];



function get(x) {
    return document.getElementById(x);
}

function renderQuestion() {

    questionArea = get("questionArea");

    if (pos >= questions.length) {
        questionArea.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        get("content").innerHTML = "questionArea completed";

        pos = 0;
        correct = 0;

        return false;
    }

    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    chD = questions[pos].d;
    img = questions[pos].img;

    get("content").innerHTML = `<h3>Question ${pos + 1} of ${questions.length}</h3>`;
    questionArea.innerHTML = "<h3>" + question + "</h3>";

    questionArea.innerHTML += "<img src=\"" + img + "\" width=\"200\" height=\"200\"><br>";

    questionArea.innerHTML += "<div class='choices'><label class='answers'> <input type='radio' name='choices' value='A'> " + chA + "</label>" +
        "<label class='answers'> <input type='radio' name='choices' value='B' id='b'> " + chB + "</label>" +
        "<label class='answers'> <input type='radio' name='choices' value='C'> " + chC + "</label>" +
        "<label class='answers'> <input type='radio' name='choices' value='D'> " + chD + "</label></div>";

    questionArea.innerHTML += "<div class='buttons'><button onclick='restartBtn()' class='btn-grid' id='restartBtn'>Restart</button>" +
        "<button onclick='prev()' class='btn-grid'>Prev</button>" +
        "<button onclick='next()' class='btn-grid'>Next</button>" +
        "<button onclick='checkAnswer()'class='btn-grid'>Submit</button></div>";

}

function checkAnswer() {
    choices = document.getElementsByName("choices");
    // const answerHistory = [];

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;


        }
    }

    if (choice == questions[pos].answer) {
        correct++;

    }
    pos++;


    renderQuestion();
}
function next() {

    pos++;

    renderQuestion();
}

function prev() {

    if (pos >= 1) {

        pos--;
        answerHistory[pos] = choices;

    }


    renderQuestion();
}
function restartBtn() {

    pos = 0,
        buttons, questionArea, content, question, choices, chA, chB, chC, chD, correct = 0;


    for (var i = 0; i < choices.length; i++) {
        choice = 0;
    }
    renderQuestion();
}

window.addEventListener("load", renderQuestion);
