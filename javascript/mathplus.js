    //mathplus.js tekijä Eetu Huttula
    
    
    let points = 0;
    let answered = 5;
    const RIGHT_ANSWER = "Vastauksesi on oikein. Hyvää työtä!";
    const WRONG_ANSWER = "Vastauksesi on väärin.";
    const pisteet1_2 = "Ensi kerralla paremmin!"
    const pisteet3_5 = "Hienoa työtä"

    //Satunnais lukuja

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
            answered-- 
         } else {
            tarkistus1.innerHTML = WRONG_ANSWER + " Oikea vastaus on " + plusanswer;  
            answered-- 
        }
        document.getElementById("check-btn1").disabled = true;
    }

    //tehtävä kaksi

    document.getElementById("questionKaksi").innerHTML = int4  + " + " + int5 + " + " + int6 + " = ";
    let plusanswer2 = int4 + int5 + int6;

    function question2() {
        let uanswer = document.getElementById("vastaus2").value;
            if (uanswer == plusanswer2) {
            tarkistus2.innerHTML = RIGHT_ANSWER;
            points++;
            answered-- 
         } else {
            tarkistus2.innerHTML = WRONG_ANSWER + " Oikea vastaus on " + plusanswer2;;   
            answered--
        }
        document.getElementById("check-btn2").disabled = true;
    }

    //tehtävä kolme

    document.getElementById("questionKolme").innerHTML = int2  + " - " + int3 + " = ";
    let plusanswer3 = int2 - int3;

    function question3() {
        let uanswer = document.getElementById("vastaus3").value;
            if (uanswer == plusanswer3) {
            tarkistus3.innerHTML = RIGHT_ANSWER;
            points++;
            answered-- 
         } else {
            tarkistus3.innerHTML = WRONG_ANSWER + " Oikea vastaus on " + plusanswer3; 
            answered--
        }
        document.getElementById("check-btn3").disabled = true;  
    }

    //tehtävä neljä

    document.getElementById("questionNelja").innerHTML = int1  + " - " + int6 + " - " + int4 + " = ";
    let plusanswer4 = int1 - int6 - int4;

    function question4() {
        let uanswer = document.getElementById("vastaus4").value;
            if (uanswer == plusanswer4) {
            tarkistus4.innerHTML = RIGHT_ANSWER;
            points++;
            answered-- 
         } else{
            tarkistus4.innerHTML = WRONG_ANSWER + " Oikea vastaus on " + plusanswer4;
            answered--  
         }
        document.getElementById("check-btn4").disabled = true;
    }

    //tehtvä viisi

    document.getElementById("questionViisi").innerHTML = int3  + " + " + int5 + " - " + int2 + " = ";
    let plusanswer5 = int3 + int5 - int2;

    function question5() {
        let uanswer = document.getElementById("vastaus5").value;
            if (uanswer == plusanswer5) {
            tarkistus5.innerHTML = RIGHT_ANSWER;
            points++;
            answered-- 
         } else {
            tarkistus5.innerHTML = WRONG_ANSWER + " Oikea vastaus on " + plusanswer5;
            answered--
        }
        document.getElementById("check-btn5").disabled = true;    
    }

    //tarkista tulokset 

    function checkResult() {

        let finalResult = points + " / 5 ";
    let check1 = document.getElementById("check-btn1");
    let check2 = document.getElementById("check-btn2");
    let check3 = document.getElementById("check-btn3");
    let check4 = document.getElementById("check-btn4");
    let check5 = document.getElementById("check-btn5");
    if ( check1.disabled && check2.disabled && check3.disabled && check4.disabled && check5.disabled ){
        if(points < 3){
            document.getElementById("printFinalResult").innerHTML = finalResult + "<br>" + pisteet1_2
        }
        else{
            document.getElementById("printFinalResult").innerHTML = finalResult + "<br>" + pisteet3_5
            
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
        }
    }
    else {
        document.getElementById("printFinalResult").innerHTML =
            "Vastaa ensin kaikkiin kysymyksiin!" +
            " Sinulla on vielä " +
            answered +
            " kysymystä jäljellä.";;
    }
    }