/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
};

/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Effetua un ciclo per 5 volte.

    2- Sono presenti errori di sintassi?
    No

    3- Sono presenti errori logici?
    Si


*******************************************************************************/


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
};
console.log(addIfEven(10));

/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Se il numero selezionato è divisibile per 2 aggiunge 5, altrimenti restituisce il numero selezionato

    2- Sono presenti errori di sintassi?
    Si

    3- Sono presenti errori logici?
    No


*******************************************************************************/





// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
};
console.log(loopToFive());

/*******************************************************************************

    
    1- Che cosa fa questo codice?
    Effetua un ciclo per 5 volte, all'interno di una funzione

    2- Sono presenti errori di sintassi?
    Si

    3- Sono presenti errori logici?
    No


*******************************************************************************/



// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(displayEvenNumbers());

/*******************************************************************************

    
    1- Che cosa fa questo codice?
    La funzione divivde per 2 tutti i numeri all'interno dell'array e inserisce in un altro array solo quelli che non danno resto.

    2- Sono presenti errori di sintassi?
    Si

    3- Sono presenti errori logici?
    Si


*******************************************************************************/



