// Author : Ilona Latvalehto 
let points = 0;
const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
const WRONG_ANSWER = "Vastauksesi on väärin!";
const ANSWER_ERROR = "Valitse vastaus ennen tarkistusta!";

function question1() {
    let result = document.getElementById("answer-result1");
    let firstAnswer = document.getElementById("select1.1");
    let secondAnswer = document.getElementById("select1.2");
    let thirdAnswer = document.getElementById("select1.3");
    let fourthAnswer = document.getElementById("select1.4");
    let correctAnswer = document.getElementById("select1.2").checked;
    let wrongLabels = document.getElementsByClassName("first-labels");
    let correctLabel = document.getElementById("correct-first-label");
    result.innerHTML = "";
    // Tarkistetaan onko jokin vastaus valittu
    if (
        firstAnswer.checked ||
        secondAnswer.checked ||
        thirdAnswer.checked ||
        fourthAnswer.checked
    ) {
        //Tarkistetaan onko jokin vastaus valittu, jos ei, näytetään virheviesti
        if (correctAnswer) {
            result.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            result.innerHTML = WRONG_ANSWER;
        }
        for (let i = 0; i < wrongLabels.length; i++) {
            wrongLabels[i].style.backgroundColor = "red";
        }
        correctLabel.style.backgroundColor = "lightgreen";
        //correctLabel.style.border = "solid 2px yellow";
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
    // Vaihtoehdot 
    let result = document.getElementById("answer-result2");
    let firstAnswer = document.getElementById("select2.1");
    let secondAnswer = document.getElementById("select2.2");
    let thirdAnswer = document.getElementById("select2.3");
    let fourthAnswer = document.getElementById("select2.4");
    let correctAnswer = document.getElementById("select2.4").checked;
    let wrongLabels = document.getElementsByClassName("second-labels");
    let correctLabel = document.getElementById("correct-second-label");
    result.innerHTML = "";
    //Valinnan tarkistus
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
        for (let i = 0; i < wrongLabels.length; i++) {
            wrongLabels[i].style.backgroundColor = "red";
        }
        correctLabel.style.backgroundColor = "lightgreen";
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
    let result = document.getElementById("answer-result3");
    let firstAnswer = document.getElementById("select3.1");
    let secondAnswer = document.getElementById("select3.2");
    let thirdAnswer = document.getElementById("select3.3");
    let fourthAnswer = document.getElementById("select3.4");
    let correctAnswer = document.getElementById("select3.1").checked;
    let wrongLabels = document.getElementsByClassName("third-labels");
    let correctLabel = document.getElementById("correct-third-label");
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
        for (let i = 0; i < wrongLabels.length; i++) {
            wrongLabels[i].style.backgroundColor = "red";
        }
        correctLabel.style.backgroundColor = "lightgreen";
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
    let result = document.getElementById("answer-result4");
    let firstAnswer = document.getElementById("select4.1");
    let secondAnswer = document.getElementById("select4.2");
    let thirdAnswer = document.getElementById("select4.3");
    let fourthAnswer = document.getElementById("select4.4");
    let correctAnswer = document.getElementById("select4.2").checked;
    let wrongLabels = document.getElementsByClassName("fourth-labels");
    let correctLabel = document.getElementById("correct-fourth-label");
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
        for (let i = 0; i < wrongLabels.length; i++) {
            wrongLabels[i].style.backgroundColor = "red";
        }
        correctLabel.style.backgroundColor = "lightgreen";
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
    let result = document.getElementById("answer-result5");
    let firstAnswer = document.getElementById("select5.1");
    let secondAnswer = document.getElementById("select5.2");
    let thirdAnswer = document.getElementById("select5.3");
    let fourthAnswer = document.getElementById("select5.4");
    let correctAnswer = document.getElementById("select5.3").checked;
    let wrongLabels = document.getElementsByClassName("fifth-labels");
    let correctLabel = document.getElementById("correct-fifth-label");
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
        for (let i = 0; i < wrongLabels.length; i++) {
            wrongLabels[i].style.backgroundColor = "red";
        }
        correctLabel.style.backgroundColor = "lightgreen";
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
        }
        if (points > 2) {
            let finalResult =
                "Sait " + points + " / 5 pistettä" + "<br>" + "Erinomaista työtä!";
            finalInput.innerHTML = finalResult;
        }
        //Kutsutaan confetti funktio, mikäli tietovisasta saa täydet pisteet
        if (points == 5) {
            let finalResult =
                "Sait " + points + " / 5 pistettä" + "<br>" + "Erinomaista työtä!";
            finalInput.innerHTML = finalResult;

            // Seuraava koodi on otettu netistä lähde: https://dev.to/official_fire/creating-a-confetti-effect-in-5-minutes-16h3
            // for starting the confetti
            const start = () => {
                setTimeout(function() {
                    confetti.start();
                }, 1000);
                // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
            };

            //  for stopping the confetti

            const stop = () => {
                setTimeout(function() {
                    confetti.stop();
                }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
            };
            // after this here we are calling both the function so it works
            start();
            stop();

            // if you dont want to make it stop and make it infinite you can just remove the stop function
        }

        document.getElementById("final-check-btn").disabled = true;
    } else {
        finalInput.innerHTML = "Vastaa ensin kaikkiin kysymyksiin!";
    }
}   
//header toggle buttoni
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})