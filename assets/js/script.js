var pos = 0,
    buttons, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
// const myImage = new Image(100, 600);
// // myImage.src = 'assets/images/question1.jpg';
// document.body.appendChild(myImage);


var questions = [{ //1
    question: "How many Infinity Stones are there?",
    a: "3",
    b: "6",
    c: "4",
    d: "9",
    answer: "B",
    //Add property to hold image source uri, either local or online
    img: "assets/images/question1.jpg"
},
{ //1
    question: "Where is Captain America from?",
    a: "Brooklyn",
    b: "Limerick",
    c: "Clare",
    d: "New York",
    answer: "A",
    //Add property to hold image source uri, either local or online
    img: "assets/images/question2.jpg"
},
{ //1
    question: "Who is Tony Stark's father?",
    a: "Edward Stark",
    b: "Howard Shark",
    c: "Tom Ryan",
    d: "Howard Stark",
    answer: "D",
    //Add property to hold image source uri, either local or online
    img: "assets/images/question3.jpg"
}];

function get(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    buttons = get("buttons");
    test = get("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        get("test_status").innerHTML = "Test completed";

        pos = 0;
        correct = 0;

        return false;
    }
    // get("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;

    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    chD = questions[pos].d;
    //Add local var to hold uri
    img = questions[pos].img;
    get("test_status").innerHTML = `<h3>Question ${pos + 1} of ${questions.length}</h3>`;
    test.innerHTML = "<h3>" + question + "</h3>";

    //Add <img> element to DOM with source
    test.innerHTML += "<img src=\"" + img + "\" width=\"200\" height=\"200\"><br>";

    test.innerHTML += "<div class='choices'><label class='answers'> <input type='radio' name='choices' value='A'> " + chA + "</label>" +
        "<label class='answers'> <input type='radio' name='choices' value='B'> " + chB + "</label>" +
        "<label class='answers'> <input type='radio' name='choices' value='C'> " + chC + "</label>" +
        "<label class='answers'> <input type='radio' name='choices' value='D'> " + chD + "</label></div>";

    test.innerHTML += "<div class='buttons'><button onclick='' class='btn-grid'>Prev</button>" +
        "<button onclick=''class='btn-grid'>Next</button>" +
        "<button onclick='checkAnswer()'class='btn-grid'>Submit Answer</button></div>";

}

function checkAnswer() {
    choices = document.getElementsByName("choices");
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

window.addEventListener("load", renderQuestion);