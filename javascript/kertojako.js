//random generaattori
let points = 0;
const RIGHT_ANSWER = "Vastauksesi on oikein! Hyvää työtä!";
const WRONG_ANSWER = "Vastauksesi on väärin!";
const ANSWER_ERROR = "Valitse vastaus ennen tarkistusta!";

//1.kysymys

/*let min = 1;
let max = 10;
let int1 = Math.floor(Math.random() * (max - min + 1)) + min;
let int2 = Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById("kysymysYksi").innerHTML = int1 + " " + "*" + " " + int2 + " = ";

let kertoAnswer = int1 * int2;



//2.kysymys

let min2 = 100;
let max2 = 2;
let int3 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
let int4 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

document.getElementById("kysymysKaksi").innerHTML = int3 + " " + "/" + " " + int4 + " = ";

let jakoAnswer = int3 / int4;

function question22() {
    let vastauskentta22 = document.getElementById("vastaus12").value;
        if (vastauskentta22 == jakoAnswer) {
            tarkistus22.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            tarkistus22.innerHTML = WRONG_ANSWER;   
        }
        document.getElementById("check-btn1").disabled = true;
    
    for(let i = 0; i > jakoAnswer; ){}

}*/

//random generaattori

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}





//Matematiikan tehtävä vaihtoehtoja arrayssä
let kerto1 = ["3 * 5 = ", "6 * 7 = ", "9 * 4 = ", "6 * 6 = "];
let kerto2 = ["6 * 3 * 2 = ", "3 * 3 * 3 = ", "3 * 4 * 3 = ", "7 * 2 * 2 = "];
let jako1 = ["64 / 8 = ", "81 / 9 = ", "36 / 6 = ", "50 / 5 = "];
let jako2 = ["45 / 5 / 3 = ", "72 / 9 / 4 = ", "100 / 10 / 5 = ", "27 / 9 / 3 = "];
let kertoJako = ["4 * 7 / 2 = ", "56 / 7 * 9 = ", "8 * 6 / 4 = ", "36 / 6 * 5 = "];

/*//matematiikan tehtävien oikeat vaihtoehdot
let kerto1Oikea = ["15", "42", "36", "36"];
let kerto2Oikea = ["36", "27", "36", "28"];
let jako1Oikea = ["8", "9", "6", "10"];
let jako2Oikea = ["3", "2", "2", "1"];
let kertoJakoOikea = ["14", "64", "12", "30"]*/



//matematiikan tehtävien väärät vaihtoehdot
let kerto1Vaara = ["68", "54", "13", "17", "16", "20", "74", "60"];
let kerto2Vaara = ["36", "27", "33", "28", "74", "55", "6", "73"];
let jako1Vaara = ["8", "9", "6", "10", "13", "19", "32", "30"];
let jako2Vaara = ["3", "4", "88", "90", "5", "8", "10", "13"];
let kertoJakoVaara = ["14", "64", "12", "30", "13", "16", "21", "53"]

let vastaus = 15

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

/*//1.x

let vastaus11 = kerto1Vaara[(Math.random() * kerto1Vaara.length) | 0]
kerto1Vaara = kerto1Vaara.filter(function(item) {
    return item !== vastaus11
})
document.getElementById("vastaus1.1").innerHTML = vastaus11*/


function question11() {
    let vastauskentta = document.getElementById("vastaus11").value;
        if (vastauskentta == 15 && questionYksi == "3 * 5 = ") {
            tarkistus11.innerHTML = RIGHT_ANSWER;
            points++;
        } else {
            tarkistus11.innerHTML = WRONG_ANSWER;   
        }
        document.getElementById("check-btn").disabled = true;
}







