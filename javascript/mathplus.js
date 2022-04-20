//random generaattori
    
    let points = 0;
    const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
    const WRONG_ANSWER = "Vastauksesi on väärin!";
    const ANSWER_ERROR = "Valitse vastaus ennen tarkistusta!";


    let min = 1;
    let max = 25;
    let int1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let int2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let int3 = Math.floor(Math.random() * (max - min + 1)) + min;
    let int4 = Math.floor(Math.random() * (max - min + 1)) + min;
    let int5 = Math.floor(Math.random() * (max - min + 1)) + min;
    let int6 = Math.floor(Math.random() * (max - min + 1)) + min;

    //Tehtävä yksi

    document.getElementById("questionYksi").innerHTML = int1 + " " + "+" + " " + int2 + " = ";
    let plusanswer = int1 + int2;

    function question1() {
        let uanswer = document.getElementById("vastaus1").value;
            if (uanswer == plusanswer) {
                tarkistus1.innerHTML = RIGHT_ANSWER;
                points++;
            } else {
                tarkistus1.innerHTML = WRONG_ANSWER;   
                document.getElementById("oikeavastaus1").innerHTML = "Oikea vastaus on " + plusanswer;
            }
            document.getElementById("check-btn1").disabled = true;
    }
    //tehtävä yksi loppuu

    //tehtävä kaksi
    document.getElementById("questionKaksi").innerHTML = int4  + " + " + int5 + " + " + int6 + " = ";
    let plusanswer2 = int4 + int5 + int6;

    function question2() {
        let uanswer = document.getElementById("vastaus2").value;
            if (uanswer == plusanswer2) {
            tarkistus2.innerHTML = RIGHT_ANSWER;
            points++;
         } else {
            tarkistus2.innerHTML = WRONG_ANSWER;   
            document.getElementById("oikeavastaus2").innerHTML = "Oikea vastaus on " + plusanswer2;
        }
        document.getElementById("check-btn2").disabled = true;
    }
    // tehtävä kaksi loppu

    //tehtävä kolme
    document.getElementById("questionKolme").innerHTML = int2  + " - " + int3 + " = ";
    let plusanswer3 = int2 - int3;

    function question3() {
        let uanswer = document.getElementById("vastaus3").value;
            if (uanswer == plusanswer3) {
                tarkistus3.innerHTML = RIGHT_ANSWER;
                points++;
             } else {
                tarkistus3.innerHTML = WRONG_ANSWER;  
                document.getElementById("oikeavastaus3").innerHTML = "Oikea vastaus on " + plusanswer3;
            }
        document.getElementById("check-btn3").disabled = true;
          
    }
    //tehtävä kolme loppuu

    //tehtävä neljä
    document.getElementById("questionNelja").innerHTML = int1  + " - " + int6 + " - " + int4 + " = ";
    let plusanswer4 = int1 - int6 - int4;

    function question4() {
        let uanswer = document.getElementById("vastaus4").value;
            if (uanswer == plusanswer4) {
            tarkistus4.innerHTML = RIGHT_ANSWER;
            points++;
         } else{
            tarkistus4.innerHTML = WRONG_ANSWER;  
            document.getElementById("oikeavastaus4").innerHTML = "Oikea vastaus on " + plusanswer4;
        }
        document.getElementById("check-btn4").disabled = true;
    }
    //tehtävä neljä loppuu

    //tehtvä viisi
    document.getElementById("questionViisi").innerHTML = int3  + " - " + int5 + " + " + int2 + " = ";
    let plusanswer5 = int3 - int5 + int2;

    function question5() {
        let uanswer = document.getElementById("vastaus5").value;
            if (uanswer == plusanswer5) {
            tarkistus5.innerHTML = RIGHT_ANSWER;
            points++;
            } else {
            tarkistus5.innerHTML = WRONG_ANSWER;
            document.getElementById("oikeavastaus5").innerHTML = "Oikea vastaus on " + plusanswer5;
          }
          document.getElementById("check-btn5").disabled = true;    
    }
    //tehtävä viisi loppuu

    //tarkista tulokset 

    function checkResult() {
        let finalResult = points + " / 5 !";
        document.getElementById("printFinalResult").innerHTML = finalResult;
    }

    //tarkista tulokset loppuu