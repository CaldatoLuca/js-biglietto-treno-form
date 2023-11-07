("use strict");

const bottone1 = document.querySelector("#btn1");
const bottone2 = document.querySelector("#btn2");
const elementCostoBiglietto = document.querySelector("#costo-biglietto");
const prezzoKm = 0.21;
const percentualeScontoMinorenni = 20;
const percentualeScontoOver65 = 40;

bottone1.addEventListener("click", function () {
  const kmRichiesti = Number(document.querySelector("#km").value);
  const etaPasseggiero = Number(document.querySelector("#age").value);

  const elementIlTuoBiglietto = document.querySelector("#my-ticket");
  console.log(kmRichiesti);
  console.log(etaPasseggiero);

  if (!isNaN(kmRichiesti) && !isNaN(etaPasseggiero)) {
    let prezzoBiglietto = kmRichiesti * prezzoKm;
    let scontoBiglietto = 0;

    if (etaPasseggiero < 18) {
      scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoMinorenni;
    } else if (etaPasseggiero >= 65) {
      scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoOver65;
    }

    prezzoBiglietto -= scontoBiglietto;
    console.log("Il prezzo del biglietto è: " + prezzoBiglietto.toFixed(2));
    elementCostoBiglietto.innerHTML = prezzoBiglietto.toFixed(2);
  } else {
    console.log("Errore");
  }

  elementIlTuoBiglietto.classList.toggle("d-none");
});

bottone2.addEventListener("click", function () {
  elementIlTuoBiglietto.classList.add("d-none");
});
