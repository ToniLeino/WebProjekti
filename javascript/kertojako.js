//random generaattori

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//Matematiikan tehtäviä arrayssä

const Kerto = ["3 * 5 = ?", "6 * 7 = ?", "9 * 4 = ?", "6 * 6 = ?"];
const Jako = ["50 / 5 = ?", "64 / 8 = ?", "72 / 8 = ?", "35 / 7 = ?"];
const kertoJaJako = ["4 * 8 / 2 = ?", "6 * 6 / 4 = ?", "8 * 6 / 4 = ?", "4 * 9 / 6 = ?"];
const mikaValimerkki = ["4 * 4 ? 2 = 8", "6 ? 5 / 3 = 10", "5 * 3 ? 3 = 45", "90 ? 10 * 2 = 20"];
const mikaNumero = ["5 * 8 / ? = 20", "6 * ? * 2 = 64", "5 * ? 4 / 2 = 10", "6 * 6 / ? = 12"]