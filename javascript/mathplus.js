//random generaattori
    let points = 0;
    const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
    const WRONG_ANSWER = "Vastauksesi on väärin!";
    const ANSWER_ERROR = "Valitse vastaus ennen tarkistusta!";


    let min = 1;
    let max = 25;
    let int1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let int2 = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("questionYksi").innerHTML = int1 + " " + "+" + " " + int2 + " = ";
    
    let plusanswer = int1 + int2;

    function question1() {
        let uanswer = document.getElementById("vastaus1").value;
            if (uanswer == plusanswer) {
                tarkistus1.innerHTML = RIGHT_ANSWER;
                points++;
            } else {
                tarkistus1.innerHTML = WRONG_ANSWER;   
            }
            document.getElementById("check-btn1").disabled = true;
    }