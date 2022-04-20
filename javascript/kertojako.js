//random generaattori

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let vastKent1 = document.getElementById("vastaus1.1")
let vastKent2 = document.getElementById("vastaus1.2")
let vastKent3 = document.getElementById("vastaus1.3")
let vastKent4 = document.getElementById("vastaus1.4")

let vastKentat = [vastKent1, vastKent2, vastKent3, vastKent4]

let kysymys = document.getElementById("questionYksi")


//Matematiikan tehtävä vaihtoehtoja arrayssä
let kerto1 = ["3 * 5 = ?", "6 * 7 = ?", "9 * 4 = ?", "6 * 6 = ?"];
let kerto2 = ["6 * 3 * 2 = ?", "3 * 3 * 3 = ?", "3 * 4 * 3 = ?", "7 * 2 * 2 = ?"];
let jako1 = ["64 / 8 = ?", "81 / 9 = ?", "36 / 6 = ?", "50 / 5 = ?"];
let jako2 = ["45 / 5 / 3 = ?", "72 / 9 / 4 = ?", "100 / 10 / 5 = ?", "27 / 9 / 3 = ?"];
let kertoJako = ["4 * 7 / 2 = ?", "56 / 7 * 9 = ?", "8 * 6 / 4 = ?", "36 / 6 * 5 = ?"];

//matematiikan tehtävien oikeat vaihtoehdot
let kerto1Oikea = ["15", "42", "36", "36"];
let kerto2Oikea = ["36", "27", "36", "28"];
let jako1Oikea = ["8", "9", "6", "10"];
let jako2Oikea = ["3", "2", "2", "1"];
let kertoJakoOikea = ["14", "64", "12", "30"]



//matematiikan tehtävien väärät vaihtoehdot
let kerto1Vaara = ["68", "54", "13", "17", "16", "20", "74", "60"];
let kerto2Vaara = ["36", "27", "33", "28", "74", "55", "6", "73"];
let jako1Vaara = ["8", "9", "6", "10", "13", "19", "32", "30"];
let jako2Vaara = ["3", "4", "88", "90", "5", "8", "10", "13"];
let kertoJakoVaara = ["14", "64", "12", "30", "13", "16", "21", "53"]

let questionYksi = kerto1[(Math.random() * kerto1.length) | 0]
document.getElementById("questionYksi").innerHTML = questionYksi
let questionKaksi = kerto2[(Math.random() * kerto2.length) | 0]
document.getElementById("questionKaksi").innerHTML = questionKaksi
let questionKolme = jako1[(Math.random() * jako1.length) | 0]
document.getElementById("questionKolme").innerHTML = questionKolme
let questionNelja = jako2[(Math.random() * jako2.length) | 0]
document.getElementById("questionNelja").innerHTML = questionNelja
let questionViisi = kertoJako[(Math.random() * kertoJako.length) | 0]
document.getElementById("questionViisi").innerHTML = questionViisi

//1.x

let vastaus11 = kerto1Vaara[(Math.random() * kerto1Vaara.length) | 0]
kerto1Vaara = kerto1Vaara.filter(function(item) {
    return item !== vastaus11
})
document.getElementById("vastaus1.1").innerHTML = vastaus11

let vastaus12 = kerto1Vaara[(Math.random() * kerto1Vaara.length) | 0]
kerto1Vaara = kerto1Vaara.filter(function(item) {
    return item !== vastaus12
})
document.getElementById("vastaus1.2").innerHTML = vastaus12

let vastaus13 = kerto1Vaara[(Math.random() * kerto1Vaara.length) | 0]
kerto1Vaara = kerto1Vaara.filter(function(item) {
    return item !== vastaus13
})
document.getElementById("vastaus1.3").innerHTML = vastaus13

let vastaus14 = kerto1Vaara[(Math.random() * kerto1Vaara.length) | 0]
kerto1Vaara = kerto1Vaara.filter(function(item) {
    return item !== vastaus14
})
document.getElementById("vastaus1.4").innerHTML = vastaus14

//2.x

let vastaus21 = kerto2Vaara[(Math.random() * kerto2Vaara.length) | 0]
kerto2Vaara = kerto2Vaara.filter(function(item) {
    return item !== vastaus21
})
document.getElementById("vastaus2.1").innerHTML = vastaus21

let vastaus22 = kerto2Vaara[(Math.random() * kerto2Vaara.length) | 0]
kerto2Vaara = kerto2Vaara.filter(function(item) {
    return item !== vastaus22
})
document.getElementById("vastaus2.2").innerHTML = vastaus22

let vastaus23 = kerto2Vaara[(Math.random() * kerto2Vaara.length) | 0]
kerto2Vaara = kerto2Vaara.filter(function(item) {
    return item !== vastaus23
})
document.getElementById("vastaus2.3").innerHTML = vastaus23

let vastaus24 = kerto2Vaara[(Math.random() * kerto2Vaara.length) | 0]
kerto2Vaara = kerto2Vaara.filter(function(item) {
    return item !== vastaus24
})
document.getElementById("vastaus2.4").innerHTML = vastaus24

//3.x

let vastaus31 =jako1Vaara[(Math.random() * jako1Vaara.length) | 0]
jako1Vaara = jako1Vaara.filter(function(item) {
    return item !== vastaus31
})
document.getElementById("vastaus3.1").innerHTML = vastaus31

let vastaus32 = jako1Vaara[(Math.random() * jako1Vaara.length) | 0]
jako1Vaara = jako1Vaara.filter(function(item) {
    return item !== vastaus32
})
document.getElementById("vastaus3.2").innerHTML = vastaus32

let vastaus33 = jako1Vaara[(Math.random() * jako1Vaara.length) | 0]
jako1Vaara = jako1Vaara.filter(function(item) {
    return item !== vastaus33
})
document.getElementById("vastaus3.3").innerHTML = vastaus33

let vastaus34 = jako1Vaara[(Math.random() * jako1Vaara.length) | 0]
jako1Vaara = jako1Vaara.filter(function(item) {
    return item !== vastaus34
})
document.getElementById("vastaus3.4").innerHTML = vastaus34

//4.x

let vastaus41 = jako2Vaara[(Math.random() * jako2Vaara.length) | 0]
jako2Vaara = jako2Vaara.filter(function(item) {
    return item !== vastaus41
})
document.getElementById("vastaus4.1").innerHTML = vastaus41

let vastaus42 = jako2Vaara[(Math.random() * jako2Vaara.length) | 0]
jako2Vaara = jako2Vaara.filter(function(item) {
    return item !== vastaus42
})
document.getElementById("vastaus4.2").innerHTML = vastaus42

let vastaus43 = jako2Vaara[(Math.random() * jako2Vaara.length) | 0]
jako2Vaara = jako2Vaara.filter(function(item) {
    return item !== vastaus43
})
document.getElementById("vastaus4.3").innerHTML = vastaus43

let vastaus44 = jako2Vaara[(Math.random() * jako2Vaara.length) | 0]
jako2Vaara = jako2Vaara.filter(function(item) {
    return item !== vastaus44
})
document.getElementById("vastaus4.4").innerHTML = vastaus44

//5.x

let vastaus51 = kertoJakoVaara[(Math.random() * kertoJakoVaara.length) | 0]
kertoJakoVaara = kertoJakoVaara.filter(function(item) {
    return item !== vastaus51
})
document.getElementById("vastaus5.1").innerHTML = vastaus51

let vastaus52 = kertoJakoVaara[(Math.random() * kertoJakoVaara.length) | 0]
kertoJakoVaara = kertoJakoVaara.filter(function(item) {
    return item !== vastaus52
})
document.getElementById("vastaus5.2").innerHTML = vastaus22

let vastaus53 = kertoJakoVaara[(Math.random() * kertoJakoVaara.length) | 0]
kertoJakoVaara = kertoJakoVaara.filter(function(item) {
    return item !== vastaus53
})
document.getElementById("vastaus5.3").innerHTML = vastaus53

let vastaus54 = kertoJakoVaara[(Math.random() * kertoJakoVaara.length) | 0]
kertoJakoVaara = kertoJakoVaara.filter(function(item) {
    return item !== vastaus54
})
document.getElementById("vastaus5.4").innerHTML = vastaus54

//kysymykset ja oikeat vastaukset

if (kysymys = "3 * 5 = ?") {
    document.getElementById("vastaus1.1").innerHTML = "15"

}











