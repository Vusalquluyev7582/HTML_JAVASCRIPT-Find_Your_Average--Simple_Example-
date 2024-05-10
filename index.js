let exam1 = Number(prompt("Birinci imtahan nəticəsini daxil edin"));
let exam2 = Number(prompt("İkinci imtahan nəticəsini daxil edin"));

let final = Number(prompt("Final imtahan nəticəsini daxil edin"));


let average = (exam1 * 0.3) + (exam2 * 0.3) + (final * 0.4);


if (average >= 60) {
    alert("İmtahandan keçdiniz. TƏBRİKLƏR 👏 -" + " Toplam nəticə " + average + " bal")
    console.log("İmtahandan keçdiniz. TƏBRİKLƏR 👏 -" + " Toplam nəticə " + average + " bal")
}
else {
    alert("Təəssüf ki imtahandan keçə bilmədiniz 😥 -" + " Toplam nəticə " + average + " bal")
    console.log("Təəssüf ki imtahandan keçə bilmədiniz 😥 -" + " Toplam nəticə " + average + " bal")
}