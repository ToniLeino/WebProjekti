let points = 0;
const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
const WRONG_ANSWER = "Vastauksesi on väärin!";
const ANSWER_ERROR = "Valitse vastaus ennen tarkistusta!";

function question1() {
    // Kysymyksen vaihtoehdot ja oikea vastaus
    let result = document.getElementById("answer-result1");
    let firstAnswer = document.getElementById("select1.1");
    let secondAnswer = document.getElementById("select1.2");
    let thirdAnswer = document.getElementById("select1.3");
    let fourthAnswer = document.getElementById("select1.4");
    let correctAnswer = document.getElementById("select1.3").checked;
    result.innerHTML = "";
    //Tarkistetaan onko jokin vastaus valittu
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        //Tarkistetaan onko jokin vastaus valittu, mikäli on, ajetaan funktiota eteenpäin, muuten virheviesti
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        //Deaktivoidaan painikkeet kun vastaus on tarkistettu
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        document.getElementById("check-btn1").disabled = true;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}

function question2() {
    // Kysymyksen vaihtoehdot ja oikea vastaus
    let result = document.getElementById("answer-result2");
    let firstAnswer = document.getElementById("select2.1");
    let secondAnswer = document.getElementById("select2.2");
    let thirdAnswer = document.getElementById("select2.3");
    let fourthAnswer = document.getElementById("select2.4");
    let correctAnswer = document.getElementById("select2.1").checked;
    result.innerHTML = "";
    //Tarkistetaan onko jokin vastaus valittu
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        //Tarkistetaan onko jokin vastaus valittu, mikäli on, ajetaan funktiota eteenpäin, muuten virheviesti
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        //Deaktivoidaan painikkeet kun vastaus on tarkistettu
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        document.getElementById("check-btn2").disabled = true;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}

function question3() {
    // Kysymyksen vaihtoehdot ja oikea vastaus
    let result = document.getElementById("answer-result3");
    let firstAnswer = document.getElementById("select3.1");
    let secondAnswer = document.getElementById("select3.2");
    let thirdAnswer = document.getElementById("select3.3");
    let fourthAnswer = document.getElementById("select3.4");
    let correctAnswer = document.getElementById("select3.4").checked;
    result.innerHTML = "";
    //Tarkistetaan onko jokin vastaus valittu
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        //Tarkistetaan onko jokin vastaus valittu, mikäli on, ajetaan funktiota eteenpäin, muuten virheviesti
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        //Deaktivoidaan painikkeet kun vastaus on tarkistettu
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        document.getElementById("check-btn3").disabled = true;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}

function question4() {
    // Kysymyksen vaihtoehdot ja oikea vastaus
    let result = document.getElementById("answer-result4");
    let firstAnswer = document.getElementById("select4.1");
    let secondAnswer = document.getElementById("select4.2");
    let thirdAnswer = document.getElementById("select4.3");
    let fourthAnswer = document.getElementById("select4.4");
    let correctAnswer = document.getElementById("select4.2").checked;
    result.innerHTML = "";
    //Tarkistetaan onko jokin vastaus valittu
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        //Tarkistetaan onko jokin vastaus valittu, mikäli on, ajetaan funktiota eteenpäin, muuten virheviesti
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        //Deaktivoidaan painikkeet kun vastaus on tarkistettu
        firstAnswer.disabled = true;
        secondAnswer.disabled = true;
        thirdAnswer.disabled = true;
        fourthAnswer.disabled = true;
        document.getElementById("check-btn4").disabled = true;
    } else {
        result.innerHTML = ANSWER_ERROR;
    }
}

function question5() {
    // Kysymyksen vaihtoehdot ja oikea vastaus
    let result = document.getElementById("answer-result5");
    let firstAnswer = document.getElementById("select5.1");
    let secondAnswer = document.getElementById("select5.2");
    let thirdAnswer = document.getElementById("select5.3");
    let fourthAnswer = document.getElementById("select5.4");
    let correctAnswer = document.getElementById("select5.4").checked;
    result.innerHTML = "";
    //Tarkistetaan onko jokin vastaus valittu, mikäli on, ajetaan funktiota eteenpäin, muuten virheviesti
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        // Tarkistaa onko valinta oikein ja lisätään sen mukainen teksti sekä mahdollinen piste
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        //Deaktivoidaan painikkeet kun vastaus on tarkistettu
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
    //Määritetään kysymysten tarkistus painikkeet sekä lopputuloksen tulostuskenttä
    let check1 = document.getElementById("check-btn1");
    let check2 = document.getElementById("check-btn2");
    let check3 = document.getElementById("check-btn3");
    let check4 = document.getElementById("check-btn4");
    let check5 = document.getElementById("check-btn5");
    let finalInput = document.getElementById("printFinalResult");
    //Tarkistetaan onko kaikki kysymykset tarkistettu, mikäli on, annetaan lopullinen palaute, muuten virheviesti
    if (
        check1.disabled &&
        check2.disabled &&
        check3.disabled &&
        check4.disabled &&
        check5.disabled
    ) {
        if (points < 3) {
            let finalResult =
                "Sait " +
                points +
                " / 5 pistettä" +
                "<br>" +
                "Parempi onni ensi kerralla!";
            finalInput.innerHTML = finalResult;
        } else {
            let finalResult =
                "Sait " + points + " / 5 pistettä" + "<br>" + "Erinomaista työtä!";
            finalInput.innerHTML = finalResult;
        }
    } else {
        finalInput.innerHTML = "Vastaa ensin kaikkiin kysymyksiin!";
    }
}