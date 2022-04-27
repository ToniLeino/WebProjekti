let points = 0;
const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
const WRONG_ANSWER = "Vastauksesi on väärin!";
const ANSWER_ERROR = "Valitse vastaus ennen tarkistusta!";
/*Kysymys Yksi*/
function question1() {
    let result = document.getElementById("answer-result1");
    let firstAnswer = document.getElementById("select1.1");
    let secondAnswer = document.getElementById("select1.2");
    let thirdAnswer = document.getElementById("select1.3");
    let fourthAnswer = document.getElementById("select1.4");
    /*tämä on vain lippuvisan oikea vastaus, täytyy keksiä joku muu tapa tähän */
    let correctAnswer = document.getElementById("select1.2").checked;
    result.innerHTML = "";
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        document.getElementById("check-btn1").disabled = true;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}
/*Kysymys kaksi*/
function question2() {
    let result = document.getElementById("answer-result2");
    let firstAnswer = document.getElementById("select2.1");
    let secondAnswer = document.getElementById("select2.2");
    let thirdAnswer = document.getElementById("select2.3");
    let fourthAnswer = document.getElementById("select2.4");
    let correctAnswer = document.getElementById("select2.3").checked;
    result.innerHTML = "";
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        document.getElementById("check-btn2").disabled = true;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}
/*Kysymys kolme*/
function question3() {
    let result = document.getElementById("answer-result3");
    let firstAnswer = document.getElementById("select3.1");
    let secondAnswer = document.getElementById("select3.2");
    let thirdAnswer = document.getElementById("select3.3");
    let fourthAnswer = document.getElementById("select3.4");
    let correctAnswer = document.getElementById("select3.1").checked;
    result.innerHTML = "";
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        document.getElementById("check-btn3").disabled = true;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}
/*Kysymys neljä*/
function question4() {
    let result = document.getElementById("answer-result4");
    let firstAnswer = document.getElementById("select4.1");
    let secondAnswer = document.getElementById("select4.2");
    let thirdAnswer = document.getElementById("select4.3");
    let fourthAnswer = document.getElementById("select4.4");
    let correctAnswer = document.getElementById("select4.4").checked;
    result.innerHTML = "";
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        document.getElementById("check-btn4").disabled = true;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}
/*Kysymys viisi*/
function question5() {
    let result = document.getElementById("answer-result5");
    let firstAnswer = document.getElementById("select5.1");
    let secondAnswer = document.getElementById("select5.2");
    let thirdAnswer = document.getElementById("select5.3");
    let fourthAnswer = document.getElementById("select5.4");
    let correctAnswer = document.getElementById("select5.2").checked;
    result.innerHTML = "";
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        document.getElementById("check-btn5").disabled = true;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}

function checkResult() {
    let finalResult = points + " / 5 !";
    document.getElementById("printFinalResult").innerHTML = finalResult;
}