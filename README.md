# Form Biglietto del Treno

_HTML+css+js_

Creazione di un form base per l' acquisto di un biglietto del treno, utilizzando il codice js creato nello scorso [esercizio](https://github.com/CaldatoLuca/js-biglietto-treno).

## Indice

- [Scomposizone del problema](#scomposizione-del-problema)
- [Soluzione](#soluzione)

### Scomposizione del problema

1. Selezionare i dati tramite input e non prompt
2. Creare un evento al click del bottone per avviare il programma
3. Restituire in output i dati inseriti e il prezzo finale (diverso a seconda dell' età)

NB

Rendere il biglietto `display:none` e mostrarlo solo al click del tasto invia

Creare un tasto annulla che pulisce il form e faccia sparire il biglietto

### Soluzione

Selezionare i dati tramite input e non prompt

```html
<input id="nome-passeggero" type="text" />
<input id="km" type="number" />
<input id="age" type="text" />
```

```js
const elementNomeCognome = document.querySelector("#nome-passeggero").value;
const kmRichiesti = Number(document.querySelector("#km").value);
const etaPasseggiero = Number(document.querySelector("#age").value);
```

- richiamo i dati assegnando alle variabili gli elementi presenti nell' HTML `document.querySelector("#km")` (NB - posso usare qualsiasi tipo di selettore css tra le parentesi)
- ne prendo il valore inserito dall' utente con `.value` alla fine (NB - funziona solo su tag input)
- per Km e età uso `Number` per trasformare il dato inserito in un numero effettivo (NB - a differenza di `parseInt` accetta i decimali)

Creare un evento al click del bottone per avviare il programma

```html
<input type="submit" id="btn1" />
```

```js
const bottone1 = document.querySelector("#btn1");
bottone1.addEventListener("mousedown", function () {});
```

- creo un evento `bottone1.addEventListener`
- si attiverà al click premuto del bottone `bottone1.addEventListener("mousedown"` (NB - esistono molti tipi di interazioni che possono attivare la function, simili a quelli usati nel css)
- inserisco il programma dello scorso esercizio nelle parentesi graffe `function ()`

Restituire in output i dati inseriti e il prezzo finale (diverso a seconda dell' età)

```html
<p id="offerta"></p>
<p id="carrozza"></p>
<p id="codice-cp"></p>
<p id="costo-biglietto"></p>
```

```js
elementOfferta.innerHTML = "Offerta base";
elementCarrozza.innerHTML = Math.floor(Math.random() * 10 + 1);
elementCodiceCP.innerHTML = Math.floor(Math.random() * 100000 + 1);
if (etaPasseggiero < 18) {
  elementOfferta.innerHTML = "Offerta Junior";
} else if (etaPasseggiero >= 65) {
  elementOfferta.innerHTML = "Offerta Senior";
}
stampaNomeCognome.innerHTML = elementNomeCognome;
elementCostoBiglietto.innerHTML = prezzoBiglietto.toFixed(2);
```

- uso `.innerHTML` per avere un riscontro visivo dei dati inseriti

NB
parte del codice è stata cancellata per rendere più chiaro l' uso di `.innerHTML`

Rendere il biglietto `display:none` e mostrarlo solo al click del tasto invia

```html
<div id="my-ticket" class="d-none >
</div>
```

```js
bottone1.addEventListener("mousedown", function () {
  elementIlTuoBiglietto.classList.toggle("d-none");
});
```

- inserisco all' interno dell' evento click `elementIlTuoBiglietto.classList.toggle("d-none");`
- `classList` permette di lavorare con le classi di un elemento HTML e può assumere vari valori (add, remove, toggle ...)
- in questo caso `.toggle` rimuove la classe `d-none` se presente nel div altrimenti la aggiunge

Creare un tasto annulla che pulisce il form e faccia sparire il biglietto

```html
<input id="btn2" type="reset" value="Annulla" />
```

```js
const bottone2 = document.querySelector("#btn2");
bottone2.addEventListener("click", function () {
  elementIlTuoBiglietto.classList.add("d-none");
});
```

- creo un tasto `reset` che di base ripulisce il form
- ne assegno un evento (come col bottone1)
- al suo click aggiungo la classe d-none al mio div biglietto (sono sicuro che sparisca)
