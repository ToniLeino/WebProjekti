let pisteet = 0;
const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
const WRONG_ANSWER = "Vastauksesi on väärin!";
const ANSWER_ERROR = "Valitse vastaus ennen tarkistusta!";

function question1() {
    let result = document.getElementById("answer-result");
    let firstAnswer = document.getElementById("select1.1");
    let secondAnswer = document.getElementById("select1.2");
    let thirdAnswer = document.getElementById("select1.3");
    let fourthAnswer = document.getElementById("select1.4");
    let radio = document.querySelector("input[type=radio]:checked");
    let correctAnswer = document.getElementById("select1.3").checked;
    result.innerHTML = "";
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            pisteet++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        radio.checked = false;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}

/*function question2() {
    let result = document.getElementById("teksti2");
    let firstAnswer = document.getElementById("o2.1");
    let secondAnswer = document.getElementById("o2.2");
    let thirdAnswer = document.getElementById("o2.3");
    let fourthAnswer = document.getElementById("o2.4");
    let radio = document.querySelector("input[type=radio][name=ree]:checked");
    let oikeaVastaus = document.getElementById("o2.2").checked;
    result.innerHTML = "";
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        if (oikeaVastaus) {
            result.innerHTML = RIGHT_ANSWER;
            pisteet++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        radio.checked = false;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}

function question3() {
    let result = document.getElementById("teksti3");
    let firstAnswer = document.getElementById("o3.1");
    let secondAnswer = document.getElementById("o3.2");
    let thirdAnswer = document.getElementById("o3.3");
    let fourthAnswer = document.getElementById("o3.4");
    let radio = document.querySelector("input[type=radio][name=ree]:checked");
    let oikeaVastaus = document.getElementById("o3.3").checked;
    result.innerHTML = "";
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        if (oikeaVastaus) {
            result.innerHTML = RIGHT_ANSWER;
            pisteet++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        radio.checked = false;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}

function question4() {
    let result = document.getElementById("teksti4");
    let firstAnswer = document.getElementById("o4.1");
    let secondAnswer = document.getElementById("o4.2");
    let thirdAnswer = document.getElementById("o4.3");
    let fourthAnswer = document.getElementById("o4.4");
    let radio = document.querySelector("input[type=radio][name=ree]:checked");
    let oikeaVastaus = document.getElementById("o4.4").checked;
    result.innerHTML = "";
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        if (oikeaVastaus) {
            result.innerHTML = RIGHT_ANSWER;
            pisteet++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        radio.checked = false;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}

function question5() {
    let result = document.getElementById("teksti5");
    let firstAnswer = document.getElementById("o5.1");
    let secondAnswer = document.getElementById("o5.2");
    let thirdAnswer = document.getElementById("o5.3");
    let fourthAnswer = document.getElementById("o5.4");
    let radio = document.querySelector("input[type=radio][name=ree]:checked");
    let oikeaVastaus = document.getElementById("o5.5").checked;
    result.innerHTML = "";
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        if (oikeaVastaus) {
            result.innerHTML = RIGHT_ANSWER;
            pisteet++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        radio.checked = false;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}

function result() {
    let loppuTulos = pisteet + " / 5 !";
    document.getElementById("lobutulos").innerHTML = loppuTulos;
}*/