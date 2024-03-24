//const de l'input et du span ou est affiché le resultat
const resultat = document.querySelector('.resultat')
const conversion = document.querySelector('.conversion')

//l'evenement input interagit dès que l'input est complété/changé
conversion.addEventListener("input", function() {
    var calcul = conversion.value * 6.55957
    // console.log(typeof conversion.value)
    resultat.innerHTML = calcul.toFixed(2); //tofixed (n) arrondi au n chiffre après la virgule
})
