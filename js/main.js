("use strict");

const bottone1 = document.querySelector("#btn1");
const bottone2 = document.querySelector("#btn2");
const elementCostoBiglietto = document.querySelector("#costo-biglietto");
const elementIlTuoBiglietto = document.querySelector("#my-ticket");
const prezzoKm = 0.21;
const percentualeScontoMinorenni = 20;
const percentualeScontoOver65 = 40;

bottone1.addEventListener("mousedown", function () {
  const kmRichiesti = Number(document.querySelector("#km").value);
  const etaPasseggiero = Number(document.querySelector("#age").value);
  const elementNomeCognome = document.querySelector("#nome-passeggero").value;
  const stampaNomeCognome = document.querySelector("#nome-passeggero-stampa");
  const elementOfferta = document.querySelector("#offerta");
  const elementCarrozza = document.querySelector("#carrozza");
  const elementCodiceCP = document.querySelector("#codice-cp");
  console.log(elementNomeCognome);
  console.log(kmRichiesti);
  console.log(etaPasseggiero);

  elementOfferta.innerHTML = "Offerta base";
  elementCarrozza.innerHTML = Math.floor(Math.random() * 10 + 1);
  elementCodiceCP.innerHTML = Math.floor(Math.random() * 100000 + 1);

  if (!isNaN(kmRichiesti) && !isNaN(etaPasseggiero)) {
    let prezzoBiglietto = kmRichiesti * prezzoKm;
    let scontoBiglietto = 0;

    if (etaPasseggiero < 18) {
      scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoMinorenni;
      elementOfferta.innerHTML = "Offerta Junior";
    } else if (etaPasseggiero >= 65) {
      scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoOver65;
      elementOfferta.innerHTML = "Offerta Senior";
    }

    stampaNomeCognome.innerHTML = elementNomeCognome;
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
