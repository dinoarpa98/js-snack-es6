// Snack 3
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// Snack 4
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = 0;
const max = 5;

const empty = [];

myArray.forEach(
    (element, index) => {
        console.log(element, index);
        if (index > min && index < max) {
            empty.push[element];
        }
    });

console.log(empty);


// filter

const empty2 = myArray.filter(
    (element, index) => {
        if (index > min && index < max) {
            return true;
        }
    });


console.log(empty2);