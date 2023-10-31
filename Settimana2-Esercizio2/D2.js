/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = parseFloat(prompt("Inserisci il numero 1"))
const num2 = parseFloat(prompt("Inserisci il numero 2"))
let risultato

if(num1 > num2){
  risultato = num1
}
else{
 risultato = num2
}

Alert(`Il numero più grande tra ${num1} e ${num2} è ${risultato}`)


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num = parseInt(prompt("Inserisci il numero"))
if( num !== 5){
  alert("not equal")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = parseFloat(prompt("Inserisci il numero 1"))
const num2 = parseFloat(prompt("Inserisci il numero 2"))
let somma

somma=num1+num2

if(num1=8){
    alert(`${num1} è 8`)
}
else if(num2=8){
  alert(`${num2} è 8`)
 
}
else(somma=8){
  alert(`il valore della somma è ${somma}`)
  
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = parseFloat(prompt(Inserisci il totale))
let TotaleConSpedizione;
if(totalShoppingCart>50){
  alert(`il totale:${totalShoppingCart} supera i 50 euro, spedizione gratuita`)
}
else{
  TotaleConSpedizione=totalShoppingCart + 10
  alert(`il totale:${totalShoppingCart} non supera i 50 euro, il nuovo totale è:${TotaleConSpedizione}`)

}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const art1 = parseFloat(prompt(Inserisci il primo articolo))
const art2 = parseFloat(prompt(Inserisci il secondo articolo))


let TotaleConSpedizione;
let totalShoppingCart;
totalShoppingCart=(art1 - 20%)+(art2 - 20%)


if(totalShoppingCart>50){
  alert(`il totale:${totalShoppingCart} supera i 50 euro, spedizione gratuita`)
}
else{
  TotaleConSpedizione=totalShoppingCart + 10
  alert(`il totale:${totalShoppingCart} non supera i 50 euro, il nuovo totale è:${TotaleConSpedizione}`)

}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = parseFloat(prompt(Inserisci il primo numero))
const num2 = parseFloat(prompt(Inserisci il primo secondo))
const num3 = parseFloat(prompt(Inserisci il primo terzo))

var numeri = ["num1","num2", "num3"];
numeri.reverse();
console.log(numeri)
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */  
const valore = (prompt(Inserisci il valore))
console.log(typeof(valore));

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = parseFloat(prompt(Inserisci il numero))
let risultato = numero % 2;
if(risultato == 0){
  return false;
}else if(risultato == 1){
  return true;
}else{
  alert("Non è un numero intero");
  return "";
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else if(val => 10){
    console.log("Uguale a 10 o maggiore");

  }
    
  

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = Toronto;
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = Toronto;
delete me.lastName;
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = Toronto;
delete me.lastName;
delete me.skills.css
/* ESERCIZIO 13
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
var numeri = [];
numeri.push("1","2","3","4","5","6","7","8","9","10")

console.log(numeri);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var numeri = ["1","2","3","4","5","6","7","8","9","10"]

delete numeri[9];
numeri.push(100);

console.log(numeri)