let pisteet = 0;
const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
const WRONG_ANSWER = "Vastauksesi on väärin!";

function question1() {
    document.getElementById("answer-result").innerHTML = "";
    let oikeaVastaus = document.getElementById("select1.1").checked;
    if (oikeaVastaus) {
        document.getElementById("answer-result").innerHTML = RIGHT_ANSWER;
        pisteet++;
    } else {
        document.getElementById("answer-result").innerHTML = WRONG_ANSWER;
    }
    document.getElementById("select1.1").disabled = true;
    document.getElementById("select1.2").disabled = true;
    document.getElementById("select1.3").disabled = true;
    document.getElementById("select1.4").disabled = true;
}

/*function question2() {
    document.getElementById("teksti2").innerHTML = "";
    const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
    const WRONG_ANSWER = "Vastauksesi on väärin! Olet idiootti!";
    let oikeaVastaus = document.getElementById("o2.2").checked;
    if (oikeaVastaus) {
        document.getElementById("teksti2").innerHTML = RIGHT_ANSWER;
        pisteet++;
    } else {
        document.getElementById("teksti2").innerHTML = WRONG_ANSWER;
    }
    document.getElementById("o2.1").disabled = true;
    document.getElementById("o2.2").disabled = true;
    document.getElementById("o2.3").disabled = true;
    document.getElementById("o2.4").disabled = true;
}

function question3() {
    document.getElementById("teksti3").innerHTML = "";
    const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
    const WRONG_ANSWER = "Vastauksesi on väärin! Olet idiootti!";
    let oikeaVastaus = document.getElementById("o3.3").checked;
    if (oikeaVastaus) {
        document.getElementById("teksti3").innerHTML = RIGHT_ANSWER;
        pisteet++;
    } else {
        document.getElementById("teksti3").innerHTML = WRONG_ANSWER;
    }
    document.getElementById("o3.1").disabled = true;
    document.getElementById("o3.2").disabled = true;
    document.getElementById("o3.3").disabled = true;
    document.getElementById("o3.4").disabled = true;
}

function question4() {
    document.getElementById("teksti4").innerHTML = "";
    const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
    const WRONG_ANSWER = "Vastauksesi on väärin! Olet idiootti!";
    let oikeaVastaus = document.getElementById("o4.4").checked;
    if (oikeaVastaus) {
        document.getElementById("teksti4").innerHTML = RIGHT_ANSWER;
        pisteet++;
    } else {
        document.getElementById("teksti4").innerHTML = WRONG_ANSWER;
    }
    document.getElementById("o4.1").disabled = true;
    document.getElementById("o4.2").disabled = true;
    document.getElementById("o4.3").disabled = true;
    document.getElementById("o4.4").disabled = true;
    let loppuTulos = pisteet + " / 5 !";
    document.getElementById("lobutulos").innerHTML = loppuTulos;
}*/