let points = 0;
const RIGHT_ANSWER = "Vastauksesi on oikein. Hyvää työtä.";
const WRONG_ANSWER = "Vastauksesi on väärin,";
const ANSWER_ERROR = "Valitse vastaus ennen tarkistusta.";
const pisteet1_2 = "Ensi kerralla paremmin!"
const pisteet3_5 = "Hienoa työtä"

//Matematiikan tehtävä vaihtoehtoja arrayssä
let kerto1 = ["3 * 5 = ", "6 * 7 = ", "9 * 4 = ", "8 * 6 = "];
let kerto2 = ["6 * 3 * 2 = ", "3 * 3 * 3 = ", "3 * 4 * 4 = ", "7 * 2 * 2 = "];
let jako1 = ["64 / 8 = ", "81 / 9 = ", "36 / 6 = ", "50 / 5 = "];
let jako2 = ["45 / 5 / 3 = ", "72 / 9 / 4 = ", "100 / 10 / 5 = ", "27 / 9 / 3 = "];
let kertoJako = ["4 * 7 / 2 = ", "56 / 7 * 9 = ", "8 * 6 / 4 = ", "36 / 6 * 5 = "];

//Tehtävien tulostus arraystä

let questionYksi = kerto1[(Math.random() * kerto1.length) | 0]
document.getElementById("kysymysYksi").innerHTML = questionYksi
let questionKaksi = kerto2[(Math.random() * kerto2.length) | 0]
document.getElementById("kysymysKaksi").innerHTML = questionKaksi
let questionKolme = jako1[(Math.random() * jako1.length) | 0]
document.getElementById("kysymysKolme").innerHTML = questionKolme
let questionNelja = jako2[(Math.random() * jako2.length) | 0]
document.getElementById("kysymysNelja").innerHTML = questionNelja
let questionViisi = kertoJako[(Math.random() * kertoJako.length) | 0]
document.getElementById("kysymysViisi").innerHTML = questionViisi

//tehtävä 1

function question11() {
    let vastauskentta = document.getElementById("vastaus11").value;
        if (questionYksi == "3 * 5 = " && vastauskentta == 15) {
            tarkistus11.innerHTML = RIGHT_ANSWER;
            points++;
        } 
        else if (questionYksi == "6 * 7 = " && vastauskentta == 42){
            tarkistus11.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else if (questionYksi == "9 * 4 = " && vastauskentta == 36){
            tarkistus11.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else if (questionYksi == "8 * 6 = " && vastauskentta == 48){
            tarkistus11.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else {
            if(questionYksi == "3 * 5 = " && vastauskentta != 15){
                tarkistus11.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "15.";
            }
            else if(questionYksi == "6 * 7 = " && vastauskentta != 42){
                tarkistus11.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "42.";  
            }
            else if (questionYksi == "9 * 4 = " && vastauskentta != 36){
                tarkistus11.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "36.";  
            }
            else if (questionYksi == "8 * 6 = " && vastauskentta != 48){
                tarkistus11.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "48.";
            }
        }
        document.getElementById("check-btn11").disabled = true;
        
}

//tehtävä 2

function question22() {
    let vastauskentta2 = document.getElementById("vastaus12").value;
        if (questionKaksi == "6 * 3 * 2 = " && vastauskentta2 == 36) {
            tarkistus22.innerHTML = RIGHT_ANSWER;
            points++;
        } 
        else if (questionKaksi == "3 * 3 * 3 = " && vastauskentta2 == 27){
            tarkistus22.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else if (questionKaksi == "3 * 4 * 4 = " && vastauskentta2 == 48){
            tarkistus22.innerHTML = RIGHT_ANSWER;
            points++;
       }
       else if (questionKaksi == "7 * 2 * 2 = " && vastauskentta2 == 28){
            tarkistus22.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else {
            if (questionKaksi == "6 * 3 * 2 = " && vastauskentta2 != 36){
                tarkistus22.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "36.";  
            } 
            else if (questionKaksi == "3 * 3 * 3 = " && vastauskentta2 != 27){
                tarkistus22.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "27."; 
            }
            else if (questionKaksi == "3 * 4 * 4 = " && vastauskentta2 != 48){
                tarkistus22.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "48.";
            }
            else if (questionKaksi == "7 * 2 * 2 = " && vastauskentta2 != 28){
                tarkistus22.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "28.";
            }
        }    
        document.getElementById("check-btn12").disabled = true;
}

//tehtävä 3

function question33() {
    let vastauskentta3 = document.getElementById("vastaus13").value;
        if (questionKolme == "64 / 8 = " && vastauskentta3 == 8) {
            tarkistus33.innerHTML = RIGHT_ANSWER;
            points++;
        } 
        else if (questionKolme == "81 / 9 = " && vastauskentta3 == 9){
            tarkistus33.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else if (questionKolme == "36 / 6 = " && vastauskentta3 == 6){
            tarkistus33.innerHTML = RIGHT_ANSWER;
            points++;
       }
       else if (questionKolme == "50 / 5 = " && vastauskentta3 == 10){
            tarkistus33.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else {
            if (questionKolme == "64 / 8 = " && vastauskentta3 != 8){
                tarkistus33.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "8.";
            }
            else if (questionKolme == "81 / 9 = " && vastauskentta3 != 9){
                tarkistus33.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "9.";
            }
            else if (questionKolme == "36 / 6 = " && vastauskentta3 != 6){
                tarkistus33.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "6.";
            }
            else if (questionKolme == "50 / 5 = " && vastauskentta3 != 10){
                tarkistus33.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "10.";
            }      
        }
        document.getElementById("check-btn13").disabled = true;
}

//tehtävä 4

function question44() {
    let vastauskentta4 = document.getElementById("vastaus14").value;
        if (questionNelja == "45 / 5 / 3 = " && vastauskentta4 == 3) {
            tarkistus44.innerHTML = RIGHT_ANSWER;
            points++;
        } 
        else if (questionNelja == "72 / 9 / 4 = " && vastauskentta4 == 2){
            tarkistus44.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else if (questionNelja == "100 / 10 / 5 = " && vastauskentta4 == 2){
            tarkistus44.innerHTML = RIGHT_ANSWER;
            points++;
       }
       else if (questionNelja == "27 / 9 / 3 = " && vastauskentta4 == 1){
            tarkistus44.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else {
            if (questionNelja == "45 / 5 / 3 = " && vastauskentta4 != 3){
                tarkistus44.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "3."; 
            }
            else if (questionNelja == "72 / 9 / 4 = " && vastauskentta4 != 2){
                tarkistus44.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "2."; 
            }
            else if (questionNelja == "100 / 10 / 5 = " && vastauskentta4 != 2){
                tarkistus44.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "2."; 
            }
            else if (questionNelja == "27 / 9 / 3 = " && vastauskentta4 != 1){
                tarkistus44.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "1."; 
            }     
        }
        document.getElementById("check-btn14").disabled = true;
}

//tehtävä 5

function question55() {
    let vastauskentta5 = document.getElementById("vastaus15").value;
        if (questionViisi == "4 * 7 / 2 = " && vastauskentta5 == 14) {
            tarkistus55.innerHTML = RIGHT_ANSWER;
            points++;
        } 
        else if (questionViisi == "56 / 7 * 9 = " && vastauskentta5 == 72){
            tarkistus55.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else if (questionViisi == "8 * 6 / 4 = " && vastauskentta5 == 12){
            tarkistus55.innerHTML = RIGHT_ANSWER;
            points++;
       }
       else if (questionViisi == "36 / 6 * 5 = " && vastauskentta5 == 30){
            tarkistus55.innerHTML = RIGHT_ANSWER;
            points++;
        }
        else {
            if (questionViisi == "4 * 7 / 2 = " && vastauskentta5 != 14){
                tarkistus55.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "14.";
            }
            else if (questionViisi == "56 / 7 * 9 = " && vastauskentta5 != 72){
                tarkistus55.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "64.";
            }
            else if (questionViisi == "8 * 6 / 4 = " && vastauskentta5 != 12){
                tarkistus55.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "12.";
            }
            else if (questionViisi == "36 / 6 * 5 = " && vastauskentta5 != 30){
                tarkistus55.innerHTML = WRONG_ANSWER + " oikea vastaus on " + "30.";
            }     
        }
        document.getElementById("check-btn15").disabled = true;
}

//lopputulos

//tarkista tulokset 

function checkResult2() {

let finalResult = points + " / 5 ";
let check1 = document.getElementById("check-btn11");
let check2 = document.getElementById("check-btn12");
let check3 = document.getElementById("check-btn13");
let check4 = document.getElementById("check-btn14");
let check5 = document.getElementById("check-btn15");
if ( check1.disabled && check2.disabled && check3.disabled && check4.disabled && check5.disabled ){
    if(points < 3){
        document.getElementById("finalResult").innerHTML = finalResult + "<br>" + pisteet1_2
    }
    else{
        document.getElementById("finalResult").innerHTML = finalResult + "<br>" + pisteet3_5
        
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
        "Vastaa ensin kaikkiin kysymyksiin!";
}
}





