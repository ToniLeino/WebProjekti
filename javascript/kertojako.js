//random generaattori

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//Matematiikan tehtäviä arrayssä

const kerto = ["3 * 5 = ?", "6 * 7 = ?", "9 * 4 = ?", "6 * 6 = ?"];
const jako = ["50 / 5 = ?", "64 / 8 = ?", "72 / 8 = ?", "35 / 7 = ?"];
const kertoJaJako = ["4 * 8 / 2 = ?", "6 * 6 / 4 = ?", "8 * 6 / 4 = ?", "4 * 9 / 6 = ?"];
const mikaValimerkki = ["4 * 4 ? 2 = 8", "6 ? 5 / 3 = 10", "5 * 3 ? 3 = 45", "90 ? 10 * 2 = 20"];
const mikaNumero = ["5 * 8 / ? = 20", "6 * ? * 2 = 64", "5 * ? 4 / 2 = 10", "6 * 6 / ? = 12"];

const questionYksi = kerto[(Math.random() * kerto.length) | 0]
document.getElementById("questionYksi").innerHTML = questionYksi

const questionKaksi = jako[(Math.random() * jako.length) | 0]
document.getElementById("questionKaksi").innerHTML = questionKaksi

const questionKolme = kertoJaJako[(Math.random() * kertoJaJako.length) | 0]
document.getElementById("questionKolme").innerHTML = questionKolme

const questionNelja = mikaValimerkki[(Math.random() * mikaValimerkki.length) | 0]
document.getElementById("questionNelja").innerHTML = questionNelja

const questionViisi = mikaNumero[(Math.random() * mikaNumero.length) | 0]
document.getElementById("questionViisi").innerHTML = questionViisi


