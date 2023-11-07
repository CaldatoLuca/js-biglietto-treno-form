("use strict");

// const kmRichiesti = Number(prompt("Quanti Km devi percorrere?"));
// const etaPasseggiero = Number(prompt("Inesrisci qui la tua età"));
const prezzoKm = 0.21;
const percentualeScontoMinorenni = 20;
const percentualeScontoOver65 = 40;

console.log({ kmRichiesti });
console.log({ etaPasseggiero });

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
} else {
  console.log("Errore");
}
