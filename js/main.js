"use strict";
//? elementi HTML
const elementUtente = document.querySelector("#utente");
const elementKmUtente = document.querySelector("#km");
const elementEtaUtente = document.getElementById("eta");
const elementButtonGenera = document.querySelector("#genera");
const elementButtonAnnulla = document.querySelector("#annulla");
//? elementi biglietto virtuale
const elementBigliettoVirtuale = document.querySelector("#biglietto-virtuale");
const elementNomeUtente = document.querySelector("#nome-utente");
const elementTariffaBiglietto = document.querySelector("#tariffa-biglietto");
const elementCarrozzaBiglietto = document.querySelector("#carrozza-biglietto");
const elementCpBiglietto = document.querySelector("#cp-biglietto");
const elementPrezzoBiglietto = document.querySelector("#prezzo-biglietto");

// ?dati calcolo biglietto
const costoBigliettoKm = 0.21;
const scontoMinorennePercentuale = 20;
const scontoMaggiorennePercentuale = 40;

// !calcolo biglietto virtuale
elementButtonGenera.addEventListener("click", function () {
  let prezzoBiglietto = costoBigliettoKm * Number(elementKmUtente.value);
  let tariffa = "Offerta Base";

  if (elementEtaUtente.value === "minorenne") {
    prezzoBiglietto -= (prezzoBiglietto * scontoMinorennePercentuale) / 100;
    tariffa = "Offerta Under 18";
  } else if (elementEtaUtente.value === "over") {
    prezzoBiglietto -= (prezzoBiglietto * scontoMaggiorennePercentuale) / 100;
    tariffa = "Offerta Over 65";
  }

  console.log(tariffa);

  //* mostro biglietto virtuale
  elementBigliettoVirtuale.classList.toggle("d-none");

  //* assegno valori dom
  elementNomeUtente.innerHTML = elementUtente.value;
  elementTariffaBiglietto.innerHTML = tariffa;
  elementPrezzoBiglietto.innerHTML = prezzoBiglietto.toFixed(2) + "£";
  elementCarrozzaBiglietto.innerHTML = Math.floor(Math.random() * 10 + 1);
  elementCpBiglietto.innerHTML = Math.floor(Math.random() * 100000 + 1);
});

// !resetto campi di input e biglietto virtuale
elementButtonAnnulla.addEventListener("click", function () {
  elementUtente.value = "";
  elementKmUtente.value = "";
  elementEtaUtente.value = "";
  elementBigliettoVirtuale.classList.add("d-none");
});
