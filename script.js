function nextQuestion(current, next) {
    document.getElementById(current).style.display = "none";
    document.getElementById(next).style.display = "inline-block";
}
function results() {
    calculateResults()
    nextQuestion('q6', 'result')

}

function startOver() {
    nextQuestion('result', 'intro')
}

function calculateResults() {
    const q1Value = getQuestionAnswer("group1");
    const q2Value = getQuestionAnswer("group2");
    const q3Value = getQuestionAnswer("group3");
    const q4Value = getQuestionAnswer("group4");
    const q5Value = getQuestionAnswer("group5");
    const q6Value = getQuestionAnswer("group6");

    document.getElementById("endResult").innerHTML = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value) + Number(q6Value);

    const totalScore = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value) + Number(q6Value)


    if (totalScore <= 2) {
        document.getElementById("endResult").innerHTML = "You know nothing but fake news!"
        document.getElementById("endImg").innerHTML = "<img src=\"fake-news.gif\">";
    } else if (totalScore == 3) {
        document.getElementById("endResult").innerHTML = "You're like the Will Ferrell Sherlock Holmes. Pretty bad, but somehow manages to get the job done."
        document.getElementById("endImg").innerHTML = "<img src=\"detective.png\">";
    } else {
        document.getElementById("endResult").innerHTML = "elementary my dear watson! You can smell a foul news headline a mile away! Well done!"
        document.getElementById("endImg").innerHTML = "<img src=\"sherlock.jpg\">";
    }


}

function getQuestionAnswer(question) {
    const radios1 = document.querySelectorAll(`input[name="${question}"]`);
    console.log(radios1)
    let qValue;
    for (const rb of radios1) {
        if (rb.checked) {
            qValue = rb.value;
            break;
        }
    }
    console.log(qValue)
    return qValue;
}

